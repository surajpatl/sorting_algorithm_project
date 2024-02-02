
// Bubble_sort_Algo
function bubbleSort(arr) {
  const swaps = [];
  let swapped;

  do {
    swapped = false;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        swapped = true;
        swaps.push([i - 1, i]);
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      }
    }
  } while (swapped);
  console.log(arr);
  return swaps;
}

// insertionSort_algo
function insertionSort(arr) {
  const swaps = [];

  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentElement) {
      swaps.push([j, j + 1]);
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;
  }

  return swaps;
}

// selectionSort_algo
function selectionSort(arr) {
  const swaps = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      swaps.push([i, minIndex]);
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return swaps;
}


// Merge-sort
function mergeSort(arr) {
  const swaps = [];
  const n = arr.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {

    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;

      while (j >= gap && arr[j - gap] > temp) {
        swaps.push([j - gap, j]);
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }
  }

  console.log(arr);
  return swaps;
}


//quickSort_alogo
function quickSort(arr, left = 0, right = arr.length - 1, swaps = []) {
  if (left < right) {
    const partitionIndex = partition(arr, left, right, swaps);

    quickSort(arr, left, partitionIndex - 1, swaps);
    quickSort(arr, partitionIndex + 1, right, swaps);
  }

  return swaps;
}

function partition(arr, left, right, swaps) {
  const pivotValue = arr[right];
  let pivotIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swaps.push([i, pivotIndex]);
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  swaps.push([pivotIndex, right]);
  [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];

  return pivotIndex;
}









//Shell_sort_algo

function shellSort(arr) {
  const swaps = [];
  const n = arr.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {

    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;

      while (j >= gap && arr[j - gap] > temp) {
        swaps.push([j - gap, j]);
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }
  }

  console.log(arr);
  return swaps;
}




