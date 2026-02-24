// edit - distance (levenshtein distance)

const editDistance = (s1, s2) => {
  const m = s1.length;
  const n = s2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[m][n];
};

const s1 = "kitten";
const s2 = "sitting";
console.log(editDistance(s1, s2)); // 3

// Time Complexity: O(m*n)
// Space Complexity: O(m*n)

// description: The edit distance (also known as Levenshtein distance) is a measure of the difference between two strings. It is defined as the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one string into the other. The algorithm uses dynamic programming to build a matrix that represents the edit distances between all prefixes of the two strings, allowing it to efficiently compute the final edit distance.
// example: Given two strings "kitten" and "sitting", the edit distance is 3, as we can substitute 'k' with 's', substitute 'e' with 'i', and insert 'g' at the end of "kitten" to get "sitting".
// advantages: The edit distance algorithm is a powerful tool for comparing strings and can be used in various applications such as spell checking, DNA sequence analysis, and natural language processing. It provides a quantitative measure of similarity between two strings.
// disadvantages: The time and space complexity of O(m*n) can be prohibitive for long strings, making it less efficient for large datasets. However, there are optimized versions of the algorithm that can reduce space complexity to O(min(m, n)).
// use cases: The edit distance algorithm is commonly used in applications that require string comparison, such as spell checkers, plagiarism detection, and DNA sequence analysis. It can also be used in natural language processing tasks to measure the similarity between words or sentences.
// optimization: To optimize space complexity, we can use a rolling array technique that only keeps track of the current and previous rows of the DP matrix, reducing space complexity to O(min(m, n)). This is particularly beneficial when one string is significantly shorter than the other.
const optimizedEditDistance = (s1, s2) => {
  const m = s1.length;
  const n = s2.length;
  const dp = Array(n + 1).fill(0);
  
  for (let j = 0; j <= n; j++) {
    dp[j] = j;
  }

  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const temp = dp[j];
      if (s1[i - 1] === s2[j - 1]) {
        dp[j] = prev;
      } else {
        dp[j] = Math.min(dp[j], dp[j - 1], prev) + 1;
      }
      prev = temp;
    }
  }

  return dp[n];
};

console.log(optimizedEditDistance(s1, s2)); // 3
