const graph = {
    start: {
        a: 5,
        b: 2
    },
    a: {
        c: 4,
        d: 2
    },
    b: {
        a: 8,
        d: 7
    },
    c: {
        d: 6,
        end: 3
    },
    d: {
        end: 1
    },
    end: {}
    },
    costs = {
        a: 5,
        b: 2,
        c: Infinity,
        d: Infinity,
        end: Infinity
    },
    parents = {
        a: 'start',
        b: 'start',
        c: undefined,
        d: undefined,
        end: undefined
    };
    let processed = [],
        neibors = [];

function findCheapestNode() {
    let cheapestNode,
        node,
        cheapestCost = Infinity;
    for(node in costs) {
        if(costs[node] < cheapestCost && !(processed.includes(node))) {
            cheapestCost = costs[node];
            cheapestNode = node;
        }
    }
    return cheapestNode;
}

function newCosts(cheapestNode) {
    for(let node in neibors) {
        if(costs[cheapestNode] + neibors[node] < costs[node]) {
            costs[node] = costs[cheapestNode] + neibors[node];
            parents[node] = cheapestNode;
        }  
    }
}

function writePath(parents, init, aim) {
    let item = aim,
        path = [aim];
    
    while(item !== init) {
        path.push(parents[item]);
        item = parents[item];
    }
    return path.reverse().join(' -> ');
}

function searchPath (map) {
    let cheapestNode = findCheapestNode();
    while(cheapestNode != undefined) {
        neibors = map[cheapestNode];
        newCosts(cheapestNode);
        processed.push(cheapestNode);
        cheapestNode = findCheapestNode();
    }

    return (`${writePath(parents, 'start', 'end')}, total cost - ${costs.end}`);
}

console.log(searchPath(graph));