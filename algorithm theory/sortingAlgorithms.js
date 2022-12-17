function getRandomNum() {
  const max = 999;
  const randomNum = Math.floor(
    (Math.random() < 0.5 ? -1 : 1) * Math.random() * max
  );
  return randomNum;
}

function arrayOfRandomNum() {
  const arr = [];
  const arrayLength = 15;
  for (let i = 0; i < arrayLength; i += 1) {
    arr.push(getRandomNum());
  }
  return arr;
}

function bubbleSort() {
  const arr = arrayOfRandomNum();

  if (arr.length === 0) return;

  for (let i = 0; i < arr.length; i += 1) {
    for (let k = 0; k < arr.length - i - 1; k += 1) {
      if (arr[k] > arr[k + 1]) {
        const temp = arr[k];

        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
      }
    }
  }
  console.log(arr, 'bubble sort');
}
bubbleSort();

function selectionSort() {
  const arr = arrayOfRandomNum();

  for (let i = 0, l = arr.length, k = l - 1; i < k; i += 1) {
    let min = i;
    for (let j = i + 1; j < l; j += 1) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  console.log(arr, 'select sort');
  return arr;
}
selectionSort();

function insertionSort() {
  const arr = arrayOfRandomNum();

  for (let i = 1, l = arr.length; i < l; i += 1) {
    const current = arr[i];
    let k = i;
    while (k > 0 && arr[k - 1] > current) {
      arr[k] = arr[k - 1];
      k -= 1;
    }
    arr[k] = current;
  }
  console.log(arr, 'insertion sort');
  return arr;
}
insertionSort();
