

const edmondsKarp = (graph, source, sink) => {
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

console.log(edmondsKarp(graph, 'A', 'D')); // Output: 15

// Time Complexity: O(V * E^2) where V is the number of vertices and E is the number of edges in the graph. This is because in the worst case, we may need to find an augmenting path for each unit of flow until we reach the maximum flow, and each BFS takes O(E) time.
// Space Complexity: O(V + E) where V is the number of vertices and E is the number of edges in the graph, due to the residual graph and the parent mapping used in BFS.

/** * description: Edmonds-Karp algorithm is an implementation of the Ford-Fulkerson method for computing the maximum flow in a flow network. It uses breadth-first search (BFS) to find augmenting paths in the residual graph, which allows it to find the shortest augmenting path in terms of the number of edges. The algorithm continues to find augmenting paths and update the flow until no more augmenting paths can be found, at which point it returns the maximum flow from the source to the sink.
 * advantages: The Edmonds-Karp algorithm is a straightforward implementation of the Ford-Fulkerson method and is easy to understand. It guarantees that the maximum flow is found in O(V * E^2) time, which is efficient for small to medium-sized graphs.
 * disadvantages: The Edmonds-Karp algorithm can be inefficient for large graphs with many edges, as it may require multiple BFS traversals to find augmenting paths. In such cases, more advanced algorithms like Dinic's algorithm or the Push-Relabel algorithm may be more efficient.
 * use cases: The Edmonds-Karp algorithm is commonly used in applications such as network flow problems, bipartite matching, and circulation problems. It is particularly useful for educational purposes to illustrate the concept of maximum flow and the Ford-Fulkerson method.
 * step 1: Initialize a residual graph as a copy of the original graph, and set the maximum flow to 0. The residual graph will be used to keep track of the remaining capacities of the edges after accounting for the current flow.
 * step 2: Define a helper function bfs that performs a breadth-first search on the residual graph to find an augmenting path from the source to the sink. This function will return a parent mapping that can be used to reconstruct the path if one is found.
 * step 3: In the main loop of the algorithm, call the bfs function to find an augmenting path. If no path is found, break out of the loop as we have reached the maximum flow.
 * step 4: If an augmenting path is found, determine the path flow by finding the minimum residual capacity along the path. This represents the maximum amount of flow that can be sent along this path.
 * step 5: Update the maximum flow by adding the path flow, and update the residual graph by subtracting the path flow from the forward edges and adding it to the reverse edges along the path.
 * step 6: Repeat this process until no more augmenting paths can be found. The final output will be the maximum flow from the source to the sink in the original graph.
 * step 7: The time complexity of the Edmonds-Karp algorithm is O(V * E^2) where V is the number of vertices and E is the number of edges in the graph. This is because in the worst case, we may need to find an augmenting path for each unit of flow until we reach the maximum flow, and each BFS takes O(E) time. The space complexity is O(V + E) due to the residual graph and the parent mapping used in BFS.
 * step 8: In summary, the Edmonds-Karp algorithm is a fundamental algorithm for computing maximum flow in a flow network. It uses breadth-first search to find augmenting paths and updates the flow until no more paths can be found. While it may not be the most efficient algorithm for large graphs, it serves as an important educational tool for understanding the concept of maximum flow and the Ford-Fulkerson method.
 */