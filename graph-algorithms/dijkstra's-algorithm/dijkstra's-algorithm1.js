

const dijkstra = (graph, start) => {
    const distances = {};
    const visited = new Set();
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;
    while (visited.size < Object.keys(graph).length) {
        let closestVertex = null;
        for (let vertex in distances) {
            if (!visited.has(vertex) && (closestVertex === null || distances[vertex] < distances[closestVertex])) {
                closestVertex = vertex;
            }
        }
        visited.add(closestVertex);
        graph[closestVertex].forEach(neighbor => {
            const alt = distances[closestVertex] + neighbor.weight;
            if (alt < distances[neighbor.vertex]) {
                distances[neighbor.vertex] = alt;
            }
        });
    }
    return distances;
}


const graph = {
    A: [{ vertex: 'B', weight: 1 }, { vertex: 'C', weight: 4 }],
    B: [{ vertex: 'A', weight: 1 }, { vertex: 'D', weight: 2 }, { vertex: 'E', weight: 5 }],
    C: [{ vertex: 'A', weight: 4 }, { vertex: 'E', weight: 1 }],
    D: [{ vertex: 'B', weight: 2 }, { vertex: 'E', weight: 3 }],
    E: [{ vertex: 'B', weight: 5 }, { vertex: 'C', weight: 1 }, { vertex: 'D', weight: 3 }]
}

console.log(dijkstra(graph, 'A')); // { A: 0, B: 1, C: 4, D: 3, E: 5 }

// Time Complexity: O(V^2) where V is the number of vertices in the graph. This can be improved to O((V + E) log V) using a priority queue.
// Space Complexity: O(V) for the distances object and the visited set.