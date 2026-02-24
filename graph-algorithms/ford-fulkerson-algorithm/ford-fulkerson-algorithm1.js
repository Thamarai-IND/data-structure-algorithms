

const fordFulkerson = (graph, source, sink) => {
    const residualGraph = JSON.parse(JSON.stringify(graph));
    let maxFlow = 0;
    const bfs = () => {
        const visited = new Set();
        const queue = [source];
        const parent = {};
        visited.add(source);
        while (queue.length > 0) {
            const vertex = queue.shift();
            for (let neighbor in residualGraph[vertex]) {
                if (!visited.has(neighbor) && residualGraph[vertex][neighbor] > 0) {
                    visited.add(neighbor);
                    parent[neighbor] = vertex;
                    queue.push(neighbor);
                    if (neighbor === sink) {
                        return parent;
                    }
                }
            }
        }
        return null;
    }
    let parent;
    while ((parent = bfs()) !== null) {
        let pathFlow = Infinity;
        let s = sink;
        while (s !== source) {
            pathFlow = Math.min(pathFlow, residualGraph[parent[s]][s]);
            s = parent[s];
        }
        maxFlow += pathFlow;
        let v = sink;
        while (v !== source) {
            const u = parent[v];
            residualGraph[u][v] -= pathFlow;
            residualGraph[v][u] = (residualGraph[v][u] || 0) + pathFlow;
            v = parent[v];
        }
    }
    return maxFlow;
}

const graph = {
    A: { B: 10, C: 5 },
    B: { C: 15, D: 10 },
    C: { D: 10 },
    D: {}
}

console.log(fordFulkerson(graph, 'A', 'D')); // Output: 15

// Time Complexity: O(E * maxFlow) where E is the number of edges in the graph and maxFlow is the maximum flow from source to sink. This is because in the worst case, we may need to find an augmenting path for each unit of flow until we reach the maximum flow.

// Space Complexity: O(V + E) where V is the number of vertices and E is the number of edges in the graph, due to the residual graph and the parent mapping used in BFS.

// description: The Ford-Fulkerson algorithm is a method used to compute the maximum flow in a flow network. It works by repeatedly finding augmenting paths from the source to the sink and increasing the flow along those paths until no more augmenting paths can be found. The algorithm uses a breadth-first search (BFS) to find these paths in the residual graph, which represents the remaining capacities of the edges after accounting for the current flow. The maximum flow is updated by adding the path flow of each augmenting path found, and the residual graph is updated accordingly to reflect the new flow. The algorithm continues until no more augmenting paths are available, at which point the maximum flow is returned.
// advantages: The Ford-Fulkerson algorithm is a fundamental algorithm for solving the maximum flow problem and is relatively easy to understand and implement. It can be applied to a wide range of problems, including network flow, bipartite matching, and circulation problems.
// disadvantages: The time complexity of the Ford-Fulkerson algorithm can be very high in cases where the maximum flow is large, as it may require many iterations to find all augmenting paths. Additionally, if the graph contains edges with irrational capacities, the algorithm may not terminate, leading to an infinite loop.
// use cases: The Ford-Fulkerson algorithm is commonly used in applications such as network flow problems, where the goal is to find the maximum flow from a source to a sink in a directed graph. It is also used in bipartite matching problems, where the goal is to find the maximum matching between two sets of vertices. Additionally, it can be applied to circulation problems, where the goal is to find a flow that satisfies certain constraints on the flow through the edges.


/** 
 * * step 1: Initialize a residual graph based on the original graph, where the capacity of each edge is represented as the weight of the edge in the residual graph. Also, initialize a variable maxFlow to keep track of the maximum flow from the source to the sink.
 * step 2: Define a helper function bfs that performs a breadth-first search on the residual graph to find an augmenting path from the source to the sink. This function should return a parent mapping that can be used to reconstruct the path if one is found, or null if no path exists.
 * step 3: While there is an augmenting path from the source to the sink (i.e., while bfs returns a non-null parent mapping), do the following:
 * - Initialize a variable pathFlow to infinity, which will be used to determine the maximum flow that can be sent along the found path.
 * - Reconstruct the path from the sink to the source using the parent mapping, and update pathFlow to be the minimum capacity of the edges along this path.
 * - Add pathFlow to maxFlow, as this is the amount of flow that can be sent along the found path.
 * - Update the residual graph by subtracting pathFlow from the capacities of the edges along the path and adding pathFlow to the reverse edges (to allow for flow cancellation in future iterations).
 * step 4: Once no more augmenting paths can be found, return maxFlow as the maximum flow from the source to the sink in the original graph.
 * step 5: The time complexity of Dijkstra's algorithm is O(V^2) where V is the number of vertices in the graph. This can be improved to O((V + E) log V) using a priority queue. The space complexity is O(V) for the distances object and the visited set, which store information about the vertices in the graph.
 * step 6: Dijkstra's algorithm is a powerful tool for finding the shortest paths in a graph, but it is important to note
 * that it does not work correctly with graphs that contain negative edge weights. In such cases, algorithms like Bellman-Ford should
 * be used instead. Additionally, Dijkstra's algorithm is particularly effective for graphs with non-negative edge weights and is widely used in various applications such as network routing, GPS navigation, and social network analysis.
 * step 7: To optimize the performance of Dijkstra's algorithm, especially for larger graphs, a priority queue (min-heap) can be used to efficiently retrieve and update the vertex with the smallest known distance. This allows the algorithm to run in O((V + E) log V) time, making it more practical for real-world applications where performance is a concern.
 * step 8: In summary, Dijkstra's algorithm is an essential algorithm for finding the shortest paths in a graph with non-negative edge weights. It is widely used in various applications and can be optimized using a priority queue for better performance on larger graphs.
 */