const unsortedList = [9, 4, 7, 2, 1, 5, 8, 3, 6];
const sortedList = quick_Sort(unsortedList);

function quick_Sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  console.log(arr[arr.length - 1]);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quick_Sort(left), pivot, ...quick_Sort(right)];
}

console.log(sortedList);
