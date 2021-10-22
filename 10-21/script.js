//For loop review

//arr.length === 3

// for(let i=0; i<arr.length; i++){
//   console.log(`${arr[i]}+${i} = ${arr[i]+i}`)
// }

//Array methods

//Map

//Callback function (a function inside a fucntion)

// function add(arrayIndex){
//   console.log(arrayIndex+5)
// }

// let colors = ['red', 'blue', 'yellow']
// let secondary = ['orange', 'green', 'purple']

// // arr.map(add)

// let newArr = colors.map(function(color){
//   return `${color} is a primary color`
// })

// let secondArr = secondary.map(function(color){
//   return `${color} is a secondary color`
// })

// console.log("This is arr", arr)
// console.log("This is New Arr", newArr)
// console.log("This is the second arr", secondArr)

//Reduce

// let numbers = ['f','o','o','b','a','r']

// //What is the sum of this array?

// const reducer = (previousValue, currentValue) => {
//   console.log("--------------------")
//   console.log("THIS IS the previous value",previousValue)
//   console.log("THIS IS the current value",currentValue)
//   return previousValue + currentValue;
// }

// numbers.reduce(reducer))

// let user1 = {
//   name: 'john',
//   age: 45,
//   ownCar: false
// }

// let user2 = {
//   name: 'samantha',
//   age: 51,
//   ownCar: true
// }

// let user3 = {
//   name: 'lenny',
//   age: 30,
//   ownCar: true
// }

// let user4 ={
//   name: 'wendy',
//   age: 22,
//   ownCar: true
// }

// let neighbors = [user1,user2,user3, user4];

// function checkForCars(neighbor){
//   if(!neighbor.ownCar){
//     return `${neighbor.name} does not own a car`
//   } else {
//     return `${neighbor.name} owns a car`
//   }
// }

// let arrayOfPeopleWhoDontOwnCars = neighbors.map(checkForCars)

// console.log("Car ownership", arrayOfPeopleWhoDontOwnCars)

// let arr = [1,2,3,4,5,6,7,8];

// //numbers greater than 4

// let arrOfNumbersGreaterThanFour = arr.filter((num)=>{
//   return num > 4
// })

// console.log(arrOfNumbersGreaterThanFour)

// let colors = ['red', 'yellow', 'magenta', 'periwinkle', 'aubergine'];

// let coolColors = colors.filter(function(color){
//   console.log("This is the color", color)
//   return color.length >=7
// })

// console.log(coolColors)

// let car1 = {
//   color: "red",
//   maker: "Honda",
//   year: 2014,
// }
// let car2 = {
//   color: "blue",
//   maker: "Ford",
//   year: 1999,
// }
// let car3 = {
//   color: "black",
//   maker: "Tesla",
//   year: 2019,
// }
// let car4 = {
//   color: "red",
//   maker: "Ferrari",
//   year: 1981,
// }
// let car5 = {
//   color: "silver",
//   maker: "Tesla",
//   year: 2021,
// }

// let carArr = [car1, car2, car3, car4, car5];

// let isCarTesla = carArr.filter((car)=>{
//   return car.maker === 'Tesla'
// })

// let oldCars = carArr.filter((car)=>{
//   return car.year<2000
// })

// console.log("These cars are Teslas:", isCarTesla)

// console.log("These are from the 20th century:", oldCars)

//SORT

//Sorts elements of an array

// let arr = ['a','v','e','see','se','o']

// let sorted = arr.sort()

// let arr = [1,23,4,100,5,8,6,3,321]

// let sorted = arr.sort()

// console.log(sorted)

//Sort usually needs a callback function

// function compare(a, b) {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }

// let arr = [1,23,4,100,5,8,6,3,321]

// let sorted = arr.sort(compare)

// console.log(sorted)

//Sorting with Objects based on criteria

// let car1 = {
//   color: "red",
//   maker: "Honda",
//   year: 2014,
// }
// let car2 = {
//   color: "blue",
//   maker: "Ford",
//   year: 1999,
// }
// let car3 = {
//   color: "black",
//   maker: "Tesla",
//   year: 2019,
// }
// let car4 = {
//   color: "red",
//   maker: "Ferrari",
//   year: 1981,
// }
// let car5 = {
//   color: "silver",
//   maker: "Tesla",
//   year: 2021,
// }

// let carArr = [car1, car2, car3, car4, car5];

// function compare(a, b) {
//   if (a.year < b.year) {
//     return -1;
//   }
//   if (a.year > b.year) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }

// //These two options are functionally identical

// let carsOrderedByYear = carArr.sort(compare)

// let carsOrderedByYear = carArr.sort((a,b)=>{
//    if (a.year < b.year) {
//     return -1;
//   }
//   if (a.year > b.year) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// })

// console.log("This is ordered by year:", carsOrderedByYear)
