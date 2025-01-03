import { Tree } from "./bst.mjs";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);

tree.printTree();

// tree.insert(15);
// tree.insert(22);
// tree.insert(10);
// tree.insert(2);

// console.log("______________________________________");
// console.log(" ");
// tree.printTree();

// tree.deleteItem(15);
// tree.deleteItem(67);

// console.log("______________________________________");
// console.log(" ");
// tree.printTree();

// console.log(tree.find(67));

// tree.levelOrder((node) => console.log(node.data));

// tree.inOrder((node) => console.log(node.data));

// tree.preOrder((node) => console.log(node.data));

// tree.postOrder((node) => console.log(node.data));

// console.log(tree.height(4));

// console.log(tree.depth(8));
