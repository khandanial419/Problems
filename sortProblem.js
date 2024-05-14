//Problem for sorting an arrray

console.log("Problem is to sort an array");

const SortNumber = (a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
};

const numbers = [67, 23, 7, 90, 2, 7, -9];
//alogrithim for sorting an array
for (var i = 0; i < numbers.length; i++) {
  for (var j = 0; j < numbers.length - 1; j++) {
    if (SortNumber(numbers[j], numbers[j + 1]) === 1) {
      const temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log(numbers);
