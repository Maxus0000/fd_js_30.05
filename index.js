// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
// }
// console.log(getRandomInt(1, 15));

// // функция возвращает массив из н колличества  случаных чисел из диапазона

// function getArray(amaunt, min, max) {
//   const array = []; // создали пустой массив
//   for (let i = 0; i < amaunt; i++) {
//     // выполняем дейтвие сколько то раз
//     // наполняем массив
//     array.push(getRandomInt(min, max));
//   }
//   return array; // вернули массив
// }

// console.log(getArray(50, 0, 60));

// const array = getArray(10, -10, 20);
// console.log(array);
// // перебрать все элементы массива и если отрицательное число то вывести в консоль

// // for (let i = 0; i < array.length; i++) {
// //   array[i];
// //   if (array[i] < 0) {
// //     console.log(array[i]);
// //   }
// // }
// // // перебрать элементы массива и если они кратные 3 вывести в консоль
// // for (let i = 0; i < array.length; i++) {
// //   array[i];
// //   if (array[i] % 3 === 0) {
// //     console.log(array[i]);
// //   }
// // }

// // array.forEach(function (element) {
// //   if (element > 0) {
// //     console.log(element);
// //   }
// // });
// // человек будет вводить что нибудь пока он не введет число 0
// let summa = 0;
// while (true) {
//   const userInput = prompt("enter anything");
//   if (userInput === "0") {
//     break;
//   }
//   const userInputNum = Number(userInput);
//   if (userInputNum > 0) {
//     summa += userInputNum;
//     console.log(summa)
//   }
// }
// console.log(summa)
// если будет вводить числато выводить положительные то будет выводить сумму
let summa = 0;
let count =0;
while (true) {
  const userInput = prompt(" enter");

  if (summa >= 100) {
    break;
  }
  const userInputNum = Number(userInput);
  if (summa < 100) {
    count++;
    summa += userInputNum;
    console.log(summa);
  }
}
console.log(summa, count);

// function User(fname, lname, age, isMale, email, isSubscribed = false) {
//   this.fname = fname;
//   this.lname = lname;
//   this.age = age;
//   this.isMale = isMale;
//   this.email = email;
//   this.isSubscribed = isSubscribed;
// }
// function Userprototype() {
//   this.fullName = function () {
//     return "${this.fname} ${this,lname}";
//   };
// }
// User.prototype = new Userprototype();

// function createUsers(amount=1){
//   const arrUsers = [];
//   for (let i = 0; i < amount; i++) {
//     const euser = new User;(
// 'Elone${i}',
// 'Musk${i}',
// Math.ceil(Math.random()*(60-20)+20),
// Math.random()>0.5,
// 'emailEM${i}@gmail.com',
//     )
// arrUsers.push(users);
//     }
// }
// const users = createUsers(20);
// console.table(users);
