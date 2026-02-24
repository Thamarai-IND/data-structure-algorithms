

const kruskal = (edges, numVertices) => {
    // Sort edges based on weight
    edges.sort((a, b) => a.weight - b.weight);
    const parent = Array(numVertices).fill(0).map((_, index) => index);
    const rank = Array(numVertices).fill(0);
    const result = [];

    const find = (vertex) => {
        if (parent[vertex] !== vertex) {
            parent[vertex] = find(parent[vertex]);
        }
        return parent[vertex];
    }

    const union = (vertex1, vertex2) => {
        const root1 = find(vertex1);
        const root2 = find(vertex2);
        if (root1 !== root2) {
            if (rank[root1] > rank[root2]) {
                parent[root2] = root1;
            } else if (rank[root1] < rank[root2]) {
                parent[root1] = root2;
            } else {
                parent[root2] = root1;
                rank[root1]++;
            }
        }
    }

    for (let edge of edges) {
        const { vertex1, vertex2, weight } = edge;
        if (find(vertex1) !== find(vertex2)) {
            union(vertex1, vertex2);
            result.push(edge);
        }
    }

    return result;
}

const edges = [
    { vertex1: 0, vertex2: 1, weight: 10 },
    { vertex1: 0, vertex2: 2, weight: 6 },
    { vertex1: 0, vertex2: 3, weight: 5 },
    { vertex1: 1, vertex2: 3, weight: 15 },
    { vertex1: 2, vertex2: 3, weight: 4 }
];

console.log(kruskal(edges, 4));

// Output: 
// [
//   { vertex1: 0, vertex2: 3, weight: 5 },
//   { vertex1: 2, vertex2: 3, weight: 4 },
//   { vertex1: 0, vertex2: 1, weight: 10 }
// ]

// Time Complexity: O(E log E) where E is the number of edges in the graph, due to the sorting step. The union-find operations take O(E α(V)) where α is the inverse Ackermann function, which is very slow-growing and can be considered almost constant for all practical purposes. Therefore, the overall time complexity is dominated by the sorting step.
// Space Complexity: O(V) for the parent and rank arrays used in the union-find structure, where V is the number of vertices in the graph. The result array will also take O(E) space in the worst case if all edges are included in the minimum spanning tree.

// description: Kruskal's algorithm is a greedy algorithm used to find the minimum spanning tree (MST) of a graph. It works by sorting the edges of the graph in non-decreasing order of their weights and then iteratively adding edges to the MST, ensuring that no cycles are formed. The algorithm uses a union-find (disjoint set) data structure to efficiently manage and merge components of the graph as edges are added. Kruskal's algorithm is particularly effective for sparse graphs, where the number of edges is significantly less than V^2, as it focuses on edge selection rather than vertex exploration.
// advantages: Kruskal's algorithm is efficient for sparse graphs, can be easily implemented using a union-find structure, and guarantees a minimum spanning tree. It is also suitable for disconnected graphs, as it can find the minimum spanning forest.
// disadvantages: Kruskal's algorithm can be less efficient for dense graphs compared to Prim's algorithm, as it requires sorting all edges. Additionally, it may not be the best choice for graphs with a large number of edges, as the sorting step can become a bottleneck.
// use cases: Kruskal's algorithm is commonly used in applications such as network design, clustering, and circuit design, where finding a minimum spanning tree is essential. It is particularly effective for sparse graphs and can be used in scenarios where the graph may be disconnected, allowing it to find a minimum spanning forest.


/**
 * step 1: Sort the edges of the graph in non-decreasing order of their weights. This ensures that we always consider the smallest edge first, which is crucial for building the minimum spanning tree (MST) efficiently.
 * step 2: Initialize a union-find (disjoint set) data structure to keep track of which vertices are in which
 * components. This helps in efficiently checking whether adding an edge will form a cycle in the MST.
 * step 3: Iterate through the sorted edges and for each edge, check if the vertices of the edge belong to different components using the union-find structure. If they do, it means that adding this edge will not form a cycle, so we can safely include it in our MST.
 * step 4: If the edge is included in the MST, perform a union operation on the two vertices to merge their components in the union-find structure. This ensures that future edges that connect these vertices will be recognized as part of the same component.
 * step 5: Continue this process until we have included (V-1) edges in our MST, where V is the number of vertices in the graph. At this point, we will have a complete minimum spanning tree that connects all vertices with the minimum total weight.
 * step 6: The final output is a list of edges that constitute the minimum spanning tree, which can be used for various applications such as network design, clustering, and
 * circuit design. The Kruskal's algorithm is particularly effective for sparse graphs, where the number of edges is significantly less than V^2, as it focuses on edge selection rather than vertex exploration.
 * step 7: In summary, Kruskal's algorithm is a powerful and efficient method for finding the minimum spanning tree of a graph, especially when the graph is sparse. It relies on sorting edges and using a union-find structure to ensure that the resulting tree is acyclic and has the minimum possible total weight.
 * 
 */