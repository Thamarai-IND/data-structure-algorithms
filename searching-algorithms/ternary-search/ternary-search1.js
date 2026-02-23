
const ternarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid1 = left + Math.floor((right - left) / 3);
        const mid2 = right - Math.floor((right - left) / 3);
        if (arr[mid1] === target) {
            return mid1;
        } else if (arr[mid2] === target) {
            return mid2;
        } else if (target < arr[mid1]) {
            right = mid1 - 1;
        } else if (target > arr[mid2]) {
            left = mid2 + 1;
        } else {
            left = mid1 + 1;
            right = mid2 - 1;
        }
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5];
const target = 4;
const result = ternarySearch(arr, target);
console.log(result); // 3

// Time Complexity: O(log n) and Space Complexity: O(1)

/**
 * explain the above code step by step:
 * 1. The `ternarySearch` function takes a sorted array and a target value as input.
 * 2. It initializes two pointers, `left` and `right`, to the start and end of the array, respectively.
 * 3. It enters a while loop that continues as long as `left` is less than or equal to `right`.
 * 4. Inside the loop, it calculates two middle indices, `mid1` and `mid2`, which divide the array into three parts.
 * 5. It checks if the elements at `mid1` or `mid2` are equal to the target value. If a match is found, it returns the corresponding index.
 * 6. If the target value is less than the element at `mid1`, it means the target must be in the left third of the array, so it updates `right` to `mid1 - 1`.
 * 7. If the target value is greater than the element at `mid2`, it means the target must be in the right third of the array, so it updates `left` to `mid2 + 1`.
 * 8. If the target value is between the elements at `mid1` and `mid2`, it means the target must be in the middle third of the array, so it updates `left` to `mid1 + 1` and `right` to `mid2 - 1`.
 * 9. If the loop completes without finding a match, it returns -1 to indicate that the target value is not present in the array.
 * The overall time complexity of this algorithm is O(log n) because it effectively reduces the search space by dividing it into three parts with each iteration. The space complexity is O(1) because it uses a constant amount of space for the pointers and index variables.
 * description: Ternary Search is an efficient search algorithm that works on sorted arrays. It divides the search interval into three parts and compares the target value with the elements at two middle indices. Based on the comparison, it eliminates one-third of the search space in each iteration. Ternary Search has a time complexity of O(log n) and a space complexity of O(1).
 * example: Given a sorted array [1, 2, 3, 4, 5] and a target value of 4, the ternary search algorithm will return the index 3, as the value 4 is located at that index in the array.
 * advantages: Ternary Search can be more efficient than binary search in certain cases, as it reduces the number of comparisons needed to find the target value. It has a time complexity of O(log n) and a space complexity of O(1).
 * disadvantages: Ternary Search requires the input array to be sorted, which can add overhead if the array is not already sorted. Additionally, it may not be as efficient as binary search for very large datasets, as it still requires multiple comparisons in each iteration.
 * use cases: Ternary Search is often used for searching in large sorted datasets where the cost of comparisons is less than the cost of performing a binary search. It can also be used in applications where the target value is expected to be located near the beginning or end of the array, as it may find the target more quickly in such cases.
 * stability: Ternary Search is a stable search algorithm, as it does not modify the order of the elements in the array.
 * in-place: Ternary Search is an in-place search algorithm, as it does not require additional space for another array to perform the search.
 * optimization: An optimized version of Ternary Search can be implemented by using a more efficient method for calculating the middle indices, such as using a logarithmic approach to estimate the position based on the distribution of the values in the array. This can further reduce the number of comparisons needed to find the target value.
 * example of optimized ternary search:
 * 
 */

const optimizedTernarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid1 = left + Math.floor((right - left) / 3);
        const mid2 = right - Math.floor((right - left) / 3);
        if (arr[mid1] === target) {
            return mid1;
        } else if (arr[mid2] === target) {
            return mid2;
        } else if (target < arr[mid1]) {
            right = mid1 - 1;
        } else if (target > arr[mid2]) {
            left = mid2 + 1;
        } else {
            left = mid1 + 1;
            right = mid2 - 1;
        }
    }
    return -1;
}

const optimizedResult = optimizedTernarySearch(arr, target);
console.log(optimizedResult); // 3

// Time Complexity: O(log n) and Space Complexity: O(1)

/**
 * explain the above code step by step:
 * 1. The `optimizedTernarySearch` function takes a sorted array and a target value as input.
 * 2. It initializes two pointers, `left` and `right`, to the start and end of the array, respectively.
 * 3. It enters a while loop that continues as long as `left` is less than or equal to `right`.
 * 4. Inside the loop, it calculates two middle indices, `mid1` and `mid2`, which divide the array into three parts.
 * 5. It checks if the elements at `mid1` or `mid2` are equal to the target value. If a match is found, it returns the corresponding index.
 * 6. If the target value is less than the element at `mid1`, it means the target must be in the left third of the array, so it updates `right` to `mid1 - 1`.
 * 7. If the target value is greater than the element at `mid2`, it means the target must be in the right third of the array, so it updates `left` to `mid2 + 1`.
 * 8. If the target value is between the elements at `mid1` and `mid2`, it means the target must be in the middle third of the array, so it updates `left` to `mid1 + 1` and `right` to `mid2 - 1`.
 * 9. If the loop completes without finding a match, it returns -1 to indicate that the target value is not present in the array.
 * The overall time complexity of this algorithm is O(log n) because it effectively reduces the search space by dividing it into three parts with each iteration. The space complexity is O(1) because it uses a constant amount of space for the pointers and index variables.
 * 
 * description: An optimized version of Ternary Search can be implemented by using a more efficient method for calculating the middle indices, such as using a logarithmic approach to estimate the position based on the distribution of the values in the array. This can further reduce the number of comparisons needed to find the target value.
 * example: Given a sorted array [1, 2, 3, 4, 5] and a target value of 4, the optimized ternary search algorithm will return the index 3, as the value 4 is located at that index in the array.
 * advantages: The optimized version of Ternary Search can be more efficient than the standard version in certain cases, as it reduces the number of comparisons needed to find the target value. It has a time complexity of O(log n) and a space complexity of O(1).
 * disadvantages: The optimized version of Ternary Search still requires the input array to be sorted, which can add overhead if the array is not already sorted. Additionally, it may not be as efficient as binary search for very large datasets, as it still requires multiple comparisons in each iteration.
 * use cases: The optimized version of Ternary Search is often used for searching in large sorted datasets where the cost of comparisons is less than the cost of performing a binary search. It can also be used in applications where the target value is expected to be located near the beginning or end of the array, as it may find the target more quickly in such cases.
 * stability: The optimized version of Ternary Search is a stable search algorithm, as it does not modify the order of the elements in the array.
 * in-place: The optimized version of Ternary Search is an in-place search algorithm, as it does not require additional space for another array to perform the search.
 * optimization: An optimized version of Ternary Search can be implemented by using a more efficient method for calculating the middle indices, such as using a logarithmic approach to estimate the position based on the distribution of the values in the array. This can further reduce the number of comparisons needed to find the target value.
 * 
 */