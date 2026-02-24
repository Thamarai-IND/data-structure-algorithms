
const tarjanSCC = (graph) => {
    const index = {};
    const lowlink = {};
    const stack = [];
    const onStack = {};
    const sccs = [];
    let currentIndex = 0;
    const strongconnect = (vertex) => {
        index[vertex] = currentIndex;
        lowlink[vertex] = currentIndex;
        currentIndex++;
        stack.push(vertex);
        onStack[vertex] = true;
        graph[vertex].forEach(neighbor => {
            if (index[neighbor] === undefined) {
                strongconnect(neighbor);
                lowlink[vertex] = Math.min(lowlink[vertex], lowlink[neighbor]);
            } else if (onStack[neighbor]) {
                lowlink[vertex] = Math.min(lowlink[vertex], index[neighbor]);
            }
        });
        if (lowlink[vertex] === index[vertex]) {
            const scc = [];
            let w;
            do {
                w = stack.pop();
                onStack[w] = false;
                scc.push(w);
            } while (w !== vertex);
            sccs.push(scc);
        }
    }
    for (let vertex in graph) {
        if (index[vertex] === undefined) {
            strongconnect(vertex);
        }
    }
    return sccs;
}

const graph = {
    A: ['B'],
    B: ['C', 'E', 'F'],
    C: ['D', 'G'],
    D: ['C', 'H'],
    E: ['A', 'F'],
    F: ['G'],
    G: ['F'],
    H: ['D', 'G']
}

console.log(tarjanSCC(graph)); // [ [ 'G', 'F' ], [ 'C', 'D', 'H' ], [ 'B', 'E', 'A' ] ]

// Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges in the graph, as each vertex and edge is visited at most once.
// Space Complexity: O(V) for the index, lowlink, stack, and onStack objects, which store information about the vertices in the graph.

// description: Tarjan's algorithm is a depth-first search based algorithm used to find strongly connected components (SCCs) in a directed graph. An SCC is a subgraph where there is a path from any vertex to every other vertex. The algorithm assigns an index to each vertex and uses a stack to keep track of the vertices in the current search path. It also maintains lowlink values to identify when a strongly connected component has been fully explored. When the lowlink value of a vertex is equal to its index, it indicates that a strongly connected component has been found, and all vertices on the stack up to that point belong to the same SCC. Tarjan's algorithm efficiently finds all SCCs in O(V + E) time, making it suitable for large graphs.
// advantages: Tarjan's algorithm is efficient for finding strongly connected components in directed graphs, with a time complexity of O(V + E). It uses a single depth-first search traversal, making it memory efficient and easy to implement.
// disadvantages: Tarjan's algorithm is specifically designed for directed graphs and may not be applicable to undirected graphs. Additionally, it may not be the best choice for finding strongly connected components in very large graphs with a high number of edges, as the depth-first search can lead to deep recursion and potential stack overflow issues.
// use cases: Tarjan's algorithm is commonly used in applications such as analyzing social networks, optimizing compilers, and solving problems related to strongly connected components in directed graphs. It is particularly useful in scenarios where it is important to identify groups of vertices that are mutually reachable, such as in web crawling or analyzing dependencies in software systems.
/** * step 1: Initialize index and lowlink objects to store the index and lowlink values for each vertex, a stack to keep track of the vertices in the current search path, an onStack object to track which vertices are currently on the stack, and an array sccs to store the strongly connected components found during the algorithm.
 * step 2: Define a recursive helper function strongconnect that takes a vertex as an argument. This function will perform a depth-first search and update the index and lowlink values for each vertex.
 * step 3: In the strongconnect function, assign the current index to the vertex and set its lowlink value to the same index. Then, increment the current index and push the vertex onto the stack, marking it as on the stack.
 * step 4: Iterate through each neighbor of the current vertex. If a neighbor has not been indexed, recursively call strongconnect on that neighbor and update the lowlink value of the current vertex based on the lowlink value of the neighbor. If a neighbor is on the stack, update the lowlink value of the current vertex based on the index of that neighbor.
 * step 5: After exploring all neighbors, check if the lowlink value of the current vertex is equal to its index. If it is, it means that a strongly connected component has been found. Pop vertices from the stack until the current vertex is reached, marking them as not on the stack and adding them to a new strongly connected component array. Finally, add this
 * strongly connected component array to the sccs array.
 * step 6: Iterate through each vertex in the graph and call strongconnect on any vertex that has not been indexed. This will ensure that all vertices are processed and all strongly connected components are found.
 * step 7: Return the sccs array, which contains all the strongly connected components in the graph.
 * step 8: The time complexity of Tarjan's algorithm is O(V + E) where V is the number of vertices and E is the number of edges in the graph, as each vertex and edge is visited at most once. The space complexity is O(V) for the index, lowlink, stack, and onStack objects, which store information about the vertices in the graph.
 * step 9: In summary, Tarjan's algorithm is an efficient method for finding strongly connected components in directed graphs. It uses a depth-first search approach and maintains index and lowlink values to identify when a strongly connected component has been fully explored. The algorithm runs in linear
 * time and is widely used in various applications where identifying groups of mutually reachable vertices is important, such as in social network analysis and software dependency analysis.
 */
