class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    // Get the index of parent/children
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    // Swap two elements
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    // Insert a value into the heap
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    // Ensure the heap property is maintained after insertion
    heapifyUp() {
      let index = this.heap.length - 1;
  
      while (
        index > 0 &&
        this.heap[index] < this.heap[this.getParentIndex(index)]
      ) {
        this.swap(index, this.getParentIndex(index));
        index = this.getParentIndex(index);
      }
    }
  
    // Remove and return the smallest element
    extractMin() {
      if (this.heap.length === 0) return null;
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop(); // Move last element to the root
      this.heapifyDown();
      return min;
    }
  
    // Ensure the heap property is maintained after extraction
    heapifyDown() {
      let index = 0;
  
      while (this.getLeftChildIndex(index) < this.heap.length) {
        let smallerChildIndex = this.getLeftChildIndex(index);
  
        if (
          this.getRightChildIndex(index) < this.heap.length &&
          this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]
        ) {
          smallerChildIndex = this.getRightChildIndex(index);
        }
  
        if (this.heap[index] <= this.heap[smallerChildIndex]) {
          break;
        }
  
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      }
    }
  }
  
  // Usage
  const heap = new MinHeap();
  heap.insert(10);
  heap.insert(5);
  heap.insert(20);
  heap.insert(3);
  
  console.log(heap.extractMin()); // Output: 3
  console.log(heap.extractMin()); // Output: 5
  