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
}

export function printTree(node, prefix = "", isLeft = true) {
    if (node === null) return;

    if (node.right !== null) {
        printTree(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        printTree(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
}
