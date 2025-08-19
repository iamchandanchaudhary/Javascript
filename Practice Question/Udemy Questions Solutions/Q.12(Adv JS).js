// Task 1: Simulating Asynchronous Behavior
function simulateAsyncTask() {
  console.log("Task started");

  setTimeout(() => {
    console.log("Task finished");
  }, 2000);
}

simulateAsyncTask();



// Task 2: Simulate Multiple Async Tasks with Different Delays
function simulateMultipleTasks() {
  setTimeout(() => {
    console.log("Task 1 finished");
  }, 1000); // 1 second

  setTimeout(() => {
    console.log("Task 2 finished");
  }, 2000); // 2 seconds

  setTimeout(() => {
    console.log("Task 3 finished");
  }, 3000); // 3 seconds
}

simulateMultipleTasks();



// Task 3: Async Task with Callback Function
function fetchDataWithCallback(callback) {
  console.log("Fetching data...");

  setTimeout(() => {
    const data = "Fetched data";
    callback(data); // invoke callback after async operation
  }, 2000);
}

fetchDataWithCallback((result) => {
  console.log("Callback received:", result);
});
