// function CalculateSquare(num1, num2) {
//   return num1 * num2;
// }

// function CalculateSquare2(...values) {
//   return values.map((number) => number * 2);
// }

// console.log(CalculateSquare(1, 2));
// console.log(CalculateSquare2(1, 2, 3, 4, 5, 6));
/*
function one() {
  const num1 = "First Function";
  function two() {
    const num2 = "Second Function";
    console.log(num1);
  } //2nd function scope ends here and also local variables
  // console.log(num2);//cannot access it outside of the function scope
  two();
}
one();
//inner function can access outer function's variable outer function cannot access inner function's variable inner function
*/

// console.log(one(5));
// function one(num1) {
//   return num1 + 2;
// } //this can be access before the body of function
// two(7)--->cannot do this
//this is the function expression-->way to declare a function
//hosting--->cannot access it before body of the function
// const two = function (num1) {
//   return num1 * 2;
// };

const Users = {
  name: "Ehtsham",
  age: 25,
  email: "ehtsham@gmail.com",
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
  welcome: function () {
    console.log(`Welcome ${this.name}`);
    console.log(this);
  },
};

// Users.welcome();

function code() {
  let name = "EHtsham";
  console.log(this);
  // console.log(this.name);//--->only use in objects cannot in functions
}

// code();

//--->We can use this in both arrow and regular function

const two = (num1, num2) => {
  return num1 + num2; //explicit
};
const three = (num1, num2) => num1 + num2; //implicit return
const four = (num1, num2) => num1 + num2;

console.log(two(1, 2));
console.log(three(1, 2));
console.log(four(10, 20));

// IIFY--->Immediate Invoke Function Expression
(function one() {
  console.log("EHtsham");
})(); //semicolon is must

// ()()--->FIrst one for IIFY and 2nd for execution and to avoid gloabl scope pollution
// one();

(() => {
  console.log("Database conneccted---");
})();

//named IIFE and Simple IIFY
