
const breadthFirstSearch = (graph, start) => {
    const visited = new Set();
    const result = [];
    const queue = [start];
    visited.add(start);
    while (queue.length > 0) {
        const vertex = queue.shift();
        result.push(vertex);
        graph[vertex].forEach(neighbor => {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        });
    }
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

console.log(breadthFirstSearch(graph, 'A')); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]

// Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges in the graph.
// Space Complexity: O(V) for the visited set and the queue in the worst case of a completely unbalanced graph.
