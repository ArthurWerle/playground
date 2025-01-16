class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Add a vertex
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Add an edge (directed)
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1)) {
      this.adjacencyList.get(vertex1).push(vertex2);
    }
  }

  // Display the graph
  display() {
    for (const [vertex, edges] of this.adjacencyList) {
      console.log(`${vertex} -> ${edges.join(', ')}`);
    }
  }

  // Depth-First Search (DFS)
  dfs(start, visited = new Set()) {
    if (!start || visited.has(start)) return;

    console.log(start);
    visited.add(start);

    for (const neighbor of this.adjacencyList.get(start)) {
      this.dfs(neighbor, visited);
    }
  }

  // Breadth-First Search (BFS)
  bfs(start) {
    const visited = new Set();
    const queue = [start];

    while (queue.length) {
      const vertex = queue.shift();
      if (visited.has(vertex)) continue;

      console.log(vertex);
      visited.add(vertex);

      for (const neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
}

// Usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');

graph.display();
// Output:
// A -> B, C
// B -> C
// C -> 

graph.dfs('A'); // Output: A, B, C
graph.bfs('A'); // Output: A, B, C
