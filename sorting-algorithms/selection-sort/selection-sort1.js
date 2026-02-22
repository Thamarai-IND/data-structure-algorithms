
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
}

const arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log(arr); // [11, 12, 22, 25, 64]

/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * 
 * description: Selection Sort is a simple comparison-based sorting algorithm. It works by dividing the input list into two parts: the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list. The algorithm repeatedly selects the smallest (or largest, depending on sorting order) element from the unsorted part and moves it to the end of the sorted part. This process continues until the entire list is sorted.
 * example: Given an array [64, 25, 12, 22, 11], the selection sort algorithm will sort it to [11, 12, 22, 25, 64].
 * advantages: Simple to understand and implement, does not require additional memory (in-place sorting).
 * disadvantages: Inefficient for large datasets, with a time complexity of O(n^2) in the worst and average cases.
 * use cases: Selection Sort is often used for educational purposes to teach the concept of sorting algorithms. It can be useful for small datasets or when memory space is limited, as it does not require additional space for another array to sort the elements. However, for larger datasets, more efficient sorting algorithms like Quick Sort or Merge Sort are typically preferred.
 * stability: Selection Sort is not a stable sorting algorithm, meaning that it does not preserve the relative order of equal elements.
 * in-place: Selection Sort is an in-place sorting algorithm, as it does not require additional space for another array to sort the elements. It only uses a constant amount of extra space for temporary variables during the swapping process.
 * optimization: An optimized version of Selection Sort can be implemented by introducing a flag to track whether any swaps were made during a pass. If no swaps were made, the array is already sorted, and the algorithm can terminate early, reducing unnecessary passes. This optimization can improve the performance of Selection Sort for nearly sorted arrays.
 * example of optimized selection sort:
 * 
 */

const optimizedSelectionSort = (arr) => {
    let swapped;
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        swapped = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
                swapped = true;
            }
        }
        if (swapped) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        } else {
            break;
        }
    }
}

const arr2 = [64, 25, 12, 22, 11];
optimizedSelectionSort(arr2);
console.log(arr2); // [11, 12, 22, 25, 64]

/**
 * explain the above code step by step:
 * 1. The function `optimizedSelectionSort` takes an array `arr` as input.
 * 2. It initializes a variable `swapped` to track whether any swaps were made during a pass.
 * 3. The outer loop iterates through each element of the array, treating it as the current position `i`.
 * 4. Inside the outer loop, it initializes `minIndex` to `i` and resets `swapped` to `false`.
 * 5. The inner loop iterates through the unsorted portion of the array, starting from `i + 1` to the end of the array.
 * 6. If it finds an element smaller than the current minimum (at `minIndex`), it updates `minIndex` and sets `swapped` to `true`.
 * 7. After the inner loop, if `swapped` is `true`, it means a smaller element was found, and it swaps the current element at `i` with the element at `minIndex`.
 * 8. If `swapped` is `false`, it means the array is already sorted, and the algorithm can terminate early by breaking out of the loop.
 * 9. Finally, the sorted array is printed to the console.
 * This optimized version of Selection Sort can perform better on nearly sorted arrays, as it can terminate early if no swaps are needed, reducing unnecessary passes through the array.
 */