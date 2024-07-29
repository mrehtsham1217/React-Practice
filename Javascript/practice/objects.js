/*
//Literall objects

//USe of symbols in Objects
const mySymb = Symbol("Key1");
const mySymb2 = Symbol("Key2");

const myobj = {
  name: "John Doe",
  "full name": "Ehtsham Khaliq",
  mySymb2: "myvalue1",
  [mySymb]: "myvalue",
  age: 30,
  city: "New York",
  hobbies: ["reading", "painting", "cooking"],
  isLoggedIn: false,
  email: "ehtsham@yahoo.com",
};

// console.log(myobj.hobbies);
// console.log(myobj["full name"]);
// console.log(myobj.mySymb2);
// console.log(typeof myobj.mySymb2);
// console.log(myobj[mySymb]);
// console.log(typeof myobj[mySymb]);

// myobj.email = "ehtsham@chatgpt.com";
// Object.freeze(myobj);
// myobj.email = "ehtsham@gemini.com";

// console.log(myobj);

myobj.greeting = function () {
  console.log("Hello Javascript");
};

//String interpolation
myobj.greeting2 = function () {
  //   console.log(`Hello  ${myobj.name}`);
  console.log(`Hello  ${this.name}`); //this refers to current object we can use this for curret object
};

console.log(myobj.greeting());
console.log(myobj.greeting2());

//Singleton Objects by using new keyword

const JsObje = new Object();
console.log(JsObje);

JsObje.id = 1;
JsObje.name = "Ehtsham khaliq";
console.log(JsObje);

const regularObject = {
  id: 1,
  name: "Ehtsham khaliq",
  username: {
    fullname: {
      firstname: "Ehtsham",
      lastname: "Khaliq",
    },
  },
};
//production rule ---> ? if something is not exist
console.log(regularObject.username);
console.log(regularObject.username?.fullname);
console.log(regularObject.username.fullname.firstname);
console.log(regularObject.username.fullname.lastname);

const obj1 = { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" };
const obj2 = { 6: "a", 7: "b", 8: "c", 9: "d", 10: "e" };

// const obj3 = { obj1, obj2 };
// console.log(obj3);
// const obj3 = Object.assign(obj1, obj2);
// const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj3);
// console.log(obj4);

const obj3 = { ...obj1, ...obj2 }; //--->Spread operators
// console.log(obj3);

console.log(regularObject);
console.log(Object.keys(regularObject));
console.log(Object.values(regularObject));

console.log(regularObject.hasOwnProperty("username"));

*/

//------------Objects Destructuring------------
MyObj = {
  cousename: "Javascript complete course",
  price: 999,
  CouseInstructor: "Ehtsham khaliq",
};

const { CouseInstructor: teacher } = MyObj;

// console.log(CouseInstructor);
console.log(teacher);
//Destructring is the concept of React while passing props
