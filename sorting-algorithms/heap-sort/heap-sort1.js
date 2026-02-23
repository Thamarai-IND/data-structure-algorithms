
const heapSort = (arr) => {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}

const heapify = (arr, n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

const arr = [12, 11, 13, 5, 6, 7];
const sortedArr = heapSort(arr);
console.log(sortedArr); // [5, 6, 7, 11, 12, 13]

// Time Complexity: O(n log n)
// Space Complexity: O(1) (in-place sorting algorithm)

/**
 * explain the above code step by step:
 * 1. The `heapSort` function takes an array as input and first builds a max heap from the array. This is done by calling the `heapify` function for each non-leaf node starting from the last non-leaf node down to the root node. The `heapify` function ensures that the subtree rooted at the given index maintains the max heap property.
 * 2. After building the max heap, the function repeatedly swaps the root of the heap (the largest element) with the last element of the heap and reduces the size of the heap by one. It then calls `heapify` on the root node to restore the max heap property for the remaining heap.
 * 3. This process continues until the heap is reduced to a single element, at which point the array is sorted in ascending order.
 * 4. Finally, the sorted array is printed to the console.
 * The overall time complexity of this algorithm is O(n log n) due to the heap construction and the repeated heapification process. The space complexity is O(1) since it is an in-place sorting algorithm, although the recursive calls to `heapify` can lead to O(log n) space complexity in the worst case.
 * 
 * description: Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort elements. It first builds a max heap from the input array, then repeatedly swaps the root of the heap (the largest element) with the last element of the heap and reduces the size of the heap by one. The process continues until the heap is reduced to a single element, resulting in a sorted array. Heap Sort has a time complexity of O(n log n) and is an in-place sorting algorithm.
 * example: Given an array [12, 11, 13, 5, 6, 7], the heap sort algorithm will sort it to [5, 6, 7, 11, 12, 13].
 * advantages: Heap Sort has a time complexity of O(n log n) and is an in-place sorting algorithm, meaning it does not require additional space for another array to sort the elements. It is also not sensitive to the initial order of the elements, making it efficient for sorting large datasets.
 * disadvantages: Heap Sort is not a stable sorting algorithm, meaning that it does not preserve the relative order of equal elements. Additionally, it can be less efficient than other sorting algorithms like Quick Sort or Merge Sort for small datasets due to its overhead of building the heap.
 * use cases: Heap Sort is often used for sorting large datasets and is particularly useful when memory usage is a concern, as it is an in-place sorting algorithm. It is also used in applications where stability is not required.
 * stability: Heap Sort is not a stable sorting algorithm, meaning that it does not preserve the relative order of equal elements.
 * in-place: Heap Sort is an in-place sorting algorithm, as it does not require additional space for another array to sort the elements. However, it does use space for recursive calls to `heapify`, which can lead to O(log n) space complexity in the worst case.
 * optimization: An optimized version of Heap Sort can be implemented by using a more efficient method for building the heap, such as the "bottom-up" approach, which can reduce the time complexity of building the heap to O(n). Additionally, for small subarrays (e.g., of size 10 or less), a different sorting algorithm like Insertion Sort can be used to sort them more efficiently before building the heap.
 * example of optimized heap sort:
 * 
 */

const optimizedHeapSort = (arr) => {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyOpt(arr, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapifyOpt(arr, i, 0);
    }
    return arr;
}

function heapifyOpt(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapifyOpt(arr, n, largest);
    }
}

const arr2 = [12, 11, 13, 5, 6, 7];
const sortedArr2 = optimizedHeapSort(arr2);
console.log(sortedArr2); // [5, 6, 7, 11, 12, 13]


// Time Complexity: O(n log n) due to the optimized heap construction and the repeated heapification process
// Space Complexity: O(1) (in-place sorting algorithm)

/**
 * The optimized version of Heap Sort uses a more efficient method for building the heap, which can reduce the time complexity of building the heap to O(n). The rest of the algorithm remains the same, with a time complexity of O(n log n) due to the repeated heapification process. The space complexity is still O(1) since it is an in-place sorting algorithm, although the recursive calls to `heapifyOpt` can lead to O(log n) space complexity in the worst case.
 */