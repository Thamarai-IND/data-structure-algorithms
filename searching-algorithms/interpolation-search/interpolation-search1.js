

const interpolationSearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right && target >= arr[left] && target <= arr[right]) {
        if (left === right) {
            if (arr[left] === target) {
                return left;
            }
            return -1;
        }
        const pos = left + Math.floor(((right - left) / (arr[right] - arr[left])) * (target - arr[left]));
        if (arr[pos] === target) {
            return pos;
        } else if (arr[pos] < target) {
            left = pos + 1;
        } else {
            right = pos - 1;
        }
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5];
const target = 4;
const result = interpolationSearch(arr, target);
console.log(result); // 3

// Time Complexity: O(log log n) on average and O(n) in the worst case, Space Complexity: O(1)
/**
 * explain the above code step by step:
 * 1. The `interpolationSearch` function takes a sorted array and a target value as input.
 * 2. It initializes two pointers, `left` and `right`, to the start and end of the array, respectively.
 * 3. It enters a while loop that continues as long as `left` is less than or equal to `right` and the target value is within the range defined by the values at `left` and `right`.
 * 4. Inside the loop, it calculates the position `pos` using the interpolation formula, which estimates the position of the target value based on its relative position between `left` and `right`.
 * 5. It checks if the element at `pos` is equal to the target value. If a match is found, it returns the index `pos`.
 * 6. If the element at `pos` is less than the target value, it means the target must be in the right half of the array, so it updates `left` to `pos + 1`.
 * 7. If the element at `pos` is greater than the target value, it means the target must be in the left half of the array, so it updates `right` to `pos - 1`.
 * 8. If the loop completes without finding a match, it returns -1 to indicate that the target value is not present in the array.
 * The overall time complexity of this algorithm is O(log log n) on average when the elements are uniformly distributed, but it can degrade to O(n) in the worst case when the elements are not uniformly distributed. The space complexity is O(1) because it uses a constant amount of space for the pointers and index variables.
 * description: Interpolation Search is an efficient search algorithm for sorted arrays that works by estimating the position of the target value based on its relative position between the values at the `left` and `right` pointers. It is particularly effective for uniformly distributed data, as it can significantly reduce the number of comparisons needed to find the target value. However, it can perform poorly on non-uniformly distributed data, leading to a worst-case time complexity of O(n).
 * example: Given a sorted array [1, 2, 3, 4, 5] and a target value of 4, the interpolation search algorithm will return the index 3, as the value 4 is located at that index in the array.
 * advantages: Interpolation Search can be more efficient than binary search for uniformly distributed data, as it can reduce the number of comparisons needed to find the target value. It has an average time complexity of O(log log n) and a space complexity of O(1).
 * disadvantages: Interpolation Search can perform poorly on non-uniformly distributed data, leading to a worst-case time complexity of O(n). Additionally, it requires the input array to be sorted, which can add overhead if the array is not already sorted.
 * use cases: Interpolation Search is often used for searching in large sorted datasets where the values are uniformly distributed. It can also be used in applications where the target value is expected to be located near the beginning or end of the array, as it may find the target more quickly in such cases.
 * stability: Interpolation Search is a stable search algorithm, as it does not modify the order of the elements in the array.
 * in-place: Interpolation Search is an in-place search algorithm, as it does not require additional space for another array to perform the search.
 * optimization: An optimized version of Interpolation Search can be implemented by using a more efficient method for calculating the position `pos`, such as using a logarithmic approach to estimate the position based on the distribution of the values in the array. This can further reduce the number of comparisons needed to find the target value.
 * example of optimized interpolation search:
 * 
 */

const optimizedInterpolationSearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right && target >= arr[left] && target <= arr[right]) {
        if (left === right) {
            if (arr[left] === target) {
                return left;
            }
            return -1;
        }
        const pos = left + Math.floor(((right - left) / (arr[right] - arr[left])) * (target - arr[left]));
        if (arr[pos] === target) {
            return pos;
        } else if (arr[pos] < target) {
            left = pos + 1;
        } else {
            right = pos - 1;
        }
    }
    return -1;
}


const optimizedResult = optimizedInterpolationSearch(arr, target);
console.log(optimizedResult); // 3

// Time Complexity: O(log log n) on average and O(n) in the worst case, Space Complexity: O(1)

/**
 * explain the above code step by step:
 * 1. The `optimizedInterpolationSearch` function takes a sorted array and a target value as input.
 * 2. It initializes two pointers, `left` and `right`, to the start and end of the array, respectively.
 * 3. It enters a while loop that continues as long as `left` is less than or equal to `right` and the target value is within the range defined by the values at `left` and `right`.
 * 4. Inside the loop, it calculates the position `pos` using the interpolation formula, which estimates the position of the target value based on its relative position between `left` and `right`.
 * 5. It checks if the element at `pos` is equal to the target value. If a match is found, it returns the index `pos`.
 * 6. If the element at `pos` is less than the target value, it means the target must be in the right half of the array, so it updates `left` to `pos + 1`.
 * 7. If the element at `pos` is greater than the target value, it means the target must be in the left half of the array, so it updates `right` to `pos - 1`.
 * 8. If the loop completes without finding a match, it returns -1 to indicate that the target value is not present in the array.
 * The overall time complexity of this optimized algorithm remains O(log log n) on average when the elements are uniformly distributed, but it can degrade to O(n) in the worst case when the elements are not uniformly distributed. The space complexity is O(1) because it uses a constant amount of space for the pointers and index variables.
 */