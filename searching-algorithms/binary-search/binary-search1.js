
const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
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

const arr = [1, 2, 3, 4, 5];
const target = 4;
const result = binarySearch(arr, target);
console.log(result); // 3

// Time Complexity: O(log n) and Space Complexity: O(1)

/**
 * explain the above code step by step:
 * 1. The `binarySearch` function takes a sorted array and a target value as input.
 * 2. It initializes two pointers, `left` and `right`, to the start and end of the array, respectively.
 * 3. It enters a while loop that continues as long as `left` is less than or equal to `right`.
 * 4. Inside the loop, it calculates the middle index `mid` and checks if the element at that index is equal to the target value.
 * 5. If a match is found, it returns the index `mid`.
 * 6. If the element at `mid` is less than the target value, it means the target must be in the right half of the array, so it updates `left` to `mid + 1`.
 * 7. If the element at `mid` is greater than the target value, it means the target must be in the left half of the array, so it updates `right` to `mid - 1`.
 * 8. If the loop completes without finding a match, it returns -1 to indicate that the target value is not present in the array.
 * The overall time complexity of this algorithm is O(log n) because it effectively halves the search space with each iteration. The space complexity is O(1) because it uses a constant amount of space for the pointers and index variables.
 * 
 * description: Binary Search is an efficient search algorithm that works on sorted arrays. It repeatedly divides the search interval in half, comparing the target value to the middle element of the array. If they match, the search is successful;
 * if the target value is less than the middle element, the search continues in the left half of the array; if it is greater, the search continues in the right half. This process continues until the target value is found or the search interval is empty. Binary Search has a time complexity of O(log n) and a space complexity of O(1).
 * example: Given a sorted array [1, 2, 3, 4, 5] and a target value of 4, the binary search algorithm will return the index 3, as the value 4 is located at that index in the array.
 * advantages: Binary Search is efficient for large sorted datasets, as it has a logarithmic time complexity of O(log n). It is also a simple and easy-to-understand algorithm.
 * disadvantages: Binary Search requires the input array to be sorted, which can add overhead if the array is not already sorted. Additionally, it is not suitable for small datasets, as the overhead of sorting may outweigh the benefits of the search algorithm.
 * use cases: Binary Search is often used for searching in large sorted datasets, such as databases or sorted lists. It is also used in various algorithms that require efficient searching, such as finding the square root of a number or performing binary search on a rotated sorted array.
 * stability: Binary Search is a stable search algorithm, as it does not modify the order of the elements in the array.
 * in-place: Binary Search is an in-place search algorithm, as it does not require additional space for another array to perform the search.
 * optimization: An optimized version of Binary Search can be implemented using recursion instead of iteration. This can make the code more concise and easier to read, although it may lead to increased space complexity due to recursive calls.
 * example of optimized binary search:
 * 
 */

const optimizedBinarySearch = (arr, target, left = 0, right = arr.length - 1) => {
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

const optimizedResult = optimizedBinarySearch(arr, target);
console.log(optimizedResult); // 3

// Time Complexity: O(log n) and Space Complexity: O(log n) due to recursive calls

/**
 * explain the optimized binary search code step by step:
 * 1. The `optimizedBinarySearch` function takes a sorted array, a target value, and optional parameters for the left and right pointers.
 * 2. It checks if the left pointer is greater than the right pointer, which indicates that the search interval is empty. If so, it returns -1 to indicate that the target value is not present in the array.
 * 3. It calculates the middle index `mid` and checks if the element at that index is equal to the target value.
 * 4. If a match is found, it returns the index `mid`.
 * 5. If the element at `mid` is less than the target value, it means the target must be in the right half of the array, so it makes a recursive call to search in that half by updating the left pointer to `mid + 1`.
 * 6. If the element at `mid` is greater than the target value, it means the target must be in the left half of the array, so it makes a recursive call to search in that half by updating the right pointer to `mid - 1`.
 * 7. The function continues to make recursive calls until it finds the target value or determines that it is not present in the array.
 * The overall time complexity of this algorithm is O(log n) because it effectively halves the search space with each recursive call. The space complexity is O(log n) due to the recursive call stack, which can grow up to O(log n) in the worst case when the search interval is halved repeatedly.
 */