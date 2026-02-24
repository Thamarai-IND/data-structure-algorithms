
const knapsack = (weights, values, capacity) => {
    const n = weights.length;
    const dp = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));
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
console.log(knapsack(weights, values, capacity)); // 220


// Time Complexity: O(n * capacity) and Space Complexity: O(n * capacity)

// description: The 0/1 Knapsack Problem is a classic optimization problem that asks for the maximum value that can be obtained by selecting items with given weights and values, subject to a weight capacity constraint. Each item can either be included (1) or excluded (0) from the knapsack. The dynamic programming approach to solving this problem involves building a table that stores the maximum value for each subproblem, allowing us to efficiently compute the solution.
// example: Given weights [10, 20, 30], values [60, 100, 120], and a capacity of 50, the `knapsack` function will return 220, as the optimal solution is to include the items with weights 20 and 30, which have a total value of 100 + 120 = 220.
// advantages: The dynamic programming solution to the 0/1 Knapsack Problem is efficient and guarantees an optimal solution. It has a time complexity of O(n * capacity) and is suitable for moderate values of n and capacity.
// disadvantages: The space complexity of O(n * capacity) can be inefficient for large values of n and capacity, as it requires storing a large 2D array. Additionally, this approach may not be practical for very large datasets or when the capacity is significantly larger than the number of items.
// use cases: The 0/1 Knapsack Problem has applications in various fields, including resource allocation, budgeting and combinatorial optimization. It can be used to solve problems where there are constraints on resources and a need to maximize value, such as in project selection, cargo loading, and investment decisions.
// stability: The 0/1 Knapsack Problem is not a stable algorithm, as it does not preserve the order of the items in the input arrays.
// in-place: The 0/1 Knapsack Problem is not an in-place algorithm, as it requires additional space to store the `dp` array for dynamic programming.
// optimization: An optimized version of the 0/1 Knapsack Problem can be implemented using a space-efficient approach that only uses a 1D array to store the maximum values for each weight. This can reduce the space complexity to O(capacity) while still maintaining the same time complexity of O(n * capacity).
// example of optimized knapsack problem:
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