
const longestIncreasingSubsequence = (arr) => {
    const n = arr.length;
    const dp = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
}

const arr = [10, 9, 2, 5, 3, 7, 101, 18];
const result = longestIncreasingSubsequence(arr);
console.log(result); // 4 (the longest increasing subsequence is [2, 3, 7, 101])

// Time Complexity: O(n^2) and Space Complexity: O(n)
/**
 * explain the above code step by step:
 * 1. The `longestIncreasingSubsequence` function takes an array of integers as input and initializes a `dp` array of the same length, where each element is initially set to 1. This `dp` array will store the length of the longest increasing subsequence that ends with the element at each index.
 * 2. It uses nested loops to fill the `dp` array. The outer loop iterates through each element of the input array starting from the second element, while the inner loop iterates through all previous elements to find any that are smaller than the current element.
 * 3. If a smaller element is found, it updates the `dp` value at the current index to be the maximum of its current value and the `dp` value of the smaller element plus one (indicating that the subsequence can be extended).
 * 4. After filling the `dp` array, it returns the maximum value in the `dp` array, which represents the length of the longest increasing subsequence in the input array.
 * The overall time complexity of this algorithm is O(n^2) due to the nested loops, and the space complexity is O(n) because of the `dp` array used to store intermediate results.
 * description: The Longest Increasing Subsequence (LIS) problem is a classic problem in computer science that asks for the length of the longest subsequence of a given sequence such that all elements of the subsequence are sorted in increasing
 * order. The dynamic programming approach to solving the LIS problem involves building a `dp` array that stores the length of the longest increasing subsequence that ends with each element, allowing us to efficiently compute the solution.
 * example: Given the array [10, 9, 2, 5, 3, 7, 101, 18], the longest increasing subsequence is [2, 3, 7, 101], which has a length of 4.
 * advantages: The dynamic programming solution to the LIS problem is efficient and guarantees an optimal solution. It has a time complexity of O(n^2) and is suitable for moderate lengths of input arrays.
 * disadvantages: The time complexity of O(n^2) can be inefficient for large input arrays, as it requires nested loops to fill the `dp` array. Additionally, this approach may not be practical for very large datasets or when the input array has a large number of elements.
 * use cases: The LIS problem has applications in various fields, including bioinformatics (e.g., DNA sequence analysis), data analysis, and pattern recognition. It can be used to find increasing trends in data, analyze sequences, and
 * identify common patterns in datasets.
 * stability: The LIS algorithm is a stable algorithm, as it does not modify the order of the elements in the input array.
 * in-place: The LIS algorithm is not an in-place algorithm, as it requires additional space to store the `dp` array for dynamic programming.
 * optimization: An optimized version of the LIS problem can be implemented using a more efficient approach that utilizes binary search to find the position of elements in the `dp` array, which can reduce the time complexity to O(n log n) while maintaining the same space complexity of O(n).
 * example of optimized longest increasing subsequence:
 * 
 */

const optimizedLongestIncreasingSubsequence = (arr) => {
    const n = arr.length;
    const dp = [];
    for (let i = 0; i < n; i++) {
        let left = 0;
        let right = dp.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (dp[mid] < arr[i]) {
                left = mid + 1;
            }
            else {
                right = mid;
            }
        }
        if (left < dp.length) {
            dp[left] = arr[i];
        } else {
            dp.push(arr[i]);
        }
    }
    return dp.length;
}

const optimizedResult = optimizedLongestIncreasingSubsequence(arr);
console.log(optimizedResult); // 4 (the longest increasing subsequence is [2, 3, 7, 101])

// Time Complexity: O(n log n) and Space Complexity: O(n)

/**
 * explain the above code step by step:
 * 1. The `optimizedLongestIncreasingSubsequence` function takes an array of integers as input and initializes an empty `dp` array that will store the smallest tail of all increasing subsequences found so far.
 * 2. It iterates through each element of the input array and uses binary search to find the appropriate position in the `dp` array where the current element can be placed.
 * 3. If the current element is larger than all elements in the `dp` array, it is appended to the end of the `dp` array. Otherwise, it replaces the existing element at the found position in the `dp` array.
 * 4. After processing all elements, the length of the `dp` array represents the length of the longest increasing subsequence in the input array.
 * The overall time complexity of this algorithm is O(n log n) due to the binary search used to find the position in the `dp` array, and the space complexity is O(n) because of the `dp` array used to store intermediate results.
 * description: The optimized version of the Longest Increasing Subsequence (LIS) problem uses a more efficient approach that utilizes binary search to find the position of elements in the `dp` array, which can reduce the time complexity to O(n log n) while maintaining the same space complexity of O(n). This approach is particularly useful for larger input arrays where the O(n^2) solution may be inefficient.
 * example: Given the array [10, 9, 2, 5, 3, 7, 101, 18], the longest increasing subsequence is [2, 3, 7, 101], which has a length of 4.
 * advantages: The optimized version of the LIS problem is more efficient than the O(n^2) solution for larger input arrays, as it reduces the time complexity to O(n log n) while still guaranteeing an optimal solution.
 * disadvantages: The optimized version of the LIS problem may be more complex to understand and implement compared to the O(n^2) solution, especially for those who are not familiar with binary search. Additionally, it may not be practical for very small input arrays where the O(n^2) solution is sufficient.
 * use cases: The optimized version of the LIS problem is often used in applications where there are large input arrays and performance is a concern. It can be used in various fields such
 * as bioinformatics, data analysis, and pattern recognition to find increasing trends in data, analyze sequences, and identify common patterns in datasets.
 * stability: The optimized version of the LIS algorithm is a stable algorithm, as it does not modify the order of the elements in the input array.
 * in-place: The optimized version of the LIS algorithm is not an in-place algorithm, as it requires additional space to store the `dp` array for dynamic programming.
 * optimization: An optimized version of the LIS problem can be implemented using a more efficient approach that utilizes binary search to find the position of elements in the `dp` array, which can reduce the time complexity to O(n log n) while maintaining the same space complexity of O(n).
 *
 */