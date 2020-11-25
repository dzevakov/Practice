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
    //лишний отступ
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
        //neiGbors missing letter
        if(costs[cheapestNode] + neibors[node] < costs[node]) {
            costs[node] = costs[cheapestNode] + neibors[node];
            parents[node] = cheapestNode;
        }  
    }
}

function writePath(parents, init, aim) {
    //Лучше используй let для каждой переменной отдельно
    //Это по гайдлайинам(док описывающий правила оформления кода) гугла пункт 5.1.2
    //https://google.github.io/styleguide/jsguide.html#file-name
    //И я тоже почти не встречаю такой записи в проектах, ошибки не будет но так редко пишут
    //let item = aim;
    //let path = [aim];
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
    //you can write while(cheapestNode) {
    while(cheapestNode != undefined) {
        neibors = map[cheapestNode];
        newCosts(cheapestNode);
        processed.push(cheapestNode);
        cheapestNode = findCheapestNode();
    }

    return (`${writePath(parents, 'start', 'end')}, total cost - ${costs.end}`);
}

console.log(searchPath(graph));