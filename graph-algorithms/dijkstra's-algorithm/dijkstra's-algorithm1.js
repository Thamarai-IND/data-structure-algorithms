

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

// Note: The above implementation of Dijkstra's algorithm is not the most efficient one, as it uses a simple loop to find the closest vertex. A more efficient implementation would use a priority queue (min-heap) to keep track of the vertices with the smallest distances, which would reduce the time complexity to O((V + E) log V).
// description: Dijkstra's algorithm is a popular algorithm used to find the shortest paths between nodes in a graph, which may represent, for example, road networks. The algorithm works by maintaining a set of vertices whose shortest distance from the source is known and repeatedly selecting the vertex with the smallest known distance, updating the distances of its neighbors accordingly until all vertices have been visited.
// The algorithm is efficient for graphs with non-negative edge weights and is widely used in various applications such as network routing, GPS navigation, and social network analysis. However, it is not suitable for graphs with negative edge weights, as it may produce incorrect results. In such cases, algorithms like Bellman-Ford should be used instead.
// Dijkstra's algorithm can be implemented using a priority queue to optimize the selection of the vertex with the smallest known distance, which significantly improves the performance of the algorithm, especially for larger graphs. The use of a priority queue allows for efficient retrieval and updating of vertices based on their distances, making it a more practical choice for real-world applications where performance is a concern.

/** * step 1: Initialize a distances object to store the shortest distance from the starting vertex to each vertex in the graph, setting all distances to infinity except for the starting vertex, which is set to 0. Also, initialize a visited set to keep track of the vertices that have been visited during the algorithm.
 * step 2: While there are still unvisited vertices, select the unvisited vertex with the smallest distance (the closest vertex) and mark it as visited. For each of its neighbors, calculate the alternative distance from the starting vertex to that neighbor through the closest vertex. If this alternative distance is smaller than the currently known distance for that neighbor, update the distance in the distances object.
 * step 3: Repeat this process until all vertices have been visited. The final output will be an object containing the shortest distances from the starting vertex to all other vertices in the graph.
 * step 4: The time complexity of Dijkstra's algorithm is O(V^2) where V is the number of vertices in the graph. This can be improved to O((V + E) log V) using a priority queue. The space complexity is O(V) for the distances object and the visited set, which store information about the vertices in the graph.
 * step 5: Dijkstra's algorithm is a powerful tool for finding the shortest paths in a graph, but it is important to note that it does not work correctly with graphs that contain negative edge weights. In such cases, algorithms like Bellman-Ford should
 * be used instead. Additionally, Dijkstra's algorithm is particularly effective for graphs with non-negative edge weights and is widely used in various applications such as network routing, GPS navigation, and social network analysis.
 * step 6: To optimize the performance of Dijkstra's algorithm, especially for larger graphs, a priority queue (min-heap) can be used to efficiently retrieve and update the vertex with the smallest known distance. This allows the algorithm to run in O((V + E) log V) time, making it more practical for real-world applications where performance is a concern.
 * step 7: In summary, Dijkstra's algorithm is an essential algorithm for finding the shortest paths in a graph with non-negative edge weights. It is widely used in various applications and can be optimized using a priority queue for better performance on larger graphs.
 */