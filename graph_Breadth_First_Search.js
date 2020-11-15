`use strict`;

const graph = {
    you: ['bob', 'clare', 'alice'],
    bob: ['peggie', 'anuge'],
    clare: ['tom', 'bob', 'jonny', 'anuge'],
    alice: ['peggie'],
    peggie: [],
    anuge: ['ted'],
    tom: [],
    jonny: []
};

function writePath(data, init, aim) {
    let item = aim,
        path = [aim];
    
    while(item !== init) {
        path.push(data[item]);
        item = data[item];
    }
    return path.reverse().join(' -> ');
}

function searchPath(map, init, aim) {
    let queue = map[init],
        path = {},
        searched = [],
        node = init;

    for(let i = 0; i < map[node].length; i++) {
        path[map[node][i]] = node;
    }

    while(queue[0] !== undefined) {
        node = queue.shift();
        if(searched.includes(node)) {
            continue;
        } else {
            if(node === aim) {
                return writePath(path, init, aim);
            } else {
                queue = queue.concat(map[node]);
                for(let i = 0; i < map[node].length; i++) {
                    if(!(map[node][i] in path)) {
                        path[map[node][i]] = node;
                    }
                }
            }
            searched.push(node);
        }
        
    }
    if(queue[0] === undefined) {return 'Not found.';}
}

console.log(searchPath(graph, 'you', 'ted'));