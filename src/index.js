import { Tree } from "./bst.mjs";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);

// Insertion and deletion
console.log("_________Insertion and deletion_________");
console.log(" ");
tree.insert(15);
tree.insert(22);
tree.insert(10);
tree.insert(2);
console.log("Insert 4 items");
console.log(" ");
tree.printTree();
tree.deleteItem(15);
tree.deleteItem(67);
console.log(" ");
console.log("Delete 2 items");
console.log(" ");
tree.printTree();
console.log(" ");
console.log(" ");

// Find method
console.log("_________Find method_________");
console.log(" ");
tree.printTree();
console.log(" ");
console.log("tree.find(99) → " + tree.find(99));
console.log(" ");
console.log("tree.find(23) ↓");
console.log(tree.find(23));
console.log(" ");
console.log(" ");

// Callbacks with different orders
console.log("_________Callbacks with different orders_________");
console.log(" ");
console.log("Level order");
tree.levelOrder((node) => console.log(node.data));
console.log(" ");
console.log("In order");
tree.inOrder((node) => console.log(node.data));
console.log(" ");
console.log("Pre order");
tree.preOrder((node) => console.log(node.data));
console.log(" ");
console.log("Post order");
tree.postOrder((node) => console.log(node.data));
console.log(" ");
console.log(" ");

// Height and depth
console.log("_________Height and depth_________");
console.log(" ");
tree.printTree();
console.log(" ");
console.log("Height of 15 - " + tree.height(23));
console.log("Depth of 1 - " + tree.depth(1));
console.log(" ");
console.log(" ");

// Balance check
console.log("_________Balance check_________");
console.log(" ");
console.log("Balanced? - " + tree.isBalanced());
tree.printTree();
tree.insert(11);
tree.insert(20);
tree.insert(30);
console.log(" ");
console.log("Balanced? - " + tree.isBalanced());
tree.printTree();
console.log(" ");
console.log(" ");

// Rebalancing
console.log("_________Rebalancing_________");
console.log(" ");
console.log("Old tree");
tree.printTree();
tree.insert(12);
tree.insert(22);
tree.insert(31);
console.log(" ");
console.log("Inserted 3 nodes");
tree.printTree();
console.log(" ");
console.log("Rebalanced tree");
tree.rebalance();
tree.printTree();
console.log(" ");
