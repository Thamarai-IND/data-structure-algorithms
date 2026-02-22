
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

const arr = [12, 11, 13, 5, 6];
const sortedArr = insertionSort(arr);
console.log(sortedArr); // [5, 6, 11, 12, 13]

// Time Complexity: O(n^2)
// Space Complexity: O(1)

/**
 * explain the above code step by step:
 * 
 * 1. The `insertionSort` function takes an array as input and iterates through it starting from the second element (index 1).
 * 2. For each element (referred to as `key`), it compares it with the elements before it (the sorted portion of the array).
 * 3. A while loop is used to shift elements that are greater than the `key` to one position ahead of their current position until the correct position for the `key` is found.
 * 4. Once the correct position is found, the `key` is placed in that position.
 * 5. This process is repeated for each element in the array until the entire array is sorted.
 * 6. Finally, the sorted array is returned and printed to the console.
 * The overall time complexity of this algorithm is O(n^2) in the worst and average cases, and O(n) in the best case when the array is already sorted. The space complexity is O(1) because it sorts the array in place without requiring additional space for another array.
 * description: Insertion Sort is a simple sorting algorithm that builds the sorted array one item at a time. It works by repeatedly taking the next unsorted element and inserting it into the correct position in the already sorted portion of the array. This algorithm is efficient for small datasets or nearly sorted arrays, but it is not the most efficient sorting algorithm for large datasets.
 * example: Given an array [12, 11, 13, 5, 6], the insertion sort algorithm will sort it to [5, 6, 11, 12, 13].
 * advantages: Simple to understand and implement, efficient for small datasets or nearly sorted arrays, does not require additional memory (in-place sorting).
 * disadvantages: Inefficient for large datasets, with a time complexity of O(n^2) in the worst and average cases.
 * use cases: Insertion Sort is often used for small datasets or when the array is already mostly sorted, as it can perform well in those cases. It is also commonly used as a subroutine in more complex sorting algorithms like Merge Sort or Quick Sort to sort small subarrays efficiently.
 * stability: Insertion Sort is a stable sorting algorithm, meaning that it preserves the relative order of equal elements.
 * in-place: Insertion Sort is an in-place sorting algorithm, as it does not require additional space for another array to sort the elements. It only uses a constant amount of extra space for temporary variables during the insertion process.
 * optimization: An optimized version of Insertion Sort can be implemented using binary search to find the correct position for the `key` in the sorted portion of the array, which can reduce the number of comparisons. However, this optimization does not improve the overall time complexity of the algorithm, which remains O(n^2) in the worst case.
 * example of optimized insertion sort:
 * 
 */

const optimizedInsertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        // Use binary search to find the correct position for key
        let left = 0;
        let right = j;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] > key) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // Shift elements to the right to make space for key
        for (let k = i - 1; k >= left; k--) {
            arr[k + 1] = arr[k];
        }
        arr[left] = key;
    }
    return arr;
}

const arr2 = [12, 11, 13, 5, 6];
const sortedArr2 = optimizedInsertionSort(arr2);
console.log(sortedArr2); // [5, 6, 11, 12, 13]

/**
 * explain the above code step by step:
 * 1. The `optimizedInsertionSort` function takes an array as input and iterates through it starting from the second element (index 1).
 * 2. For each element (referred to as `key`), it uses binary search to find the correct position for the `key` in the sorted portion of the array (from index 0 to `i - 1`).
 * 3. The binary search is performed by initializing `left` and `right` pointers and calculating the `mid` index. If the element at `mid` is greater than the `key`, the search continues in the left half; otherwise, it continues in the right half.
 * 4. Once the correct position for the `key` is found (indicated by the `left` pointer), a loop is used to shift elements to the right to make space for the `key`.
 * 5. Finally, the `key` is placed in its correct position, and this process is repeated for each element in the array until the entire array is sorted.
 * 6. The sorted array is returned and printed to the console.
 * The overall time complexity of this optimized version of Insertion Sort remains O(n^2) in the worst case due to the shifting of elements, but it can reduce the number of comparisons made during the binary search step. The space complexity is still O(1) because it sorts the array in place without requiring additional space for another array.
 * 
 * In summary, while the optimized version of Insertion Sort can reduce the number of comparisons, it does not improve the overall time complexity of the algorithm, which remains O(n^2) in the worst case. However, it can be more efficient for certain types of input, such as nearly sorted arrays.
 */