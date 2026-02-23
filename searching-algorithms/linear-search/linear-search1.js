
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const arr = [5, 3, 2, 4, 1];
const target = 4;
const result = linearSearch(arr, target);
console.log(result); // 3

// Time Complexity: O(n) and Space Complexity: O(1)

/**
 * explain the above code step by step:
 * 1. The `linearSearch` function takes an array and a target value as input.
 * 2. It iterates through the array using a for loop, checking if each element is equal to the target value.
 * 3. If a match is found, the function returns the index of the matching element.
 * 4. If the loop completes without finding a match, the function returns -1 to indicate that the target value is not present in the array.
 * 5. Finally, the result of the search is printed to the console.
 * The overall time complexity of this algorithm is O(n) because in the worst case, it may have to check every element in the array. The space complexity is O(1) because it uses a constant amount of space for the index variable and does not require any additional data structures.
 * 
 * description: Linear Search is a simple search algorithm that checks each element of the array sequentially until it finds the target value or reaches the end of the array. It is straightforward and easy to implement but can be inefficient for large datasets, as it has a time complexity of O(n).
 * example: Given an array [5, 3, 2, 4, 1] and a target value of 4, the linear search algorithm will return the index 3, as the value 4 is located at that index in the array.
 * advantages: Linear Search is easy to understand and implement. It does not require the array to be sorted, making it suitable for unsorted datasets.
 * disadvantages: Linear Search can be inefficient for large datasets, as it has a time complexity of O(n). It may require checking every element in the worst case, which can lead to long search times.
 * use cases: Linear Search is often used for small datasets or when the dataset is unsorted. It can also be used when the target value is expected to be near the beginning of the array, as it may find the target more quickly in such cases.
 * stability: Linear Search is a stable search algorithm, as it does not modify the order of the elements in the array.
 * in-place: Linear Search is an in-place search algorithm, as it does not require additional space for another array to perform the search.
 * optimization: An optimized version of Linear Search can be implemented by using a sentinel value at the end of the array to avoid the need for a boundary check in each iteration. This can reduce the number of comparisons and improve performance in certain cases.
 * example of optimized linear search:
 * 
 */

const optimizedLinearSearch = (arr, target) => {
    const n = arr.length;
    arr.push(target);
    let i = 0;
    while (arr[i] !== target) {
        i++;
    }
    arr.pop();
    return i < n ? i : -1;
}

const optimizedResult = optimizedLinearSearch(arr, target);
console.log(optimizedResult); // 3

// Time Complexity: O(n) and Space Complexity: O(1)

/**
 * explain the above code step by step:
 * 1. The `optimizedLinearSearch` function takes an array and a target value as input.
 * 2. It first pushes the target value to the end of the array, acting as a sentinel to avoid the need for a boundary check in each iteration.
 * 3. It initializes an index variable `i` to 0 and uses a while loop to check if the current element at index `i` is equal to the target value.
 * 4. If a match is found, the loop breaks, and the function checks if the index `i` is less than the original length of the array (before the target was added). If it is, it returns the index; otherwise, it returns -1 to indicate that the target value is not present in the original array.
 * 5. Finally, the result of the optimized search is printed to the console.
 * The overall time complexity of this optimized algorithm remains O(n) because in the worst case, it may still have to check every element in the array. However, it can reduce the number of comparisons in certain cases by using a sentinel value. The space complexity is O(1) because it uses a constant amount of space for the index variable and does not require any
 * additional data structures, although it does temporarily modify the input array by adding and removing the target value.
 * 
 * Note: The optimized version of Linear Search can be more efficient in cases where the target value is expected to be near the end of the array, as it can find the target more quickly by using the sentinel value. However, it modifies the input array, which may not be desirable in all cases. Therefore, it should be used with caution and only when the benefits outweigh the drawbacks.
 * 
 * Overall, Linear Search is a simple and straightforward search algorithm that can be useful in certain scenarios, but it may not be the best choice for large datasets or when performance is a concern. In such cases, more efficient search algorithms like Binary Search (for sorted arrays) or Hashing (for unsorted datasets) may be more appropriate.
 * 
 * Please refer to the respective search algorithm files for specific implementations and details of other search algorithms.
 */