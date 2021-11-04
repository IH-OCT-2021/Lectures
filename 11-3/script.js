// let user = {}

//'classic' JS way
// function createUser(username, password){
//   return {
//     username,
//     password,
//     creationDate: new Date()
//   }
// }

// function attack(user){
//   return `${user.username} attacks for 5 damage`
// }

// let newUser = createUser('Sam', 'cat41')
// console.log("This is our new user: ", newUser)

// attack(newUser)

//OOP, aka Class Oriented Programming

class User {
  constructor(username, password) {
    (this.username = username),
      (this.password = password),
      (this.creationDate = new Date());
  }

  greeting() {
    return `Welcome aboard, ${this.username}`;
  }
}

let newUser = new User('Sam', 'password1');
let secondUser = new User('Jane', 'password1');

console.log('This is our user created from the class User: \n', newUser);

//warrior, mage

class Warrior extends User {
  constructor(username, password, strength) {
    super(username, password);
    this.strength = strength;
  }
  attack() {
    return `${this.username} attacks for ${this.strength} damage`;
  }
}

let odin = new Warrior('odin', 'thor17');

console.log(odin);

//add MP
class Mage extends User {
  constructor(username, password, mp) {
    super(username, password);
    this.mp = mp;
  }

  cast() {
    this.mp -= 5;
    console.log(`${this.username} casts fire for 10 magic points`);
  }
}

let merlin = new Mage('merlin', 'camelot7', 99);

console.log(merlin);
