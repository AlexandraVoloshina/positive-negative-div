// 1) В html создать 12 div
// 2) С помощью js найти эти div
// 3) Всем четным div добавить текст "Я четный элемент №(добавить сюда номер по порядку)"
// 4) Всем нечетным div добавить текст "Я нечетный элемент №(добавить сюда номер по порядку)"

var divArr = document.getElementsByTagName("div"); 
console.log(divArr);
var countEven = 1, countOdd = 1;
for(var i = 0; i < divArr.length; i++){
  if (i%2){
    divArr[i].innerText = "Я четный элемент №" + countEven;
    countEven++;
  } else {
    divArr[i].innerText = "Я нечетный элемент №" + countOdd;
    countOdd++;
  }
}