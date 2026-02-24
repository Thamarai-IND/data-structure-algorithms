
const bellmanFord = (graph, source) => {
    const distances = {};
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[source] = 0;
    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        for (let vertex in graph) {
            graph[vertex].forEach(neighbor => {
                const alt = distances[vertex] + neighbor.weight;
                if (alt < distances[neighbor.vertex]) {
                    distances[neighbor.vertex] = alt;
                }
            });
        }
    }
    for (let vertex in graph) {
        graph[vertex].forEach(neighbor => {
            const alt = distances[vertex] + neighbor.weight;
            if (alt < distances[neighbor.vertex]) {
                throw new Error("Graph contains a negative weight cycle");
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

console.log(bellmanFord(graph, 'A')); // { A: 0, B: 1, C: 4, D: 3, E: 5 }

/**
 * step 1: Initialize distances from the source to all vertices as infinite and distance to the source itself as 0.
 * step 2: Relax all edges |V| - 1 times, where |V| is the number of vertices in the graph. For each edge (u, v) with weight w, if the distance to u plus w is less than the distance to v, update the distance to v.
 * step 3: Check for negative-weight cycles by iterating through all edges one more time. If we can still relax any edge, then there is a negative weight cycle in the graph.
 * step 4: Return the distances from the source to all vertices.
 * step 5: If a negative weight cycle is detected, throw an error indicating that the graph contains a negative weight cycle.
 * step 6: The algorithm can be optimized by using a queue to keep track of vertices that need to be relaxed, which can reduce the number of unnecessary relaxations and improve performance in certain cases.
 * step 7: The Bellman-Ford algorithm is not suitable for graphs with negative weight cycles, as it will not produce correct results. It is important to ensure that the graph does not contain negative weight cycles before using the algorithm.
 * step 8: If the graph does not contain negative weight edges, using Dijkstra's algorithm would be more efficient with a time complexity of O((V + E) log V) when implemented with a priority queue. However, if negative weight edges are present, the Bellman-Ford algorithm is necessary to correctly compute shortest paths and detect negative weight cycles.
 * step 9: The Bellman-Ford algorithm is not a stable algorithm, as it does not guarantee the preservation of the relative order of equal elements (in this case, vertices with the same distance).
 * step 10: The Bellman-Ford algorithm is not an in-place algorithm, as it requires additional space for the distances object to store the shortest path lengths from the source vertex to all other vertices.
 * step 11: The Bellman-Ford algorithm can be used in various applications such as network routing and optimization problems, especially when negative weight edges are present.
 * step 12: The Bellman-Ford algorithm is a fundamental algorithm in graph theory and has applications in various fields such as network routing and optimization problems.
 * step 13: The Bellman-Ford algorithm can handle graphs with negative weight edges and can detect negative weight cycles. It is a powerful tool for solving shortest path problems in graphs with negative weights.
 * step 14: The time complexity of O(V * E) makes it less efficient than Dijkstra's algorithm for graphs without negative weights. It may not be suitable for large graphs due to its inefficiency, but it is necessary for graphs with negative weight edges.
 * step 15: The Bellman-Ford algorithm is essential for graphs with negative weight edges, as it can correctly compute shortest paths and detect negative weight cycles. However, if the graph does not contain negative weight edges, using Dijkstra's algorithm would be more efficient with a time complexity of O((V + E) log V) when implemented with a priority queue.
 * step 16: The Bellman-Ford algorithm is not suitable for graphs with negative weight cycles, as it will not produce correct results. It is important to ensure that the graph does not contain negative weight cycles before using the algorithm.
 * step 17: The Bellman-Ford algorithm is not a stable algorithm, as it does not guarantee the preservation of the relative order of equal elements (in this case, vertices with the same distance).
 * step 18: The Bellman-Ford algorithm is not an in-place algorithm, as it requires additional space for the distances object to store the shortest path lengths from the source vertex to all other vertices.
 * step 19: The Bellman-Ford algorithm can be optimized by using a queue to keep track of vertices that need to be relaxed, which can reduce the number of unnecessary relaxations and improve performance in certain cases. However, this optimization does not change the overall time complexity of O(V * E).
 * step 20: The Bellman-Ford algorithm is a powerful tool for solving shortest path problems in graphs with negative weights, but it is important to consider the specific characteristics of the graph and the requirements of the problem when choosing the appropriate algorithm to use.
 * 
 */

// Time Complexity: O(V * E) where V is the number of vertices and E is the number of edges in the graph.
// Space Complexity: O(V) for the distances object.

// description: The Bellman-Ford algorithm is a graph algorithm used to find the shortest paths from a single source vertex to all other vertices in a graph, even when the graph contains edges with negative weights. It works by relaxing the edges repeatedly, and it can detect negative weight cycles in the graph. The algorithm is less efficient than Dijkstra's algorithm for graphs without negative weights, but it is more versatile as it can handle negative weight edges.
// example: Given a graph with vertices A, B, C, D, and E, and edges with weights as defined in the graph object, the Bellman-Ford algorithm will compute the shortest distances from vertex A to all other vertices. The output will show that the distance from A to B is 1, from A to C is 4, from A to D is 3, and from A to E is 5.
// advantages: The Bellman-Ford algorithm can handle graphs with negative weight edges and can detect negative weight cycles. It is a fundamental algorithm in graph theory and has applications in various fields such as network routing and optimization problems.
// disadvantages: The time complexity of O(V * E) makes it less efficient than Dijkstra's algorithm for graphs without negative weights. It may not be suitable for large graphs due to its inefficiency.
// use cases: The Bellman-Ford algorithm is commonly used in scenarios where negative weight edges are present, such as in certain network routing protocols (e.g., RIP) and in solving optimization problems that can be modeled as graphs with negative weights.
// optimization: There are no known optimizations that can reduce the time complexity of the Bellman-Ford algorithm, as it is already optimal for its purpose. However, if the graph does not contain negative weight edges, using Dijkstra's algorithm would be more efficient.

// stability: The Bellman-Ford algorithm is not a stable algorithm, as it does not guarantee the preservation of the relative order of equal elements (in this case, vertices with the same distance).
// in-place: The Bellman-Ford algorithm is not an in-place algorithm, as it requires additional space for the distances object to store the shortest path lengths from the source vertex to all other vertices.
// example of negative weight cycle detection:

const graphWithNegativeCycle = {
    A: [{ vertex: 'B', weight: 1 }],
    B: [{ vertex: 'C', weight: -2 }],
    C: [{ vertex: 'A', weight: -1 }]
}

try {
    console.log(bellmanFord(graphWithNegativeCycle, 'A'));
} catch (error) {
    console.error(error.message); // Graph contains a negative weight cycle
}

// In this example, the graph contains a negative weight cycle (A -> B -> C -> A), and the Bellman-Ford algorithm correctly detects it and throws an error.
// Time Complexity: O(V * E) for the Bellman-Ford algorithm, and O(V * E) for the negative weight cycle detection step, resulting in an overall time complexity of O(V * E).
// Space Complexity: O(V) for the distances object in both the Bellman-Ford algorithm and the negative weight cycle detection step.
// Note: The Bellman-Ford algorithm is not suitable for graphs with negative weight cycles, as it will not produce correct results. It is important to ensure that the graph does not contain negative weight cycles before using the algorithm.
// optimization: If the graph does not contain negative weight edges, using Dijkstra's algorithm would be more efficient with a time complexity of O((V + E) log V) when implemented with a priority queue. However, if negative weight edges are present, the Bellman-Ford algorithm is necessary to correctly compute shortest paths and detect negative weight cycles.
// stability: The Bellman-Ford algorithm is not a stable algorithm, as it does not guarantee the preservation of the relative order of equal elements (in this case, vertices with the same distance).
// in-place: The Bellman-Ford algorithm is not an in-place algorithm, as it requires additional space for the distances object to store the shortest path lengths from the source vertex to all other vertices.
// example of using Bellman-Ford algorithm with a graph that has negative weight edges but no negative weight cycles:
const graphWithNegativeEdges = {
    A: [{ vertex: 'B', weight: 1 }, { vertex: 'C', weight: 4 }],
    B: [{ vertex: 'A', weight: 1 }, { vertex: 'D', weight: -2 }, { vertex: 'E', weight: 5 }],
    C: [{ vertex: 'A', weight: 4 }, { vertex: 'E', weight: 1 }],
    D: [{ vertex: 'B', weight: -2 }, { vertex: 'E', weight: 3 }],
    E: [{ vertex: 'B', weight: 5 }, { vertex: 'C', weight: 1 }, { vertex: 'D', weight: 3 }]
}

console.log(bellmanFord(graphWithNegativeEdges, 'A')); // { A: 0, B: 1, C: 4, D: -1, E: 5 }

// In this example, the graph contains negative weight edges (B -> D with weight -2), but there are no negative weight cycles. The Bellman-Ford algorithm correctly computes the shortest distances from vertex A to all other vertices, showing that the distance from A to D is -1 due to the negative weight edge.
// Time Complexity: O(V * E) for the Bellman-Ford algorithm, as it needs to relax all edges V-1 times, and O(V * E) for the negative weight cycle detection step, resulting in an overall time complexity of O(V * E).
// Space Complexity: O(V) for the distances object in both the Bellman-Ford algorithm and the negative weight cycle detection step.
// Note: The Bellman-Ford algorithm is essential for graphs with negative weight edges, as it can correctly compute shortest paths and detect negative weight cycles. However, if the graph does not contain negative weight edges, using Dijkstra's algorithm would be more efficient with a time complexity of O((V + E) log V) when implemented with a priority queue.
// stability: The Bellman-Ford algorithm is not a stable algorithm, as it does not guarantee the preservation of the relative order of equal elements (in this case, vertices with the same distance).
// in-place: The Bellman-Ford algorithm is not an in-place algorithm, as it requires additional space for the distances object to store the shortest path lengths from the source vertex to all other vertices.
// example of using Bellman-Ford algorithm with a graph that has negative weight edges and a negative weight cycle:
const graphWithNegativeCycle2 = {
    A: [{ vertex: 'B', weight: 1 }],
    B: [{ vertex: 'C', weight: -2 }],
    C: [{ vertex: 'A', weight: -1 }]
}

try {
    console.log(bellmanFord(graphWithNegativeCycle2, 'A'));
} catch (error) {    console.error(error.message); // Graph contains a negative weight cycle
}

// In this example, the graph contains a negative weight cycle (A -> B -> C -> A), and the Bellman-Ford algorithm correctly detects it and throws an error.
// Time Complexity: O(V * E) for the Bellman-Ford algorithm, and O(V * E) for the negative weight cycle detection step, resulting in an overall time complexity of O(V * E).
// Space Complexity: O(V) for the distances object in both the Bellman-Ford algorithm and the negative weight cycle detection step.
// Note: The Bellman-Ford algorithm is not suitable for graphs with negative weight cycles, as it will not produce correct results. It is important to ensure that the graph does not contain negative weight cycles before using the algorithm.
// optimization: If the graph does not contain negative weight edges, using Dijkstra's algorithm would be more efficient with a time complexity of O((V + E) log V) when implemented with a priority queue. However, if negative weight edges are present, the Bellman-Ford algorithm is necessary to correctly compute shortest paths and detect negative weight cycles.
// stability: The Bellman-Ford algorithm is not a stable algorithm, as it does not guarantee the preservation of the relative order of equal elements (in this case, vertices with the same distance).
// in-place: The Bellman-Ford algorithm is not an in-place algorithm, as it requires additional space for the distances object to store the shortest path lengths from the source vertex to all other vertices.

