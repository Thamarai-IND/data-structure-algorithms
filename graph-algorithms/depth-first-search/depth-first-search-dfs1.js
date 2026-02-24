

const depthFirstSearch = (graph, start) => {
  const visited = new Set();
  const result = [];
    const dfs = (vertex) => {
        if (!vertex) return null;
        visited.add(vertex);
        result.push(vertex);
        graph[vertex].forEach(neighbor => {
            if (!visited.has(neighbor)) {
                return dfs(neighbor);
            }
        });
    }
    dfs(start);
    return result;
}

const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
}

console.log(depthFirstSearch(graph, 'A')); // [ 'A', 'B', 'D', 'E', 'F', 'C' ]

// Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges in the graph.
// Space Complexity: O(V) for the visited set and the call stack in the worst case of a completely unbalanced graph.
