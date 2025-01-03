import { Tree } from "./bst.mjs";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);

// Insertion and deletion
// tree.insert(15);
// tree.insert(22);
// tree.insert(10);
// tree.insert(2);
// console.log("______________________________________");
// tree.printTree();
// console.log("Inserted 4 items");
// tree.deleteItem(15);
// tree.deleteItem(67);
// console.log("______________________________________");
// tree.printTree();
// console.log("Deleted 2 items");

// Find method
// console.log(tree.find(66));
// console.log(tree.find(67));

// Callbacks with different orders
// tree.levelOrder((node) => console.log(node.data));
// tree.inOrder((node) => console.log(node.data));
// tree.preOrder((node) => console.log(node.data));
// tree.postOrder((node) => console.log(node.data));

//Height and depth
// console.log(tree.height(67));
// console.log(tree.depth(7));

// Balance check
// console.log("Balanced? - " + tree.isBalanced());
// tree.insert(11);
// tree.insert(20);
// tree.insert(30);
// tree.printTree();
// console.log("Balanced? - " + tree.isBalanced());
