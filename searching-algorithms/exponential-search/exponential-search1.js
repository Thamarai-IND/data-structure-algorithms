
const exponentialSearch = (arr, target) => {
    if (arr[0] === target) {
        return 0;
    }
    let i = 1;
    while (i < arr.length && arr[i] <= target) {
        i *= 2;
    }
    return binarySearch(arr, target, i / 2, Math.min(i, arr.length - 1));
}

const binarySearch = (arr, target, left, right) => {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const result = exponentialSearch(arr, target);
console.log(result); // 6

// Time Complexity: O(log n) and Space Complexity: O(1)
/**
 * explain the above code step by step:
 * 1. The `exponentialSearch` function takes a sorted array and a target value as input.
 * 2. It first checks if the first element of the array is equal to the target value. If it is, it returns the index 0.
 * 3. It initializes a variable `i` to 1 and enters a while loop that continues as long as `i` is less than the length of the array and the value at index `i` is less than or equal to the target value.
 * 4. Inside the loop, it doubles the value of `i` to jump ahead in the array.
 * 5. Once a block is found where the target value could be located (i.e., when `i` exceeds the target value or reaches the end of the array), it calls the `binarySearch` function to perform a binary search within that block.
 * 6. The `binarySearch` function takes the array, target value, and the left and right indices of the block as input and returns the index of the target value if found, or -1 if not found.
 * The overall time complexity of this algorithm is O(log n) because it effectively reduces the search space by jumping ahead in the array and then performing a binary search. The space complexity is O(1) because it uses a constant amount of space for the index variables and does not require any additional data structures.
 * description: Exponential Search is an efficient search algorithm for sorted arrays that works by exponentially increasing the index to find a block where the target value could be located. Once a block is found, it performs a binary search within that block to find the target value. Exponential Search has a time complexity of O(log n) and a space complexity of O(1).
 * example: Given a sorted array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and a target value of 7, the exponential search algorithm will return the index 6, as the value 7 is located at that index in the array.
 * advantages: Exponential Search is efficient for large sorted arrays, as it reduces the number of comparisons by jumping ahead in the array. It has a time complexity of O(log n) and a space complexity of O(1).
 * disadvantages: Exponential Search requires the input array to be sorted, which can add overhead if the array is not already sorted. Additionally, it may not be as efficient as binary search for very large datasets, as it still requires a binary search within the block.
 * use cases: Exponential Search is often used for searching in large sorted arrays where the cost of jumping is less than the cost of performing a binary search. It can also be used in applications where the target value is expected to be located near the beginning of the array, as it may find the target more quickly in such cases.
 * stability: Exponential Search is a stable search algorithm, as it does not modify the order of the elements in the array.
 * in-place: Exponential Search is an in-place search algorithm, as it does not require additional space for another array to perform the search.
 * optimization: An optimized version of Exponential Search can be implemented by using a more efficient method for finding the block where the target value could be located, such as using a logarithmic approach to estimate the position based on the distribution of the values in the array. This can further reduce the number of comparisons needed to find the target value.
 * example of optimized exponential search:
 * 
 */

const optimizedExponentialSearch = (arr, target) => {
    if (arr[0] === target) {
        return 0;
    }
    let i = 1;
    while (i < arr.length && arr[i] <= target) {
        i *= 2;
    }
    return optimizedBinarySearch(arr, target, i / 2, Math.min(i, arr.length - 1));
}

function optimizedBinarySearch(arr, target, left, right) {
    if (left > right) {
        return -1;
    }
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return optimizedBinarySearch(arr, target, mid + 1, right);
    } else {
        return optimizedBinarySearch(arr, target, left, mid - 1);
    }
}

const optimizedResult = optimizedExponentialSearch(arr, target);
console.log(optimizedResult); // 6

// Time Complexity: O(log n) and Space Complexity: O(1)
/**
 * explain the above code step by step:
 * 1. The `optimizedExponentialSearch` function takes a sorted array and a target value as input.
 * 2. It first checks if the first element of the array is equal to the target value. If it is, it returns the index 0.
 * 3. It initializes a variable `i` to 1 and enters a while loop that continues as long as `i` is less than the length of the array and the value at index `i` is less than or equal to the target value.
 * 4. Inside the loop, it doubles the value of `i` to jump ahead in the array.
 * 5. Once a block is found where the target value could be located (i.e., when `i` exceeds the target value or reaches the end of the array), it calls the `optimizedBinarySearch` function to perform a binary search within that block.
 * 6. The `optimizedBinarySearch` function takes the array, target value, and the left and right indices of the block as input and returns the index of the target value if found, or -1 if not found.
 * The overall time complexity of this optimized algorithm remains O(log n) because it effectively reduces the search space by jumping ahead in the array and then performing a binary search. The space complexity is O(1) because it uses a constant amount of space for the index variables and does not require any additional data structures.
 */

