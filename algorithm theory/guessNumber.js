const numInput = document.getElementById('form-input');
const mainButton = document.querySelector('#mainButton');
const leftButton = document.querySelector('#leftButton');
const rightButton = document.querySelector('#rightButton');
const mainForm = document.querySelector('.main-form');
const mainWindow = document.querySelector('.window');
const hidden = document.querySelector('.hidden');
const arrayOfNumber = [];
let hiddenNumber = 0;

numInput.onchange = () => {
  hiddenNumber = numInput.value;
};

function addNumbersToArray() {
  for (let i = 0; i <= 100; i += 1) {
    arrayOfNumber.push(i);
  }
  return arrayOfNumber;
}
addNumbersToArray();

// вывод загаданного числа в первую строку
function showHuntedNum() {
  const mainNum = document.querySelector('.main-num');
  mainNum.innerHTML = `вы выбрали ${hiddenNumber}`;
}

let start = 0;
let end = arrayOfNumber.length - 1;
let middle = Math.floor((start + end) / 2);

function binarySearch() {
  mainWindow.innerHTML = `${middle}`;

  if (hiddenNumber == middle) {
    mainWindow.innerHTML = `вы загадали ${middle}`;
  }
}

function searchOnTheLeft() {
  end = middle - 1;
  middle = Math.floor((start + end) / 2);
  binarySearch();
}

function searchInTheRigth() {
  start = middle + 1;
  middle = Math.floor((start + end) / 2);
  binarySearch();
}

mainButton.onclick = function () {
  if (numInput.value === '' || numInput.value > 100 || numInput.value < 1) {
    return;
  }
  binarySearch();
  hidden.classList.toggle('hidden');
  alert('для удобства я выведу загаданное вами число в первую строку');
  showHuntedNum();
  mainForm.innerHTML = '';
};

leftButton.onclick = function () {
  searchOnTheLeft();
};

rightButton.onclick = function () {
  searchInTheRigth();
};
