
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


// description: Breadth-First Search (BFS) is a graph traversal algorithm that explores all the vertices of a graph level by level, starting from a given vertex. It uses a queue data structure to keep track of the vertices to be explored next. BFS is commonly used in various applications such as finding the shortest path in unweighted graphs, level order traversal of trees, and in algorithms like Dijkstra's and Prim's for finding the shortest paths and minimum spanning trees. The algorithm has a time complexity of O(V + E) where V is the number of vertices and E is the number of edges in the graph, and a space complexity of O(V) for the visited set and the queue in the worst case of a completely unbalanced graph.
// advantages: BFS guarantees the shortest path in unweighted graphs, is useful for level order traversal of trees, and can be easily implemented using a queue data structure.
// disadvantages: BFS can consume a lot of memory if the graph is very wide (i.e., has many vertices at the same level), and it may not be efficient for finding paths in weighted graphs where edge weights are not uniform.
// use cases: BFS is commonly used in applications such as finding the shortest path in unweighted graphs, level order traversal of trees, and in algorithms like Dijkstra's and Prim's for finding the shortest paths and minimum spanning trees. It is also used in scenarios where the solution is likely to be found close to the starting vertex, making it more efficient than depth-first search (DFS) in those cases.
/** * step 1: Initialize a visited set to keep track of the vertices that have been visited during the traversal, a result array to store the order of visited vertices, and a queue to
 * manage the vertices to be explored next. Start by adding the starting vertex to the queue and marking it as visited.
 * step 2: While the queue is not empty, remove the first vertex from the queue and add it to the result array. Then, iterate through each of its neighbors. For each neighbor, check if it has not been visited. If it has not been visited, mark it as visited and add it to the end of the queue.
 * step 3: Repeat this process until the queue is empty. The final output will be an array containing the order of visited vertices in a breadth-first manner.
 * step 4: The time complexity of BFS is O(V + E) where V is the number of vertices and E is the number of edges in the graph, as each vertex and edge is visited at most once. The space complexity is O(V) for the visited set and the queue in the worst case of a completely unbalanced graph, where all vertices are connected in a single level.
 * step 5: BFS is a powerful algorithm for exploring graphs and can be used in various applications such as finding the shortest path in unweighted graphs, level order traversal of trees, and in algorithms like Dijkstra's and Prim's for finding the shortest paths and minimum spanning trees. However, it is important to be cautious of memory usage in wide graphs and to consider using other algorithms for weighted graphs where edge weights are not uniform.
 * step 6: In summary, Breadth-First Search (BFS) is an essential graph traversal algorithm that explores all vertices level by level. It has a time complexity of O(V + E) and a space complexity of O(V) in the worst case. BFS is widely used in various applications and can be easily implemented using a queue data structure.
 * step 7: When implementing BFS, it is crucial to maintain the visited set to avoid revisiting vertices and to ensure that the algorithm terminates correctly. Additionally, the order of neighbors in the adjacency list can affect the order of traversal, so it is important to consider this when designing the graph structure for specific applications.
 * step 8: BFS can also be used in combination with other algorithms, such as Dijkstra's algorithm for finding the shortest paths in weighted graphs, by using a priority queue instead of a regular queue to manage the vertices based on their distances from the starting vertex. This allows BFS to be adapted for use in a wider range of applications beyond unweighted graphs.
 */