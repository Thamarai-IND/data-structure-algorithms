
const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

const merge = (left, right) => {
    const result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // [3, 9, 10, 27, 38, 43, 82]

// Time Complexity: O(n log n)
// Space Complexity: O(n)

/**
 * explain the above code step by step:
 * 
 * 1. The `mergeSort` function takes an array as input. If the length of the array is less than or equal to 1, it returns the array as it is already sorted.
 * 2. The array is split into two halves using the `mid` index, which is calculated as the floor of the array length divided by 2.
 * 3. The `mergeSort` function is called recursively on the left half and the right half of the array, resulting in two sorted subarrays.
 * 4. The `merge` function is then called with the two sorted subarrays as arguments. This function merges the two sorted arrays into a single sorted array.
 * 5. Inside the `merge` function, an empty `result` array is initialized to store the merged output. Two pointers `i` and `j` are used to track the current index of the left and right subarrays, respectively.
 * 6. A while loop runs until either pointer reaches the end of its respective subarray. Inside the loop, the elements at the current pointers are compared, and the smaller element is pushed to the `result` array. The pointer for the array from which the element was taken is then incremented.
 * 7. After the while loop, any remaining elements in either subarray are concatenated to the `result` array using the `concat` method.
 * 8. Finally, the sorted array is printed to the console.
 * 
 * The overall time complexity of this algorithm is O(n log n) due to the divide-and-conquer approach, and the space complexity is O(n) because of the additional space used for the `result` array during merging.
 * 
 * description: Merge Sort is a divide-and-conquer algorithm that breaks down a list into smaller sublists until each sublist contains a single element. Then, it merges those sublists back together in a sorted order. This algorithm is efficient for large datasets and has a time complexity of O(n log n) in all cases. However, it requires additional space for the temporary arrays used during the merging process, resulting in a space complexity of O(n).
 * example: Given an array [38, 27, 43, 3, 9, 82, 10], the merge sort algorithm will sort it to [3, 9, 10, 27, 38, 43, 82].
 * advantages: Merge Sort is efficient for large datasets and has a consistent time complexity of O(n log n) regardless of the input. It is also a stable sorting algorithm, meaning that it preserves the relative order of equal elements.
 * disadvantages: Merge Sort requires additional space for the temporary arrays used during the merging process, resulting in a space complexity of O(n). It may not be the best choice for small datasets or when memory usage is a concern.
 * use cases: Merge Sort is often used for sorting linked lists and large datasets that do not fit into memory. It is also commonly used in external sorting algorithms where data is stored on disk and cannot be loaded entirely into memory.
 * stability: Merge Sort is a stable sorting algorithm, meaning that it preserves the relative order of equal elements.
 * in-place: Merge Sort is not an in-place sorting algorithm, as it requires additional space for the temporary arrays used during the merging process.
 * optimization: An optimized version of Merge Sort can be implemented using an iterative approach instead of recursion, which can reduce the overhead of function calls and improve performance for large datasets. Additionally, for small subarrays (e.g., of size 10 or less), a different sorting algorithm like Insertion Sort can be used to sort them more efficiently before merging.
 * example of optimized merge sort:
 * 
 */

const optimizedMergeSort = (arr) => {
    if (arr.length <= 10) {
        return insertionSort(arr);
    }
    const mid = Math.floor(arr.length / 2);
    const left = optimizedMergeSort(arr.slice(0, mid));
    const right = optimizedMergeSort(arr.slice(mid));
    return merge(left, right);
}

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

const arr2 = [38, 27, 43, 3, 9, 82, 10];
const sortedArr2 = optimizedMergeSort(arr2);
console.log(sortedArr2); // [3, 9, 10, 27, 38, 43, 82]

/**
 * explain the above code step by step:
 * 1. The `optimizedMergeSort` function takes an array as input. If the length of the array is less than or equal to 10, it calls the `insertionSort` function to sort the array and returns the sorted array.
 * 2. If the array length is greater than 10, it proceeds with the merge sort algorithm. The array is split into two halves using the `mid` index.
 * 3. The `optimizedMergeSort` function is called recursively on the left and right halves of the array, resulting in two sorted subarrays.
 * 4. The `merge` function is then called to merge the two sorted subarrays into a single sorted array.
 * 5. The `insertionSort` function is a simple sorting algorithm that sorts small arrays efficiently. It iterates through the array, comparing each element (the "key") with the elements before it and inserting it into the correct position in the sorted portion of the array.
 * 6. Finally, the sorted array is printed to the console.
 */