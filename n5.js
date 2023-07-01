function measureExecutionTime(func) {
  const startTime = performance.now();
  func();
  const endTime = performance.now();
  const executionTime = endTime - startTime;
  console.log(`Function executed in ${executionTime} milliseconds.`);
}

function myFunction() {
  for (let i = 0; i < 1000000; i++) {}
}

measureExecutionTime(myFunction);
