class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
}
  
class BinaryTree {
  constructor() {
    this.root = null; 
  }

  insert(value) {
    const newNode = new TreeNode(value);
    
    if (!this.root) {
      this.root = newNode;
      return;
    }

    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();

      if (!node.left) {
        node.left = newNode;
        return;
      } else if (!node.right) {
        node.right = newNode;
        return;
      } else {
        queue.push(node.left, node.right);
      }
    }
  }

  inOrderTraversal(node = this.root) {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

  bfsTraversal() {
    if (!this.root) return;

    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      console.log(node.value); 

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  levelOrderTraversal() {
    if (!this.root) return;

    const queue = [this.root];
    while (queue.length) {
      let levelSize = queue.length;
      let levelNodes = [];

      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        levelNodes.push(node.value); // Collect values for the current level

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }

      console.log(levelNodes.join(",")); // Print all nodes of this level
    }
  }

  returnInOrder(root) {
    const result = [];
    
    function returnInOrderTraversal(node) {
        if (node) {
            returnInOrderTraversal(node.left);
            
            result.push(node.value);
            
            returnInOrderTraversal(node.right);
        }
    }
    
    returnInOrderTraversal(root);
    return result;
}
}
  
const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

tree.inOrderTraversal(); 
  