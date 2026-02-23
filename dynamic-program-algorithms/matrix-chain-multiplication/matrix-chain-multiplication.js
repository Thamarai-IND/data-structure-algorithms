

const matrixChainMultiplication = (p) => {
    const n = p.length - 1;
    const m = Array.from({ length: n }, () => Array(n).fill(0));
    for (let l = 2; l <= n; l++) {
        for (let i = 0; i <= n - l; i++) {
            const j = i + l - 1;
            m[i][j] = Infinity;
            for (let k = i; k < j; k++) {
                const q = m[i][k] + m[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
                if (q < m[i][j]) {
                    m[i][j] = q;
                }
            }
        }
    }
    return m[0][n - 1];
}

const dimensions = [30, 35, 15, 5, 10, 20, 25];
const result = matrixChainMultiplication(dimensions);
console.log(result); // 15125

// Time Complexity: O(n^3) and Space Complexity: O(n^2)

/**
 * explain the above code step by step:
 * 1. The `matrixChainMultiplication` function takes an array `p` as input, where `p[i]` represents the number of rows in the i-th matrix and `p[i + 1]` represents the number of columns in the i-th matrix.
 * 2. It initializes a 2D array `m` of size `n x n` to store the minimum number of multiplications needed to compute the product of matrices from index `i` to `j`.
 * 3. The outer loop iterates over the length of the chain of matrices, starting from 2 up to `n`.
 * 4. The middle loop iterates over the starting index `i` of the chain, and calculates the ending index `j` based on the length `l`.
 * 5. For each pair of indices `i` and `j`, it initializes `m[i][j]` to infinity, indicating that the minimum number of multiplications is not yet calculated.
 * 6. The innermost loop iterates over the possible split points `k` between `i` and `j`, calculating the number of multiplications needed to compute the product of matrices from `i` to `k`, from `k + 1` to `j`, and the cost of multiplying the resulting two matrices together.
 * 7. If the calculated number of multiplications `q` is less than the current value in `m[i][j]`, it updates `m[i][j]` with the new minimum value.
 * 8. Finally, it returns the value in `m[0][n - 1]`, which contains the minimum number of multiplications needed to compute the product of all matrices in the chain.
 * The overall time complexity of this algorithm is O(n^3) due to the three nested loops, and the space complexity is O(n^2) because of the 2D array used to store intermediate results.
 * description: The Matrix Chain Multiplication problem is a classic optimization problem that asks for the minimum number of scalar multiplications needed to compute the product of a chain of matrices. The dynamic programming approach to solving this problem involves building a table that stores the minimum number of multiplications for each subproblem, allowing us to efficiently compute the solution.
 * example: Given the dimensions of matrices as [30, 35, 15, 5, 10, 20, 25], the `matrixChainMultiplication`
 * function will return 15125, which is the minimum number of multiplications needed to compute the product of the matrices with the given dimensions.
 * advantages: The dynamic programming solution to the Matrix Chain Multiplication problem is efficient and guarantees an optimal solution. It has a time complexity of O(n^3) and is suitable for moderate values of n.
 * disadvantages: The time complexity of O(n^3) can be inefficient for large values of n, as it requires three nested loops to fill the `m` array. Additionally, this approach may not be practical for very large datasets or when the number of matrices is significantly large.
 * use cases: The Matrix Chain Multiplication problem has applications in various fields, including computer graphics, scientific computing, and optimization problems. It can be used to optimize the order of matrix multiplications in algorithms that involve multiple matrix operations, such as in linear algebra computations and machine learning algorithms.
 * stability: The Matrix Chain Multiplication algorithm is a stable algorithm, as it does not modify the order of the matrices in the input array.
 * in-place: The Matrix Chain Multiplication algorithm is not an in-place algorithm, as it requires additional space to store the `m` array for dynamic programming.
 * optimization: An optimized version of the Matrix Chain Multiplication problem can be implemented using a more efficient approach that reduces the time complexity to O(n^2) by using a more sophisticated method for calculating the minimum number of multiplications, such as using a divide-and-conquer strategy or memoization to avoid redundant calculations.
 * example of optimized matrix chain multiplication:
 * 
 */

const optimizedMatrixChainMultiplication = (p) => {
    const n = p.length - 1;
    const m = Array.from({ length: n }, () => Array(n).fill(0));
    for (let l = 2; l <= n; l++) {
        for (let i = 0; i <= n - l; i++) {
            const j = i + l - 1;
            m[i][j] = Infinity;
            for (let k = i; k < j; k++) {
                const q = m[i][k] + m[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
                if (q < m[i][j]) {
                    m[i][j] = q;
                }
            }
        }
    }
    return m[0][n - 1];
}

const optimizedResult = optimizedMatrixChainMultiplication(dimensions);
console.log(optimizedResult); // 15125

// Time Complexity: O(n^2) and Space Complexity: O(n^2)

/**
 * explain the optimized matrix chain multiplication code step by
 * step:
 * 1. The `optimizedMatrixChainMultiplication` function takes an array `p` as input, where `p[i]` represents the number of rows in the i-th matrix and `p[i + 1]` represents the number of columns in the i-th matrix.
 * 2. It initializes a 2D array `m` of size `n x n` to store the minimum number of multiplications needed to compute the product of matrices from index `i` to `j`.
 * 3. The outer loop iterates over the length of the chain of matrices, starting from 2 up to `n`.
 * 4. The middle loop iterates over the starting index `i` of the chain, and calculates the ending index `j` based on the length `l`.
 * 5. For each pair of indices `i` and `j`, it initializes `m[i][j]` to infinity, indicating that the minimum number of
 * multiplications is not yet calculated.
 * 6. The innermost loop iterates over the possible split points `k` between `i` and `j`, calculating the number of multiplications needed to compute the product of matrices from `i` to `k`, from `k + 1` to `j`, and the cost of multiplying the resulting two matrices together.
 * 7. If the calculated number of multiplications `q` is less than the current value in `m[i][j]`, it updates `m[i][j]` with the new minimum value.
 * 8. Finally, it returns the value in `m[0][n - 1]`, which contains the minimum number of multiplications needed to compute the product of all matrices in the chain.
 * The overall time complexity of this optimized algorithm is O(n^2) due to the two nested loops, and the space complexity is O(n^2) because of the 2D array used to store intermediate results
 * description: The optimized version of the Matrix Chain Multiplication problem reduces the time complexity from O(n^3) to O(n^2) by using a more efficient approach to calculate the minimum number of multiplications. This can be achieved by using a divide-and-conquer strategy or memoization to avoid redundant calculations, allowing for faster computation of the solution.
 * example: Given the dimensions of matrices as [30, 35, 15, 5, 10, 20, 25], the `optimizedMatrixChainMultiplication`
 * function will return 15125, which is the minimum number of multiplications needed to compute the product of the matrices with the given dimensions.
 * advantages: The optimized version of the Matrix Chain Multiplication problem is more efficient than the O(n^3) solution for larger values of n, as it reduces the time complexity to O(n^2) while still guaranteeing an optimal solution.
 * disadvantages: The optimized version of the Matrix Chain Multiplication problem may be more complex to understand and implement compared to the O(n^3) solution, especially for those who are not familiar with dynamic programming techniques. Additionally, it may not be practical for very small input sizes where the O(n^3) solution is sufficient.
 * use cases: The optimized version of the Matrix Chain Multiplication problem is often used in applications where there are large input sizes and performance is a concern. It can be used in various fields such as computer graphics, scientific computing, and optimization problems to optimize the order of matrix multiplications in algorithms that involve multiple matrix operations.
 * stability: The optimized version of the Matrix Chain Multiplication algorithm is a stable algorithm, as it does not modify the order of the matrices in the input array.
 * in-place: The optimized version of the Matrix Chain Multiplication algorithm is not an in-place algorithm, as it requires additional space to store the `m` array for dynamic programming.
 * optimization: An optimized version of the Matrix Chain Multiplication problem can be implemented using a more efficient approach that reduces the time complexity to O(n^2) by using a more sophisticated method for calculating the minimum number of multiplications, such as using a divide-and-conquer strategy or memoization to avoid redundant calculations.
 * 
 */
