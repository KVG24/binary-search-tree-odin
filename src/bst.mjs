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
        return "No such node";
    }

    levelOrder(callback, queue = [this.root]) {
        if (!callback) {
            throw new Error("Provide a callback");
        }
        if (queue.length === 0) return;

        const curr = queue.shift();

        callback(curr);

        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);

        return this.levelOrder(callback, queue);
    }
}
