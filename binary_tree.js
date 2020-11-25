`use strict`;

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.add = function(data) {
    const node = new Node(data);
    if (!this.root) {
        this.root = node;
        return this;
    }

    let current = this.root;

    while (current) {
        if (node.data < current.data) {
            if (!current.left) {
                //лишние отступы, должны быть одинаковые с break;
                    current.left = node;
                break;
            }
            current = current.left;
        } else if (node.data > current.data) {
            if (!current.right) {
                    current.right = node;
                break;
            }
            current = current.right;
        } else {
            break;
        }
    }
    return this;
};

function nextMinNode(node) {
    let minNode;
    let current = node.right;
    if (!current.left) {
        minNode = current;
        current = removeNode(current);
    } else {
        while (current.left.left) {
            current = current.left;
        }
        minNode = current.left;
        current.left = removeNode(current.left);
    }
    return minNode;
}

function removeNode(node) {
    if (!node.left && !node.right) {
        return null;
    } else if (node.left && !node.right) {
        return node.left;
    } else if (!node.left && node.right) {
        return node.right;
    } else if (node.left && node.right) {
        const newNode = nextMinNode(node);
        newNode.left = node.left;
        newNode.right = node.right;
        return newNode;
    }
}

BinarySearchTree.prototype.remove = function(data) {
    let current = this.root;
    if (current.data === data) {
        this.root = removeNode(current);
        return this;
    }

    while (current) {
        if (data < current.data && data !== current.left.data) {
            current = current.left;
        } else if (data > current.data && data !== current.right.data) {
            current = current.right;
        } else if (data < current.data && data == current.left.data) {
            current.left = removeNode(current.left);
            return this;
        } else if (data > current.data && data == current.right.data) {
            current.right = removeNode(current.right);
            return this;
        }
    }
    console.log("Value wasn't founded.");
//extra empty line
};

BinarySearchTree.prototype.search = function(data) {
    let current = this.root;
    if (current.data === data) {
        return true;
    }

    while (current) {
        if (data < current.data) {
            current = current.left;
        } else if (data > current.data) {
            current = current.right;
        } else {
            return true;
        }
    }
    return false;
};

BinarySearchTree.prototype.goRound = function() {
    let current;
    const searched = [],
          queue = [this.root];
    
        while (queue[0] !== undefined) {
            current = queue.pop();
            searched.push(current.data);

            if (current.right) {
                queue.push(current.right);
            }
            if (current.left) {
                queue.push(current.left);
            }
        }

    return searched;
};

const bst = new BinarySearchTree();
bst.add(8).add(3).add(10).add(1).add(6).add(4).add(7).add(10).add(14).add(13);
// bst.search(7);
// bst.remove(3);
// bst.goRound();
console.log(bst);