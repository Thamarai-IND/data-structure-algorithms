

const jumpSearch = (arr, target) => {
    const n = arr.length;
    const step = Math.floor(Math.sqrt(n));
    let prev = 0;
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        if (prev >= n) {
            return -1;
        }
        step += Math.floor(Math.sqrt(n));
    }
    while (arr[prev] < target) {
        prev++;
        if (prev === Math.min(step, n)) {
            return -1;
        }
    }
    if (arr[prev] === target) {
        return prev;
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const result = jumpSearch(arr, target);
console.log(result); // 6


// Time Complexity: O(√n) and Space Complexity: O(1)

/**
 * explain the above code step by step:
 * 1. The `jumpSearch` function takes a sorted array and a target value as input.
 * 2. It calculates the step size as the square root of the array length.
 * 3. It initializes a variable `prev` to keep track of the previous index.
 * 4. It uses a while loop to jump through the array in increments of the step size until it finds a block where the target value could be located (i.e., until the value at the current step is greater than or equal to the target).
 * 5. If the end of the array is reached without finding a suitable block, it returns -1 to indicate that the target value is not present in the array.
 * 6. Once a block is found, it uses another while loop to perform a linear search within that block to find the target value.
 * 7. If the target value is found, it returns the index; otherwise, it returns -1 to indicate that the target value is not present in the array.
 * The overall time complexity of this algorithm is O(√n) because it jumps through the array in increments of the square root of the array length, and the linear search within the block takes O(√n) in the worst case. The space complexity is O(1) because it uses a constant amount of space for the index variables and does not require any additional data structures.
 * description: Jump Search is an efficient search algorithm for sorted arrays that works by jumping ahead by fixed steps (usually the square root of the array length) to find a block where the target value could be located. Once a block is found, it performs a linear search within that block to find the target value. Jump Search has a time complexity of O(√n) and a space complexity of O(1).
 * example: Given a sorted array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and a target value of 7, the jump search algorithm will return the index 6, as the value 7 is located at that index in the array.
 * advantages: Jump Search is more efficient than linear search for large sorted arrays, as it reduces the number of comparisons by jumping ahead in the array. It has a time complexity of O(√n) and a space complexity of O(1).
 * disadvantages: Jump Search requires the input array to be sorted, which can add overhead if the array is not already sorted. Additionally, it may not be as efficient as binary search for very large datasets, as it still requires a linear search within the block.
 * use cases: Jump Search is often used for searching in large sorted arrays where the cost of jumping is less than the cost of performing a binary search. It can also be used in applications where the target value is expected to be located near the beginning of the array, as it may find the target more quickly in such cases.
 * stability: Jump Search is a stable search algorithm, as it does not modify the order of the elements in the array.
 * in-place: Jump Search is an in-place search algorithm, as it does not require additional space for another array to perform the search.
 * optimization: An optimized version of Jump Search can be implemented by using a more efficient linear search within the block, such as binary search, to find the target value. This can reduce the time complexity of the search within the block from O(√n) to O(log n).
 * example of optimized jump search:
 * 
 */

const optimizedJumpSearch = (arr, target) => {
    const n = arr.length;
    const step = Math.floor(Math.sqrt(n));
    let prev = 0;
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        if (prev >= n) {
            return -1;
        }
        step += Math.floor(Math.sqrt(n));
    }
    return optimizedBinarySearch(arr, target, prev, Math.min(step, n) - 1);
}

const optimizedResult = optimizedJumpSearch(arr, target);
console.log(optimizedResult); // 6

// Time Complexity: O(√n) and Space Complexity: O(1)

/**
 * explain the above code step by step:
 * 1. The `optimizedJumpSearch` function takes a sorted array and a target value as input.
 * 2. It calculates the step size as the square root of the array length.
 * 3. It initializes a variable `prev` to keep track of the previous index.
 * 4. It uses a while loop to jump through the array in increments of the step size until it finds a block where the target value could be located (i.e., until the value at the current step is greater than or equal to the target).
 * 5. If the end of the array is reached without finding a suitable block, it returns -1 to indicate that the target value is not present in the array.
 * 6. Once a block is found, it calls the `optimizedBinarySearch` function to perform a binary search within that block to find the target value.
 * 7. The `optimizedBinarySearch` function takes the array, target value, and the left and right indices of the block as input and returns the index of the target value if found, or -1 if not found.
 * The overall time complexity of this optimized algorithm is O(√n) for the jumping phase and O(log n) for the binary search within the block, resulting in an overall time complexity of O(√n + log n). The space complexity is O(1) because it uses a constant amount of space for the index variables and does not require any additional data structures.
 */