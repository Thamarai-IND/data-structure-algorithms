// 0/1 KNAPSACK PROBLEM


const knapsack = (weights, values, capacity) => {
    const n = weights.length;
    const dp = new Array(n + 1).fill(0).map(() => new Array(capacity + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][capacity];
}

const weights = [10, 20, 30];
const values = [60, 100, 120];
const capacity = 50;
const result = knapsack(weights, values, capacity);
console.log(result); // 220

// Time Complexity: O(n * capacity) and Space Complexity: O(n * capacity)

/**
 * explain the above code step by step:
 * 1. The `knapsack` function takes three parameters: an array of weights, an array of values, and the capacity of the knapsack.
 * 2. It initializes a 2D array `dp` of size (n + 1) x (capacity + 1) to store the maximum value that can be obtained for each subproblem.
 * 3. It uses nested loops to fill the `dp` array. The outer loop iterates through each item, and the inner loop iterates through each possible weight from 0 to the given capacity.
 * 4. For each item and weight, it checks if the weight of the current item is less than or equal to the current weight being considered. If it is, it calculates the maximum value by either including the item or excluding it.
 * 5. If the weight of the current item exceeds the current weight being considered, it simply takes the value from the previous row (excluding the item).
 * 6. Finally, it returns the value in the bottom-right cell of the `dp` array, which contains the maximum value that can be obtained with the given weights, values, and capacity.
 * The overall time complexity of this algorithm is O(n * capacity) because it fills a 2D array of size (n + 1) x (capacity + 1). The space complexity is also O(n * capacity) due to the size of the `dp` array.
 * 
 * description: The 0/1 Knapsack Problem is a classic optimization problem that asks for the maximum value that can be obtained by selecting items with given weights and values, subject to a weight capacity constraint. Each item can either be included (1) or excluded (0) from the knapsack. The dynamic programming approach to solving this problem involves building a table that stores the maximum value for each subproblem, allowing us to efficiently compute the solution.
 * example: Given weights [10, 20, 30], values [60, 100, 120], and a capacity of 50, the `knapsack`
 * function will return 220, as the optimal solution is to include the items with weights 20 and 30, which have a total value of 100 + 120 = 220.
 * advantages: The dynamic programming solution to the 0/1 Knapsack Problem is efficient and guarantees an optimal solution. It has a time complexity of O(n * capacity) and is suitable for moderate values of n and capacity.
 * disadvantages: The space complexity of O(n * capacity) can be inefficient for large values of n and capacity, as it requires storing a large 2D array. Additionally, this approach may not be practical for very large datasets or when the capacity is significantly larger than the number of items.
 * use cases: The 0/1 Knapsack Problem has applications in various fields, including resource allocation, budgeting, and combinatorial optimization. It can be used to solve problems where there are constraints on resources and a need to maximize value, such as in project selection, cargo loading, and investment decisions.
 * stability: The 0/1 Knapsack Problem is not a stable algorithm, as it does not preserve the order of the items in the input arrays.
 * in-place: The 0/1 Knapsack Problem is not an in-place algorithm, as it requires additional space to store the `dp` array for dynamic programming.
 * optimization: An optimized version of the 0/1 Knapsack Problem can be implemented using a space-efficient approach that only uses a 1D array to store the maximum values for each weight. This can reduce the space complexity to O(capacity) while still maintaining the same time complexity of O(n * capacity).
 * example of optimized knapsack problem:
 * 
 */

const optimizedKnapsack = (weights, values, capacity) => {
    const n = weights.length;
    const dp = new Array(capacity + 1).fill(0);
    for (let i = 0; i < n; i++) {
        for (let w = capacity; w >= weights[i]; w--) {
            dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
        }
    }
    return dp[capacity];
}

const optimizedResult = optimizedKnapsack(weights, values, capacity);
console.log(optimizedResult); // 220

// Time Complexity: O(n * capacity) and Space Complexity: O(capacity)

/**
 * explain the optimized knapsack code step by
 * step:
 * 1. The `optimizedKnapsack` function takes three parameters: an array of weights, an array of values, and the capacity of the knapsack.
 * 2. It initializes a 1D array `dp` of size (capacity + 1) to store the maximum value that can be obtained for each weight from 0 to the given capacity.
 * 3. It uses nested loops to fill the `dp` array. The outer loop iterates through each item, and the inner loop iterates through each possible weight from the given capacity down to the weight of the current item.
 * 4. For each item and weight, it updates the `dp` array by calculating the maximum value by either including the item or excluding it. This is done in reverse order to ensure that we are using the results from the previous iteration correctly.
 * 5. Finally, it returns the value in the last cell of the `dp` array, which contains the maximum
 * value that can be obtained with the given weights, values, and capacity.
 * The overall time complexity of this optimized algorithm is O(n * capacity) because it iterates through each item and each weight up to the given capacity. The space complexity is O(capacity) because it only uses a 1D array to store the maximum values for each weight, reducing the space requirement compared to the original 2D array approach.
 * 
 * description: The optimized version of the 0/1 Knapsack Problem uses a space-efficient approach that only requires a 1D array to store the maximum values for each weight. This method maintains the same time complexity of O(n * capacity) while significantly reducing the space complexity to O(capacity), making it more practical for larger datasets or when the capacity is significantly larger than the number of items.
 * example: Given weights [10, 20, 30], values [60, 100, 120], and a capacity of 50, the `optimizedKnapsack` function will return 220, as the
 * optimal solution is to include the items with weights 20 and 30, which have a total value of 100 + 120 = 220.
 * advantages: The optimized version of the 0/1 Knapsack Problem has a reduced space complexity of O(capacity), making it more efficient for larger values of capacity compared to the original version that uses a 2D array. It still guarantees an optimal solution with a time complexity of O(n * capacity).
 * disadvantages: The optimized version may be less intuitive for those familiar with the traditional 2D array approach, as it does not store the maximum values for each subproblem in a tabular format. Additionally, it still has a time complexity of O(n * capacity), which may not be optimal for very large values of n and capacity.
 * use cases: The optimized version of the 0/1 Knapsack Problem can be used in various applications where there are constraints on resources and a need to maximize value, such as in project selection, cargo loading, and investment decisions. It is particularly useful when the capacity is significantly larger than the number of items, as it reduces the space requirements compared to the original version.
 * stability: The optimized version of the 0/1 Knapsack Problem is not a stable algorithm, as it does not preserve the order of the items in the input arrays.
 * in-place: The optimized version of the 0/1 Knapsack Problem is not an in-place algorithm, as it requires additional space to store the `dp` array for dynamic programming.
 * optimization: An optimized version of the 0/1 Knapsack Problem can be implemented using a space-efficient approach that only uses a 1D array to store the maximum values for each weight. This can reduce the space complexity to O(capacity) while still maintaining the same time complexity of O(n * capacity).
 * 
 */