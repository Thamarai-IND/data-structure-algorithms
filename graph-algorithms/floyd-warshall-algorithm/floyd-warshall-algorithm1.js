
const floyWarshall = (graph) => {
    const vertices = Object.keys(graph);
    const distances = {};
    vertices.forEach(vertex => {
        distances[vertex] = {};
        vertices.forEach(neighbor => {
            if (vertex === neighbor) {
                distances[vertex][neighbor] = 0;
            } else if (graph[vertex].includes(neighbor)) {
                distances[vertex][neighbor] = 1; // Assuming unweighted graph, use 1 for edges
            } else {
                distances[vertex][neighbor] = Infinity;
            }
        });
    });

    vertices.forEach(k => {
        vertices.forEach(i => {
            vertices.forEach(j => {
                if (distances[i][j] > distances[i][k] + distances[k][j]) {
                    distances[i][j] = distances[i][k] + distances[k][j];
                }
            });
        });
    });

    return distances;
}

const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'E'],
    D: ['B', 'E'],
    E: ['B', 'C', 'D']
}

console.log(floyWarshall(graph));
// Output: 
// {
//   A: { A: 0, B: 1, C: 1, D: 2, E: 2 },
//   B: { A: 1, B: 0, C: 2, D: 1, E: 1 },
//   C: { A: 1, B: 2, C: 0, D: 2, E: 1 },
//   D: { A: 2, B: 1, C: 2, D: 0, E: 1 },
//   E: { A: 2, B: 1, C: 1, D: 1, E: 0 }
// }

/**
 * 
 * step 1: Initialize the distance matrix with direct edge weights. If there is no direct edge, set the distance to infinity. The distance from any vertex to itself is set to 0.
 * step 2: Iterate through each vertex k as an intermediate point. For each pair of vertices (i, j), check if the path from i to j through k is shorter than the current known distance from i to j. If it is, update the distance from i to j. This process is repeated for all pairs of vertices and for each intermediate vertex k, ensuring that all possible paths are considered.
 * step 3: After all iterations, the distance matrix will contain the shortest path lengths between all pairs of vertices in the graph. The algorithm effectively computes the shortest paths by considering each vertex as a potential intermediate point, allowing it to find the optimal paths even in cases where direct edges do not exist between certain vertices.
 * step 4: The final output is a distance matrix that provides the shortest path lengths between every pair of vertices in the graph, which can be used for various applications such as network routing, social network analysis, and transportation planning.
 * step 5: The algorithm can be optimized for sparse graphs by only updating distances for pairs of vertices that are connected by an edge, reducing the time complexity to O(V^2 * E) in the worst case. Additionally, if only specific pairs of vertices need to be evaluated, algorithms like Dijkstra's or Bellman-Ford may be more efficient than Floyd-Warshall.
 * step 6: The Floyd-Warshall algorithm is particularly useful for dense graphs where the number of edges is close to V^2, as it provides a comprehensive solution for finding the shortest paths between all pairs of vertices. However, for larger graphs, the O(V^3) time complexity can be a significant drawback, making it less suitable compared to other algorithms that are optimized for sparse graphs.
 * step 7: In summary, the Floyd-Warshall algorithm is a powerful tool for computing shortest paths in a graph, but its efficiency depends on the structure of the graph and the specific requirements of the problem at hand. It is essential to consider the trade-offs between time complexity and the need for comprehensive path information when choosing this algorithm for a given application.
 * 
 */
// Time Complexity: O(V^3) where V is the number of vertices in the graph.
// Space Complexity: O(V^2) for the distances matrix.

// description: The Floyd-Warshall algorithm is a dynamic programming algorithm used to find the shortest paths in a weighted graph with positive or negative edge weights (but with no negative cycles). It works by iteratively updating a distance matrix that represents the shortest path between every pair of vertices. The algorithm considers each vertex as an intermediate point and updates the distances accordingly.
// example: Given a graph with vertices A, B, C, D, and E, the Floyd-Warshall algorithm will compute the shortest path between all pairs of vertices. For instance, the shortest path from A to D is 2 (A -> B -> D), and the shortest path from C to E is 1 (C -> E).
// advantages: The Floyd-Warshall algorithm is simple to implement and can handle both directed and undirected graphs. It is particularly useful for dense graphs where the number of edges is close to V^2.
// disadvantages: The time complexity of O(V^3) can be prohibitive for large graphs, making it less efficient than other algorithms like Dijkstra's or Bellman-Ford for sparse graphs.
// use cases: The Floyd-Warshall algorithm is commonly used in applications that require finding the shortest paths between all pairs of vertices, such as in network routing, social network analysis, and transportation planning.
// optimization: For sparse graphs, the Floyd-Warshall algorithm can be optimized by using an adjacency list representation and only updating distances for pairs of vertices that are connected by an edge. This can reduce the time complexity to O(V^2 * E) in the worst case, which is more efficient for sparse graphs. Additionally, if only the shortest path between specific pairs of vertices is needed, algorithms like Dijkstra's or Bellman-Ford may be more appropriate.
