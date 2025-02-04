// Graph class implementation
class Graph {
  constructor() {
      this.adjacencyList = new Map();
  }

  addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
          this.adjacencyList.set(vertex, []);
      }
  }

  addEdge(vertex1, vertex2, weight = 1) {
      this.adjacencyList.get(vertex1).push({ node: vertex2, weight });
      this.adjacencyList.get(vertex2).push({ node: vertex1, weight });
  }

  // 1. Breadth-First Search (BFS)
  bfs(startVertex) {
      const visited = new Set();
      const queue = [startVertex];
      const result = [];

      visited.add(startVertex);

      while (queue.length) {
          const vertex = queue.shift();
          result.push(vertex);

          for (let neighbor of this.adjacencyList.get(vertex)) {
              if (!visited.has(neighbor.node)) {
                  visited.add(neighbor.node);
                  queue.push(neighbor.node);
              }
          }
      }

      return result;
  }

  // 2. Depth-First Search (DFS)
  dfs(startVertex) {
      const visited = new Set();
      const result = [];

      const dfsHelper = (vertex) => {
          visited.add(vertex);
          result.push(vertex);

          for (let neighbor of this.adjacencyList.get(vertex)) {
              if (!visited.has(neighbor.node)) {
                  dfsHelper(neighbor.node);
              }
          }
      };

      dfsHelper(startVertex);
      return result;
  }

  // 3. Dijkstra's Shortest Path Algorithm
  dijkstra(startVertex, endVertex) {
      const distances = new Map();
      const previous = new Map();
      const pq = new PriorityQueue();

      // Initialize distances
      for (let vertex of this.adjacencyList.keys()) {
          if (vertex === startVertex) {
              distances.set(vertex, 0);
              pq.enqueue(vertex, 0);
          } else {
              distances.set(vertex, Infinity);
              pq.enqueue(vertex, Infinity);
          }
          previous.set(vertex, null);
      }

      while (!pq.isEmpty()) {
          let current = pq.dequeue().val;

          if (current === endVertex) {
              // Build path
              const path = [];
              while (previous.get(current)) {
                  path.unshift(current);
                  current = previous.get(current);
              }
              path.unshift(startVertex);
              return { path, distance: distances.get(endVertex) };
          }

          for (let neighbor of this.adjacencyList.get(current)) {
              let distance = distances.get(current) + neighbor.weight;

              if (distance < distances.get(neighbor.node)) {
                  distances.set(neighbor.node, distance);
                  previous.set(neighbor.node, current);
                  pq.enqueue(neighbor.node, distance);
              }
          }
      }
      return { path: [], distance: Infinity };
  }
}

// Priority Queue implementation for Dijkstra's Algorithm
class PriorityQueue {
  constructor() {
      this.values = [];
  }

  enqueue(val, priority) {
      this.values.push({ val, priority });
      this.sort();
  }

  dequeue() {
      return this.values.shift();
  }

  sort() {
      this.values.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
      return this.values.length === 0;
  }
}

// Example usage
const graph = new Graph();

// Add vertices
['A', 'B', 'C', 'D', 'E'].forEach(vertex => graph.addVertex(vertex));

// Add edges
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('D', 'E', 3);
graph.addEdge('C', 'E', 6);

// Test each algorithm
console.log("BFS starting from A:", graph.bfs('A'));
console.log("DFS starting from A:", graph.dfs('A'));
console.log("Shortest path from A to E:", graph.dijkstra('A', 'E'));