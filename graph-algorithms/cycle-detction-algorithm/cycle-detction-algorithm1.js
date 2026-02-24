

const cycleDetection = (graph) => {
    const visited = new Set();
    const recStack = new Set();
    const dfs = (vertex) => {
        if (!visited.has(vertex)) {
            visited.add(vertex);
            recStack.add(vertex);
            for (let neighbor of graph[vertex]) {
                if (!visited.has(neighbor) && dfs(neighbor)) {
                    return true;
                } else if (recStack.has(neighbor)) {
                    return true;
                }
            }
        }
        recStack.delete(vertex);
        return false;
    }
    for (let vertex in graph) {
        if (dfs(vertex)) {
            return true;
        }
    }
    return false;
}

const graph = {
    A: ['B'],
    B: ['C'],
    C: ['A']
}

console.log(cycleDetection(graph)); // Output: true

// Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges in the graph, as each vertex and edge is visited at most once.
// Space Complexity: O(V) for the visited set and the recursion stack, which can grow up to the number of vertices in the worst case of a completely unbalanced graph.

// description: The cycle detection algorithm uses depth-first search (DFS) to determine if there is a cycle in a directed graph. It maintains two sets: one for visited vertices and another for the recursion stack. When visiting a vertex, it is added to both sets. If a neighbor is encountered that has not been visited, the algorithm recursively visits that neighbor. If a neighbor is encountered that is already in the recursion stack, it indicates the presence of a cycle. After exploring all neighbors, the vertex is removed from the recursion stack. The algorithm continues until all vertices have been processed, and it returns true if a cycle is detected and false otherwise.
// advantages: This algorithm efficiently detects cycles in directed graphs with a time complexity of O(V + E). It is straightforward to implement using recursion and is effective for both small and large graphs.
// disadvantages: The algorithm may not be suitable for undirected graphs, as it can produce false positives due to the nature of undirected edges. Additionally, it may not be the best choice for very large graphs with deep recursion, as it can lead to stack overflow issues. In such cases, an iterative approach or a different algorithm may be more appropriate.
// use cases: Cycle detection is crucial in various applications such as detecting deadlocks in operating systems, validating dependencies in software projects, and analyzing social networks. It is also used in algorithms like topological sorting, where the presence of a cycle indicates that a valid ordering of vertices is not possible.


/** 
 * * step 1: Initialize a visited set to keep track of the vertices that have been visited during the traversal, and a recursion stack to keep track of the vertices currently in the recursion path.
 * step 2: Define a recursive helper function dfs that takes a vertex as an argument. This function will perform a depth-first search and check for cycles.
 * step 3: In the dfs function, check if the vertex has not been visited. If it has not been visited, add it to both the visited set and the recursion stack. Then, iterate through each of its neighbors. For each neighbor, check if it has not been visited. If it has not been visited, recursively call the dfs function with that neighbor as the argument. If a neighbor is encountered that is already in the recursion stack, it indicates the presence of a cycle, and the function should return true.
 * step 4: After exploring all neighbors, remove the vertex from the recursion stack and return false to indicate that no cycle was detected along this path.
 * step 5: Iterate through each vertex in the graph and call the dfs function on any vertex that has not been visited. If any call to
 * dfs returns true, it means a cycle has been detected, and the main function should return true. If the loop completes without finding any cycles, return false to indicate that the graph does not contain any cycles.
 * step 6: The time complexity of this algorithm is O(V + E) where V is the number of vertices and E is the number of edges in the graph, as each vertex and edge is visited at most once. The space complexity is O(V) for the visited set and the recursion stack, which can grow up to the number of vertices in the worst case of a completely unbalanced graph.
 * step 7: In summary, this cycle detection algorithm efficiently determines if there is a cycle in a directed graph using depth-first search. It maintains a visited set and a recursion stack to track the traversal path and identify cycles. The algorithm runs in linear time and is widely used in various applications where cycle detection is important, such as in dependency analysis and deadlock detection.
 */

// Cycle Detection Algorithm using Depth-First Search (DFS) in a Unweighted Directed Graph

const cycleDetectionUnweightedDirected = (graph) => {
    const visited = new Set();
    const recStack = new Set();
    const dfs = (vertex) => {
        if (!visited.has(vertex)) {
            visited.add(vertex);
            recStack.add(vertex);
            for (let neighbor of graph[vertex]) {
                if (!visited.has(neighbor) && dfs(neighbor)) {
                    return true;
                } else if (recStack.has(neighbor)) {
                    return true;
                }
            }
        }
        recStack.delete(vertex);
        return false;
    }
    for (let vertex in graph) {
        if (dfs(vertex)) {
            return true;
        }
    }
    return false;
}

// Example usage:
const graph2 = {
    A: ['B'],
    B: ['C'],
    C: ['A']
}

console.log(cycleDetectionUnweightedDirected(graph2)); // Output: true

// Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges in the graph, as each vertex and edge is visited at most once.
// Space Complexity: O(V) for the visited set and the recursion stack, which can grow up to the number of vertices in the worst case of a completely unbalanced graph.

/** * step 1: Initialize a visited set to keep track of the vertices that have been visited during the traversal, and a recursion stack to keep track of the vertices currently in the recursion path.
 * step 2: Define a recursive helper function dfs that takes a vertex as an argument. This function will perform a depth-first search and check for cycles.
 * step 3: In the dfs function, check if the vertex has not been visited. If it has not been visited, add it to both the visited set and the recursion stack. Then, iterate through each of its neighbors. For each neighbor, check if it has not been visited. If it has not been visited, recursively call the dfs function with that neighbor as the argument. If a neighbor is encountered that is already in the recursion stack, it indicates the presence of a cycle, and the function should return true.
 * step 4: After exploring all neighbors, remove the vertex from the recursion stack and return false to indicate that no cycle was detected along this path.
 * step 5: Iterate through each vertex in the graph and call the dfs function on any vertex that has not been visited. If any call to
 * dfs returns true, it means a cycle has been detected, and the main function should return true. If the loop completes without finding any cycles, return false to indicate that the graph does not contain any cycles.
 * step 6: The time complexity of this algorithm is O(V + E) where V is the number of vertices and E is the number of edges in the graph, as each vertex and edge is visited at most once. The space complexity is O(V) for the visited set and the recursion stack, which can grow up to the number of vertices in the worst case of a completely unbalanced graph.
 * step 7: In summary, this cycle detection algorithm efficiently determines if there is a cycle in a directed graph using depth-first search. It maintains a visited set and a recursion stack to track the traversal path and identify cycles. The algorithm runs in linear time and is widely used in various applications where cycle detection is important, such as in dependency analysis and deadlock detection.
 */
