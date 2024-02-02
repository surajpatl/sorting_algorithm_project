
const arr = [];
n=5;
function changeArraySize() {
  const arraySizeSelect = document.getElementById("arraySize");
  const selectedSize = parseInt(arraySizeSelect.value, 0);
  n = selectedSize;
  init();
}
// randomize Array(init())
function init() {
  arr.length = 0;
  for (let i = 0; i < n; i++) {
    let num = Math.floor(Math.random() * 10) + 1;
    arr[i] = num;
  }
  showBars();
}

const sortingAlgorithms = [
  "bubbleSort",
  "insertionSort",
  "selectionSort",
  "quickSort",
  "mergeSort",
  "shellSort",
];

sortingAlgorithms.forEach((algorithm) => {
  const button = document.querySelector(`.${algorithm}`);
  if (button) {
    button.addEventListener("click", () => {
      sortingAlgorithms.forEach((otherAlgorithm) => {
        const otherButton = document.querySelector(`.${otherAlgorithm}`);
        if (otherButton !== button) {
          otherButton.disabled = true;
        }
      });
      const copy = [...arr];
      const swaps = window[algorithm](copy);
      animate(swaps);
      setTimeout(() => {
        sortingAlgorithms.forEach((otherAlgorithm) => {
          const otherButton = document.querySelector(`.${otherAlgorithm}`);
          otherButton.disabled = false;
        });
      }, 5000); 
    });
  }
});


document.querySelector(".randomizeArray").addEventListener("click", init);

// let bubbleSortBtn = document.querySelector(".bubbleSort");
// bubbleSortBtn.addEventListener("click", () => {
//   const copy = [...arr];
//   const swaps = bubbleSort(copy);
//   animate(swaps);
// });

// let insertionSortBtn = document.querySelector(".insertionSort");
// insertionSortBtn.addEventListener("click", () => {
//   const copy = [...arr];
//   const swaps = insertionSort(copy);
//   animate(swaps);
// });

// let selectionSortBtn = document.querySelector(".selectionSort");
// selectionSortBtn.addEventListener("click", () => {
//   const copy = [...arr];
//   const swaps = selectionSort(copy);
//   animate(swaps);
// });

// let quickSortBtn = document.querySelector(".quickSort");
// quickSortBtn.addEventListener("click", () => {
//   const copy = [...arr];
//   const swaps = quickSort(copy);
//   animate(swaps);
// });

// let mergeSortBtn = document.querySelector(".mergeSort");
//   mergeSortBtn.addEventListener("click", () => {
//     const copy = [...arr];
//     const swaps = shellSort(copy);
//     animate(swaps);
// });

// let shellSortBtn = document.querySelector(".shellSort");
//   shellSortBtn.addEventListener("click", () => {
//   const copy = [...arr];
//   const swaps = shellSort(copy);
//   animate(swaps);
// });

function animate(swaps) {
  if (swaps.length == 0) {
    showBars();
    return;
  }
  const [i, j] = swaps.shift();

  [arr[i], arr[j]] = [arr[j], arr[i]];
  showBars([i, j]);
  setTimeout(function () {
    animate(swaps);
  }, 100);
}

function showBars(indices) {
  container.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const bar = document.createElement("div");
    const para = document.createElement("p");
    bar.style.height = arr[i] * 30 + "px";
    bar.classList.add("bar");
    para.innerText = arr[i];
    bar.appendChild(para);
    if (indices && indices.includes(i)) {
      bar.style.backgroundColor = "#8594e4";
    }

    container.appendChild(bar);
  }
}


