

const activitySelection = (activities) => {
  // Step 1: Sort the activities based on their finish times
  activities.sort((a, b) => a.finish - b.finish);
    const result = [];
    let lastFinishTime = 0;
    // Step 2: Iterate through the sorted activities and select the ones that are compatible with the previously selected activity
    for (let activity of activities) {
        if (activity.start >= lastFinishTime) {
            result.push(activity);
            lastFinishTime = activity.finish;

        }
    }
    return result;
}

const activities = [
    { start: 1, finish: 3 },
    { start: 2, finish: 5 },
    { start: 4, finish: 6 },
    { start: 6, finish: 7 },
    { start: 5, finish: 8 },
    { start: 7, finish: 9 }
];

console.log(activitySelection(activities)); // [ { start: 1, finish: 3 }, { start: 4, finish: 6 }, { start: 6, finish: 7 }, { start: 7, finish: 9 } ]

// Time Complexity: O(n log n) due to the sorting step, where n is the number of activities. The iteration through the sorted activities takes O(n) time, resulting in an overall time complexity of O(n log n).
// Space Complexity: O(n) for the result array that stores the selected activities. The sorting step may also require additional space depending on the sorting algorithm used, but it can be considered O(1) if an in-place sorting algorithm is used.

// description: The Activity Selection Algorithm is a greedy algorithm used to select the maximum number of activities that can be performed by a single person, given their start and finish times. The algorithm sorts the activities based on their finish times and iteratively selects activities that are compatible with the previously selected activity. This approach ensures that the maximum number of non-overlapping activities is selected, making it an efficient solution for scheduling problems.
// example: Given a list of activities with their start and finish times, the algorithm will select the maximum number of activities that can be performed without overlap. For example, given the activities [{ start: 1, finish: 3 }, { start: 2, finish: 5 }, { start: 4, finish: 6 }, { start: 6, finish: 7 }, { start: 5, finish: 8 }, { start: 7, finish: 9 }], the algorithm will select [{ start: 1, finish: 3 }, { start: 4, finish: 6 }, { start: 6, finish: 7 }, { start: 7, finish: 9 }] as the maximum set of non-overlapping activities.
// advantages: The Activity Selection Algorithm is efficient for solving scheduling problems where the goal is to maximize the number of non-overlapping activities. It has a time complexity of O(n log n)
// disadvantages: The algorithm assumes that the activities are sorted by their finish times, which may not always be the case. Additionally, it does not consider other factors such as the importance or value of the activities, and it may not be suitable for all scheduling scenarios.
/** * step 1: Sort the activities based on their finish times. This ensures that we always consider the activity that finishes earliest first, which is crucial for maximizing the number of non-overlapping activities.
 * step 2: Initialize an empty result array to store the selected activities and a variable lastFinishTime to keep track of the finish time of the last selected activity. Set lastFinishTime to 0 initially.
 * step 3: Iterate through the sorted activities and for each activity, check if its start time is greater than or equal to lastFinishTime. If it is, it means that this activity can be performed after the last selected activity without overlap.
 * step 4: If the activity is compatible, add it to the result array and update lastFinishTime to the finish time of the current activity. This ensures that we are always comparing against the finish time of the most recently selected activity.
 * step 5: Continue this process until all activities have been considered. The final output will be an array containing the maximum set of non-overlapping activities that can be performed by a single person.
 * step 6: The time complexity of the Activity Selection Algorithm is O(n log n) due to the sorting step, where n is the number of activities. The iteration through the sorted activities takes O(n) time, resulting in an overall time complexity of O(n log n). The space complexity is O(n) for the result array that stores the selected activities. The sorting step may also require additional space depending on the sorting algorithm used, but it can be considered O(1) if an in-place sorting algorithm is used.
 * step 7: In summary, the Activity Selection Algorithm is a greedy approach to solving scheduling problems by selecting the maximum number of non-overlapping activities based on their finish times. It is efficient and widely used in various applications where scheduling and resource allocation are important.
 */