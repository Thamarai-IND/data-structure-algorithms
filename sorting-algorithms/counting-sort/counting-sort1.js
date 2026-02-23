
const countingSort = (arr) => {
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    let index = 0;
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            arr[index++] = i;
            count[i]--;
        }
    }
    return arr;
}

const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // [1, 2, 2, 3, 3, 4, 8]

// Time Complexity: O(n + k) where n is the number of elements in the input array and k is the range of the input values
// Space Complexity: O(k) where k is the range of the input values

/**
 * explain the above code step by step:
 * 1. The `countingSort` function takes an array as input. It first finds the maximum value in the array to determine the size of the count array.
 * 2. It initializes a count array of size `max + 1` with all elements set to 0.
 * 3. It iterates through the input array and increments the count of each element in the count array.
 * 4. It then iterates through the count array and for each element with a count greater than 0, it places that element in the input array `index` number of times, decrementing the count each time.
 * 5. Finally, it returns the sorted input array.
 * The overall time complexity is O(n + k) where n is the number of elements in the input array and k is the range of the input values. The space complexity is O(k) where k is the range of the input values.
 */

/**
 * description: Counting Sort is a non-comparison-based sorting algorithm that sorts elements by counting the occurrences of each unique element in the input array. It then uses this count to determine the position of each element in the sorted output array. This algorithm is efficient for sorting integers or objects that can be mapped to integers, especially when the range of input values is not significantly larger than the number of elements to be sorted.
 * example: Given an array [4, 2, 2, 8, 3, 3, 1], the counting sort algorithm will sort it to [1, 2, 2, 3, 3, 4, 8].
 * advantages: Counting Sort has a time complexity of O(n + k) where n is the number of elements in the input array and k is the range of the input values. It is also a stable sorting algorithm, meaning that it preserves the relative order of equal elements.
 * disadvantages: Counting Sort is not suitable for sorting large datasets with a wide range of input values, as it can lead to high space complexity. Additionally, it is not a comparison-based sorting algorithm and cannot be used to sort non-integer data types without additional mapping.
 * use cases: Counting Sort is often used for sorting integers or objects that can be mapped to integers, especially when the range of input values is not significantly larger than the
 */

/** number of elements to be sorted. It is also used in applications where stability is required, as it is a stable sorting algorithm.
 * stability: Counting Sort is a stable sorting algorithm, meaning that it preserves the relative order of equal elements.
 * in-place: Counting Sort is not an in-place sorting algorithm, as it requires additional space for the count array and the output array.
 * optimization: An optimized version of Counting Sort can be implemented by using a cumulative count array to directly place elements in their correct positions in the output array. This can reduce the time complexity of placing elements from O(n + k) to O(n).
 * example of optimized counting sort:
 * 
 */

const optimizedCountingSort = (arr) => {
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
    const output = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        output[--count[arr[i]]] = arr[i];
    }
    return output;
}

const sortedArrOpt = optimizedCountingSort(arr);
console.log(sortedArrOpt); // [1, 2, 2, 3, 3, 4, 8]

// Time Complexity: O(n + k) where n is the number of elements in the input array and k is the range of the input values
// Space Complexity: O(n + k) where n is the number of elements in the input array and k is the range of the input values

/**
 * explain the optimized counting sort code step by step:
 * 1. The `optimizedCountingSort` function takes an array as input. It first finds the maximum value in the array to determine the size of the count array.
 * 2. It initializes a count array of size `max + 1` with all elements set to 0.
 * 3. It iterates through the input array and increments the count of each element in the count array.
 * 4. It then iterates through the count array and updates each element to be the cumulative count of the previous elements. This allows us to directly place elements in their correct positions in the output array.
 * 5. It initializes an output array of the same length as the input array.
 * 6. It iterates through the input array in reverse order and places each element in its correct position in the output array using the cumulative count from the count array. The count is decremented each time an element is placed to handle duplicate values correctly.
 * 7. Finally, it returns the sorted output array.
 * The overall time complexity is O(n + k) where n is the number of elements in the input array and k is the range of the input values. The space complexity is O(n + k) where n is the number of elements in the input array and k is the range of the input values due to the additional output array and count array.
 * 
 */

