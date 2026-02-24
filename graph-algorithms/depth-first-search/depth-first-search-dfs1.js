

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

// description: Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It uses a recursive approach to visit all the vertices of a graph, starting from a given vertex and exploring as deep as possible before moving to the next vertex. DFS can be implemented using a stack data structure or recursively, and it is commonly used in various applications such as pathfinding, topological sorting, and cycle detection in graphs. The algorithm has a time complexity of O(V + E) where V is the number of vertices and E is the number of edges in the graph, and a space complexity of O(V) for the visited set and the call stack in the worst case of a completely unbalanced graph.
// advantages: DFS is memory efficient for sparse graphs, can be easily implemented using recursion, and is useful for solving problems that require exploring all possible paths, such as maze solving and backtracking algorithms.
// disadvantages: DFS can get stuck in infinite loops if the graph contains cycles and does not have a mechanism to track visited vertices. It may also not find the shortest path in unweighted graphs, as it explores one path fully before moving to another.
// use cases: DFS is commonly used in applications such as pathfinding, topological sorting, cycle detection, and solving puzzles that require exploring all possible configurations, such as Sudoku or N-Queens problems. It is also used in scenarios where the solution is likely to be found deep in the search tree, making it more efficient than breadth-first search (BFS) in those cases.
/** * step 1: Initialize a visited set to keep track of the vertices that have been visited during the traversal, and a result array to store the order of visited vertices. Define a recursive helper function dfs that takes a vertex as an argument.
 * step 2: In the dfs function, check if the vertex is null or undefined. If it is, return null to terminate the recursion. Otherwise, add the vertex to the visited set and push it to the result array.
 * step 3: Iterate through each neighbor of the current vertex. For each neighbor, check if it has not been visited. If it has not been visited, recursively call the dfs function with that neighbor as the argument.
 * step 4: Start the DFS traversal by calling the dfs function with the starting vertex. After the traversal is complete, return the result array containing the order of visited vertices.
 * step 5: The time complexity of DFS is O(V + E) where V is the number of vertices and E is the number of edges in the graph, as each vertex and edge is visited at most once. The space complexity is O(V) for the visited set and the call stack in the worst case of a completely unbalanced graph,
 * where all vertices are connected in a single path. In the best case of a balanced graph, the space complexity can be O(log V) due to the depth of the recursion.
 * step 6: DFS is a powerful algorithm for exploring graphs and can be used in various applications such as pathfinding, topological sorting, and cycle detection. However, it is important to be cautious of infinite loops in graphs with cycles and to ensure that the visited set is properly maintained to avoid revisiting vertices.
 * step 7: In summary, Depth-First Search (DFS) is an essential graph traversal algorithm that explores as deep as possible along each branch before backtracking. It has a time complexity of O(V + E) and a space complexity of O(V) in the worst case. DFS is widely used in various applications and can be implemented using recursion or a stack data structure.
 */