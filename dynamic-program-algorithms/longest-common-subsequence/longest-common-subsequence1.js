
const longestCommonSubsequence = (str1, str2) => {
    const m = str1.length;
    const n = str2.length;

    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}


const str1 = "AGGTAB";
const str2 = "GXTXAYB";
const result = longestCommonSubsequence(str1, str2);
console.log(result); // 4


// Time Complexity: O(m * n) and Space Complexity: O(m * n)

/**
 * explain the above code step by step:
 * 1. The `longestCommonSubsequence` function takes two strings as input and initializes a 2D array `dp` to store the lengths of the longest common subsequence at each point.
 * 2. It uses nested loops to fill the `dp` array. The outer loop iterates through each character of the first string, and the inner loop iterates through each character of the second string.
 * 3. If the characters at the current indices of both strings match, it increments the value from the previous diagonal cell in the `dp` array by 1.
 * 4. If the characters do not match, it takes the maximum value from either the left cell or the top cell in the `dp` array.
 * 5. Finally, it returns the value in the bottom-right cell of the `dp` array, which contains the length of the longest common subsequence.
 * The overall time complexity of this algorithm is O(m * n) because it fills a 2D array of size (m + 1) x (n + 1). The space complexity is also O(m * n) due to the size of the `dp`array.
 * description: The Longest Common Subsequence (LCS) problem is a classic problem in computer science that asks for the length of the longest subsequence common to two sequences. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements. The dynamic programming approach to solving the LCS problem involves building a table that stores the lengths of the longest common subsequence at each point, allowing us to efficiently compute the solution.
 * example: Given two strings "AGGTAB" and "GXTXAYB", the longest common subsequence is "GTAB", which has a length of 4.
 * advantages: The dynamic programming solution to the LCS problem is efficient and guarantees an optimal solution. It has a time complexity of O(m * n) and is suitable for moderate lengths of input strings.
 * disadvantages: The space complexity of O(m * n) can be inefficient for large input strings, as it requires storing a large 2D array. Additionally, this approach may not be practical for very large datasets or when the input strings have significantly different lengths.
 * use cases: The LCS problem has applications in various fields, including bioinformatics (e.g., DNA sequence analysis), text comparison, and version control systems. It can be used to find similarities between sequences, compare files, and identify common patterns in data.
 * stability: The LCS algorithm is a stable algorithm, as it does not modify the order of the characters in the input strings.
 * in-place: The LCS algorithm is not an in-place algorithm, as it requires additional space to store the `dp` array for dynamic programming.
 * optimization: An optimized version of the LCS problem can be implemented using a space-efficient approach that only uses a 1D array to store the lengths of the longest common subsequence at each point. This can reduce the space complexity to O(min(m, n)) while still maintaining the same time complexity of O(m * n).
 * example of optimized longest common subsequence:
 * 
 */

const optimizedLongestCommonSubsequence = (str1, str2) => {
    const m = str1.length;
    const n = str2.length;
    const dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= m; i++) {
        let prev = 0;
        for (let j = 1; j <= n; j++) {
            const temp = dp[j];
            if (str1[i - 1] === str2[j - 1]) {
                dp[j] = prev + 1;
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1]);
            }
            prev = temp;
        }
    }
    return dp[n];
}

const optimizedResult = optimizedLongestCommonSubsequence(str1, str2);
console.log(optimizedResult); // 4

// Time Complexity: O(m * n) and Space Complexity: O(min(m, n))

/**
 * explain the optimized longest common subsequence code step by step:
 * 1. The `optimizedLongestCommonSubsequence` function takes two strings as input and initializes a 1D array `dp` to store the lengths of the longest common subsequence at each point.
 * 2. It uses nested loops to fill the `dp` array. The outer loop iterates through each character of the first string, and the inner loop iterates through each character of the second string.
 * 3. It uses a variable `prev` to keep track of the value from the previous iteration of the inner loop, which corresponds to the diagonal cell in the original 2D `dp` array.
 * 4. If the characters at the current indices of both strings match, it updates the current cell in the `dp` array to be `prev + 1`.
 * 5. If the characters do not match, it takes the maximum value from either the current cell or the left cell in the `dp` array.
 * 6. Finally, it returns the value in the last cell of the `dp` array, which contains the length of the longest common subsequence.
 * The overall time complexity of this algorithm is O(m * n) because it iterates through each character of both strings. The space complexity is O(min(m, n)) because it only uses a 1D array of size equal to the length of the shorter string.
 * 
 * description: The optimized version of the Longest Common Subsequence (LCS) problem generates the length of the longest common subsequence using a space-efficient approach that only stores the lengths at each point in a 1D array. This method is efficient and has a time complexity of O(m * n) and a space complexity of O(min(m, n)).
 * example: Given two strings "AGGTAB" and "GXTXAYB", the longest common subsequence is "GTAB", which has a length of 4.
 * advantages: The optimized version of the LCS problem has a linear space complexity of O(min(m, n)), making it more efficient for large input strings compared to the original version that uses a 2D array to store all lengths of common subsequences.
 * disadvantages: The optimized version may be less intuitive for those familiar with the traditional 2D array approach to the LCS problem, as it does not store all lengths of common subsequences in a table. Additionally, it still has a time complexity of O(m * n), which may not be optimal for very large input strings.
 * use cases: The optimized version of the LCS problem can be used in applications where memory efficiency is important, such as in embedded systems or when comparing large strings. It can also be used in educational contexts to demonstrate how to optimize algorithms by reducing space complexity.
 * stability: The `optimizedLongestCommonSubsequence` function is a stable algorithm, as it does not modify the order of the characters in the input strings.
 * in-place: The `optimizedLongestCommonSubsequence` function is an in-place algorithm, as it does not require additional space for another array to store the lengths of common subsequences, and it only uses a constant amount of space to keep track of the previous value.
 * optimization: An optimized version of the LCS problem can be implemented using a space-efficient approach that only uses a 1D array to store the lengths of the longest common subsequence at each point. This can reduce the space complexity to O(min(m, n)) while still maintaining the same time complexity of O(m * n).
 * 
 * 
 */