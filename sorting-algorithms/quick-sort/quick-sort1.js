
const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [10, 7, 8, 9, 1, 5];
const sortedArr = quickSort(arr);
console.log(sortedArr); // [1, 5, 7, 8, 9, 10]

// Time Complexity: O(n log n) on average, O(n^2) in the worst case
// Space Complexity: O(log n) on average, O(n) in the worst case

/**
 * explain the above code step by step:
 * 1. The `quickSort` function takes an array as input. If the length of the array is less than or equal to 1, it returns the array as it is already sorted.
 * 2. The last element of the array is chosen as the pivot.
 * 3. Two empty arrays, `left` and `right`, are initialized to hold elements less than and greater than the pivot, respectively.
 * 4. A for loop iterates through the array (except the last element), comparing each element to the pivot. If an element is less than the pivot, it is pushed to the `left` array; otherwise, it is pushed to the `right` array.
 * 5. The function then recursively calls itself on the `left` and `right` arrays, and the results are combined with the pivot in between to form the sorted array.
 * 6. Finally, the sorted array is printed to the console.
 * The overall time complexity of this algorithm is O(n log n) on average, but it can degrade to O(n^2) in the worst case (e.g., when the smallest or largest element is always chosen as the pivot). The space complexity is O(log n) on average due to recursive calls, but it can degrade to O(n) in the worst case.
 * 
 * description: Quick Sort is a divide-and-conquer algorithm that sorts an array by selecting a 'pivot' element and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively. This algorithm is efficient for large datasets and has an average time complexity of O(n log n). However, it can degrade to O(n^2) in the worst case, particularly when the smallest or largest element is consistently chosen as the pivot.
 * example: Given an array [10, 7, 8, 9, 1, 5], the quick sort algorithm will sort it to [1, 5, 7, 8, 9, 10].
 * advantages: Quick Sort is efficient for large datasets and has an average time complexity of O(n log n). It is also an in-place sorting algorithm, meaning it does not require additional space for another array to sort the elements.
 * disadvantages: Quick Sort can degrade to O(n^2) in the worst case, particularly when the smallest or largest element is consistently chosen as the pivot. It is also not a stable sorting algorithm, meaning that it does not preserve the relative order of equal elements.
 * use cases: Quick Sort is often used for sorting large datasets and is commonly implemented in various programming languages' standard libraries. It is also used in applications where space efficiency is important, as it is an in-place sorting algorithm.
 * stability: Quick Sort is not a stable sorting algorithm, meaning that it does not preserve the relative order of equal elements.
 * in-place: Quick Sort is an in-place sorting algorithm, as it does not require additional space for another array to sort the elements. However, it does use space for recursive calls, which can lead to O(log n) space complexity on average and O(n) in the worst case.
 * optimization: An optimized version of Quick Sort can be implemented by using a better pivot selection strategy, such as choosing the median of the first, middle, and last elements of the array. This can help to avoid worst-case scenarios and improve performance. Additionally, for small subarrays (e.g., of size 10 or less), a different sorting algorithm like Insertion Sort can be used to sort them more efficiently before partitioning.
 * example of optimized quick sort:
 * 
 */

const optimizedQuickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) continue;
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...optimizedQuickSort(left), pivot, ...optimizedQuickSort(right)];
}

const arr2 = [10, 7, 8, 9, 1, 5];
const sortedArr2 = optimizedQuickSort(arr2);
console.log(sortedArr2); // [1, 5, 7, 8, 9, 10]

/**
 * explain the above code step by step:
 * 1. The `optimizedQuickSort` function takes an array as input. If the length of the array is less than or equal to 1, it returns the array as it is already sorted.
 * 2. The pivot is selected using a better strategy by choosing the middle element of the array, which can help to avoid worst-case scenarios.
 * 3. Two empty arrays, `left` and `right`, are initialized to hold elements less than and greater than the pivot, respectively.
 * 4. A for loop iterates through the array, comparing each element to the pivot. If an element is less than the pivot, it is pushed to the `left` array; otherwise, it is pushed to the `right` array. The loop skips the pivot element itself.
 * 5. The function then recursively calls itself on the `left` and `right` arrays, and the results are combined with the pivot in between to form the sorted array.
 * 6. Finally, the sorted array is printed to the console.
 * This optimized version of Quick Sort can perform better on certain datasets by reducing the likelihood of encountering worst-case scenarios, leading to improved performance with an average time complexity of O(n log n). However, it still has a worst-case time complexity of O(n^2) if the pivot selection consistently results in unbalanced partitions.
 */

