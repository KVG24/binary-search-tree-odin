class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    constructor(array) {
        const sortedArray = [...new Set(array)].sort((a, b) => a - b);
        this.root = this.buildTree(sortedArray);
    }

    buildTree(array) {
        if (array.length === 0) return null;

        let mid = Math.floor(array.length / 2);
        let root = new Node(array[mid]);

        root.left = this.buildTree(array.slice(0, mid));
        root.right = this.buildTree(array.slice(mid + 1));

        return root;
    }

    printTree(node = this.root, prefix = "", isLeft = true) {
        if (node === null) return;

        if (node.right !== null) {
            this.printTree(
                node.right,
                `${prefix}${isLeft ? "│   " : "    "}`,
                false
            );
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.printTree(
                node.left,
                `${prefix}${isLeft ? "    " : "│   "}`,
                true
            );
        }
    }

    insert(value, root = this.root) {
        if (value === root.data) return;

        if (value < root.data && !root.left) {
            root.left = new Node(value);
            return;
        }

        if (value > root.data && !root.right) {
            root.right = new Node(value);
            return;
        }

        if (value < root.data) this.insert(value, root.left);
        if (value > root.data) this.insert(value, root.right);
    }

    getSuccessor(curr) {
        curr = curr.right;
        while (curr !== null && curr.left !== null) {
            curr = curr.left;
        }
        return curr;
    }

    deleteItem(value, root = this.root) {
        if (root === null) {
            return root;
        }

        if (root.data > value) {
            root.left = this.deleteItem(value, root.left);
        } else if (root.data < value) {
            root.right = this.deleteItem(value, root.right);
        } else {
            if (root.left === null) return root.right;
            if (root.right === null) return root.left;

            let succ = this.getSuccessor(root);
            root.data = succ.data;
            root.right = this.deleteItem(succ.data, root.right);
        }
        return root;
    }

    find(value) {
        let curr = this.root;
        while (curr !== null) {
            if (curr.data === value) return curr;
            if (curr.data < value) curr = curr.right;
            else curr = curr.left;
        }
        return false;
    }

    levelOrder(callback, queue = [this.root]) {
        if (!callback) throw new Error("Provide a callback");

        if (queue.length === 0) return;

        const curr = queue.shift();

        callback(curr);

        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);

        return this.levelOrder(callback, queue);
    }

    inOrder(callback, root = this.root) {
        if (!callback) throw new Error("Provide a callback");
        if (root.left) this.inOrder(callback, root.left);
        callback(root);
        if (root.right) this.inOrder(callback, root.right);
    }

    preOrder(callback, root = this.root) {
        if (!callback) throw new Error("Provide a callback");
        callback(root);
        if (root.left) this.preOrder(callback, root.left);
        if (root.right) this.preOrder(callback, root.right);
    }

    postOrder(callback, root = this.root) {
        if (!callback) throw new Error("Provide a callback");
        if (root.left) this.postOrder(callback, root.left);
        if (root.right) this.postOrder(callback, root.right);
        callback(root);
    }

    height(node) {
        const targetNode = this.find(node);
        return this.heightCount(targetNode);
    }

    heightCount(targetNode) {
        let edges = 0;
        let leftEdges = 0;
        let rightEdges = 0;

        if (targetNode.left) {
            leftEdges = 1 + this.heightCount(targetNode.left);
        }
        if (targetNode.right) {
            rightEdges = 1 + this.heightCount(targetNode.right);
        }

        if (leftEdges >= rightEdges) edges += leftEdges;
        else edges += rightEdges;

        return edges;
    }

    depth(node, root = this.root, counter = 0) {
        if (node !== root.data) {
            if (node < root.data) return this.depth(node, root.left, ++counter);
            if (node > root.data)
                return this.depth(node, root.right, ++counter);
        } else {
            return counter;
        }
    }

    isBalanced() {
        const left = this.height(this.root.left.data);
        const right = this.height(this.root.right.data);
        const difference = Math.abs(left - right);

        if (difference <= 1) return true;
        else return false;
    }
}
