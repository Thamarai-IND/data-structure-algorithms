

const primsAlgorithm = (graph) => {
    const vertices = Object.keys(graph);
    const visited = new Set();
    const result = [];
    const minHeap = new MinHeap();
    minHeap.insert({ vertex: vertices[0], weight: 0 });
    while (!minHeap.isEmpty()) {
        const { vertex, weight } = minHeap.extractMin();
        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push({ vertex, weight });
            graph[vertex].forEach(neighbor => {
                if (!visited.has(neighbor.vertex)) {
                    minHeap.insert({ vertex: neighbor.vertex, weight: neighbor.weight });
                }
            });
        }
    }
    return result;
}

class MinHeap {
    constructor() {
        this.heap = [];
    }
    insert(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].weight < this.heap[parentIndex].weight) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else { 
                break;
            }
        }
    }
    extractMin() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown(0);
        }
        return min;
    }
    sinkDown(index) {
        const length = this.heap.length;
        const node = this.heap[index];
        let childIndex = 2 * index + 1;
        while (childIndex < length) {
            const rightChildIndex = childIndex + 1;
            if (rightChildIndex < length && this.heap[rightChildIndex].weight < this.heap[childIndex].weight) {
                childIndex = rightChildIndex;
            }
            if (this.heap[childIndex].weight < node.weight) {
                [this.heap[index], this.heap[childIndex]] = [this.heap[childIndex], this.heap[index]];
                index = childIndex;
                childIndex = 2 * index + 1;
            } else {
                break;
            }
        }
    }
    isEmpty() {
        return this.heap.length === 0;
    }
}

const graph = {
    A: [{ vertex: 'B', weight: 1 }, { vertex: 'C', weight: 4 }],
    B: [{ vertex: 'A', weight: 1 }, { vertex: 'D', weight: 2 }, { vertex: 'E', weight: 5 }],
    C: [{ vertex: 'A', weight: 4 }, { vertex: 'E', weight: 1 }],
    D: [{ vertex: 'B', weight: 2 }, { vertex: 'E', weight: 3 }],
    E: [{ vertex: 'B', weight: 5 }, { vertex: 'C', weight: 1 }, { vertex: 'D', weight: 3 }]
}

console.log(primsAlgorithm(graph)); // [ { vertex: 'A', weight: 0 }, { vertex: 'B', weight: 1 }, { vertex: 'D', weight: 2 }, { vertex: 'E', weight: 3 }, { vertex: 'C', weight: 4 } ]

// Time Complexity: O(E log V) where E is the number of edges and V is the number of vertices in the graph, due to the use of a min-heap to find the minimum weight edge at each step.
// Space Complexity: O(V) for the visited set and the result array.

// Prim's algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph. It starts with an arbitrary vertex and grows the tree by adding the smallest edge that connects a vertex in the tree to a vertex outside the tree until all vertices are included in the tree.
// The MinHeap class is a helper class that implements a min-heap data structure to efficiently retrieve the minimum weight edge at each step of Prim's algorithm. It provides methods for inserting nodes, extracting the minimum node, and maintaining the heap property through bubbling up and sinking down operations.
// The graph is represented as an adjacency list, where each vertex has an array of neighboring vertices along with the weights of the edges connecting them. The output of the Prim's algorithm is an array of objects, each containing a vertex and its corresponding weight in the minimum spanning tree.
// Prim's algorithm is particularly useful for finding the minimum spanning tree of a graph, which is a subset of the edges that connects all vertices together without any cycles and with the minimum possible total edge weight. This is commonly used in network design, such as designing the layout of electrical grids, computer networks, or transportation systems.

/** * step 1: Initialize a min-heap to store the edges based on their weights, and a visited set to keep track of the vertices that have been included in the minimum spanning tree (MST). Start with an arbitrary vertex and add it to the min-heap with a weight of 0.
 * step 2: While the min-heap is not empty, extract the edge with the smallest weight. If the vertex connected by this edge has not been visited, add it to the visited set and include this edge in the MST result. Then, for each neighboring vertex of the newly added vertex, if it has not been visited, add it to the min-heap with its corresponding edge weight.
 * step 3: Repeat this process until all vertices have been visited and included in the MST. The result will be a list of vertices along with their corresponding weights in the minimum spanning tree.
 * step 4: The time complexity of Prim's algorithm is O(E log V) due to the use of a min-heap to manage the edges, where E is the number of edges and V is the number of vertices in the graph. The space complexity is O(V) for the visited set and the result array, which store information about the vertices included in the MST.
 * step 5: Prim's algorithm is a greedy algorithm that builds the minimum spanning tree by always choosing the edge with the smallest weight that connects a vertex in the tree to a vertex outside the tree. This ensures that the resulting tree has the minimum total edge weight.
 * step 6: The MinHeap class is a crucial component of Prim's algorithm, as it allows for efficient retrieval of the minimum weight edge at each step. It provides methods for inserting nodes, extracting the minimum node, and maintaining the heap property through bubbling up and sinking down operations.
 * step 7: Prim's algorithm is widely used in various applications, such as designing efficient network layouts, optimizing transportation routes, and solving clustering problems. It is particularly effective for dense graphs where the number of edges is close to V^2, as it can quickly find the minimum spanning tree without needing to consider all possible combinations of edges.
 */
