const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

const arr = [5, 1, 4, 2, 8];
bubbleSort(arr);
console.log(arr); // [1, 2, 4, 5, 8]

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// description: Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name from the way smaller elements "bubble" to the top of the list. It is not the most efficient sorting algorithm for large datasets, but it is easy to understand and implement.
// example: Given an array [5, 1, 4, 2, 8], the bubble sort algorithm will sort it to [1, 2, 4, 5, 8].
// advantages: Simple to understand and implement, does not require additional memory (in-place sorting).
// disadvantages: Inefficient for large datasets, with a time complexity of O(n^2) in the worst and average cases.
// use cases: Bubble Sort is often used for educational purposes to teach the concept of sorting algorithms. It can be useful for small datasets or when the list is already mostly sorted, as it can perform well in those cases. However, for larger datasets, more efficient sorting algorithms like Quick Sort or Merge Sort are typically preferred.
// stability: Bubble Sort is a stable sorting algorithm, meaning that it preserves the relative order of equal elements.
// in-place: Bubble Sort is an in-place sorting algorithm, as it does not require additional space for another array to sort the elements. It only uses a constant amount of extra space for temporary variables during the swapping process.
// optimization: An optimized version of Bubble Sort can be implemented by introducing a flag to track whether any swaps were made during a pass. If no swaps were made, the array is already sorted, and the algorithm can terminate early, reducing unnecessary passes. This optimization can improve the performance of Bubble Sort for nearly sorted arrays.
// example of optimized bubble sort:

const optimizedBubbleSort = (arr) => {
    let swapped;
    for (let i = 0; i < arr.length; i++) {
        swapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
}

const arr2 = [5, 1, 4, 2, 8];
optimizedBubbleSort(arr2);
console.log(arr2); // [1, 2, 4, 5, 8]