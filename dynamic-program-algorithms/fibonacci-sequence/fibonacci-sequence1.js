
const fibonacciSequence = (n) => {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

const n = 10;
const result = fibonacciSequence(n);
console.log(result); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Time Complexity: O(n) and Space Complexity: O(n)

/**
 * explain the above code step by step:
 * 1. The `fibonacciSequence` function takes an integer `n` as input, which represents the number of Fibonacci numbers to generate.
 * 2. It initializes an array `fib` with the first two Fibonacci numbers, 0 and 1.
 * 3. It uses a for loop starting from index 2 up to `n - 1` to calculate the Fibonacci numbers iteratively. Each Fibonacci number is calculated as the sum of the two preceding numbers in the sequence.
 * 4. The calculated Fibonacci numbers are stored in the `fib` array at the corresponding index.
 * 5. Finally, the function returns a slice of the `fib` array containing the first `n` Fibonacci numbers.
 * The overall time complexity of this algorithm is O(n) because it calculates each Fibonacci number up to `n` once. The space complexity is also O(n) because it stores the Fibonacci numbers in an array of size `n`.
 * 
 * description: The Fibonacci Sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. The `fibonacciSequence`
 * function generates the first `n` numbers in the Fibonacci sequence using an iterative approach. This method is efficient and has a linear time complexity of O(n) and a space complexity of O(n) due to the array used to store the Fibonacci numbers.
 * example: Given an input of 10, the `fibonacciSequence` function will return the first 10 numbers in the Fibonacci sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].
 * advantages: The iterative approach to generating the Fibonacci sequence is efficient and straightforward. It has a linear time complexity of O(n) and is easy to understand and implement.
 * disadvantages: The space complexity of O(n) can be inefficient for large values of `n`, as it requires storing all Fibonacci numbers in an array. Additionally, this approach does not take advantage of the mathematical properties of the Fibonacci sequence, such as using matrix exponentiation or Binet's formula, which can compute Fibonacci numbers in logarithmic time.
 * use cases: The Fibonacci sequence is widely used in various applications, including algorithm design, mathematical modeling, and computer science. It can be used to solve problems related to recursion, dynamic programming, and combinatorial mathematics. The `fibonacciSequence` function can be used in educational contexts to demonstrate the concept of the Fibonacci sequence and its properties.
 * stability: The `fibonacciSequence` function is a stable algorithm, as it does not modify the order of the elements in the output array.
 * in-place: The `fibonacciSequence` function is not an in-place algorithm, as it requires additional space to store the Fibonacci numbers in an array.
 * optimization: An optimized version of the Fibonacci sequence can be implemented using memoization or dynamic programming to reduce the space complexity to O(1) by only storing the last two Fibonacci numbers at any given time. This can significantly improve performance for large values of `n`.
 * example of optimized Fibonacci sequence:
 * 
 */

const optimizedFibonacciSequence = (n) => {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        const nextFib = fib[0] + fib[1];
        fib[0] = fib[1];
        fib[1] = nextFib;
    }
    return fib.slice(0, n);
}

const optimizedResult = optimizedFibonacciSequence(n);
console.log(optimizedResult); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Time Complexity: O(n) and Space Complexity: O(1)

/**
 * explain the above code step by step:
 * 1. The `optimizedFibonacciSequence` function takes an integer `n` as input, which represents the number of Fibonacci numbers to generate.
 * 2. It handles the base cases for `n` equal to 0 and 1, returning the appropriate Fibonacci numbers.
 * 3. It initializes an array `fib` with the first two Fibonacci numbers, 0 and 1.
 * 4. It uses a for loop starting from index 2 up to `n - 1` to calculate the Fibonacci numbers iteratively. Instead of storing all Fibonacci numbers in an array, it only keeps track of the last two Fibonacci numbers at any given time.
 * 5. The next Fibonacci number is calculated as the sum of the two preceding numbers, and the previous two numbers are updated accordingly.
 * 6. Finally, the function returns a slice of the `fib` array containing the first `n` Fibonacci numbers.
 * The overall time complexity of this algorithm is O(n) because it calculates each Fibonacci number up to `n` once. The space complexity is O(1) because it only uses a constant amount of space to store the last two Fibonacci numbers, regardless of the value of `n`.
 * 
 * description: The optimized version of the Fibonacci sequence generates the first `n` numbers in the Fibonacci sequence using an iterative approach that only stores the last two Fibonacci numbers at any given time. This method is efficient and has a linear time complexity of O(n) and a constant space complexity of O(1).
 * example: Given an input of 10, the `optimizedFibonacciSequence`
 * function will return the first 10 numbers in the Fibonacci sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].
 * advantages: The optimized version of the Fibonacci sequence has a linear time complexity of O(n) and a constant space complexity of O(1), making it more efficient for large values of `n` compared to the original version that uses an array to store all Fibonacci numbers.
 * disadvantages: The optimized version may be less intuitive for those familiar with the traditional definition of the Fibonacci sequence, as it does not store all Fibonacci numbers in an array. Additionally, it still has a linear time complexity of O(n), which may not be optimal for very large values of `n`.
 * use cases: The optimized version of the Fibonacci sequence can be used in applications where memory efficiency is important, such as in embedded systems or when generating a large number of Fibonacci numbers. It can also be used in educational contexts to demonstrate how to optimize algorithms by reducing space complexity.
 * stability: The `optimizedFibonacciSequence` function is a stable algorithm, as it does not modify the order of the elements in the
 * output array.
 * in-place: The `optimizedFibonacciSequence` function is an in-place algorithm, as it does not require additional space for another array to store the Fibonacci numbers, and it only uses a constant amount of space to keep track of the last two Fibonacci numbers.
 * optimization: An optimized version of the Fibonacci sequence can be implemented using matrix exponentiation or Binet's formula to compute Fibonacci numbers in logarithmic time, which can significantly improve performance for large values of `n`.
 * 
 */