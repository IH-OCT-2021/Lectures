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