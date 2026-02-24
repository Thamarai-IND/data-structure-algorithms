
const kosarajusAlgorithm = (graph) => {
    const visited = new Set();
    const finishStack = [];
    const sccs = [];
    const dfs = (vertex) => {
        visited.add(vertex);
        graph[vertex].forEach(neighbor => {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        });
        finishStack.push(vertex);
    }
    for (let vertex in graph) {
        if (!visited.has(vertex)) {
            dfs(vertex);
        }
    }
    const reversedGraph = {};
    for (let vertex in graph) {
        graph[vertex].forEach(neighbor => {
            if (!reversedGraph[neighbor]) {
                reversedGraph[neighbor] = [];
            }
            reversedGraph[neighbor].push(vertex);
        });
    }
    visited.clear();
    const reverseDfs = (vertex, currentScc) => {
        visited.add(vertex);
        currentScc.push(vertex);
        (reversedGraph[vertex] || []).forEach(neighbor => {
            if (!visited.has(neighbor)) {
                reverseDfs(neighbor, currentScc);
            }
        });
    }
    while (finishStack.length > 0) {
        const vertex = finishStack.pop();
        if (!visited.has(vertex)) {
            const currentScc = [];
            reverseDfs(vertex, currentScc);
            sccs.push(currentScc);
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

console.log(kosarajusAlgorithm(graph)); // [ [ 'G', 'F' ], [ 'C', 'D', 'H' ], [ 'B', 'E', 'A' ] ]

// Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges in the graph, as each vertex and edge is visited at most once.
// Space Complexity: O(V) for the visited set, finishStack, and sccs array, which store information about the vertices and strongly connected components in the graph.

// description: Kosaraju's algorithm is a two-pass depth-first search algorithm used to find strongly connected components (SCCs) in a directed graph. The algorithm first performs a depth-first search on the original graph to determine the finishing times of each vertex. Then, it reverses the graph and performs another depth-first search based on the finishing times from the first pass. The vertices visited during the second pass form strongly connected components. This algorithm efficiently finds all SCCs in O(V + E) time, making it suitable for large graphs.
// advantages: Kosaraju's algorithm is efficient for finding strongly connected components in directed graphs, with a time complexity of O(V + E). It uses two depth-first search traversals, making it easy to understand and implement.
// disadvantages: Kosaraju's algorithm requires two passes of depth-first search, which can be less efficient than other algorithms like Tarjan's algorithm that find strongly connected components in a single pass. Additionally, it may not be the best choice for finding strongly connected components in very large graphs with a high number of edges, as the depth-first search can lead to deep recursion and potential stack overflow issues.

/** * step 1: Perform a depth-first search (DFS) on the original graph to determine the finishing times of each vertex. This can be done by maintaining a stack to keep track of the vertices in the order they finish processing.
 * step 2: Reverse the graph by creating a new graph where all edges are reversed. This can be done by iterating through the original graph and adding edges in the opposite direction to the new graph.
 * step 3: Perform another depth-first search on the reversed graph, but this time, process the vertices in the order of their finishing times from the first DFS. This means that you will start with the vertex that finished last in the first DFS and continue in reverse order.
 * step 4: During the second DFS, keep track of the vertices visited in each call. Each call to the second DFS will yield one strongly connected component, which can be stored in an array or list.
 * step 5: Continue this process until all vertices have been processed in the second DFS. The result will be a list of strongly connected components, where each component is a list of vertices that are mutually reachable.
 * step 6: The time complexity of Kosaraju's algorithm is O(V + E) where V is the number of vertices and E is the number of edges in the graph, as each vertex and edge is visited at most once. The space complexity is O(V) for the visited set, finishStack, and sccs array, which store information about the vertices and strongly connected components in the graph.
 * step 7: In summary, Kosaraju's algorithm is an efficient method for finding strongly connected components in directed graphs. It uses two
 * depth-first search traversals and a graph reversal step to identify strongly connected components. The algorithm runs in linear time and is widely used in various applications where identifying groups of mutually reachable vertices is important, such as in social network analysis and software dependency analysis.
 */