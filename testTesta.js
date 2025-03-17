// Sortirovka number
let arrN = [5, 3, 8, 1, 2];
arrN.sort();
console.log(arrN);
// Sortirovka strok
let arrA = ["яблоко", "банан", "вишня", "арбуз"];
arrA.sort();
console.log(arrA);
// Filtraciya arr
// Отфильтруйте массив, оставив только числа больше 25
let arrFilter = [10, 20, 30, 40, 50];
const filter = arrFilter.filter((element) => element > 25);
console.log(filter);

let serchTiger = ["кошка", "собака", "тигр", "лев"];
let evrika = serchTiger.includes("тигр");
console.log(evrika);
// Sum elem arr
let arrNumbers = [1, 2, 3, 4, 5];
let sum = arrNumbers.reduce(function (currentSum, currentNum) {
  return currentSum + currentNum;
}, 0);
console.log(sum);
