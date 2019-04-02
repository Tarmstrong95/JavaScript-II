// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function closOne() {
  let blob = 'blob';
  function closTwo(){
    console.log(blob + ' ' + 10);
    function closThree(){
      console.log(blob + ' ' + 100);
    };
    closThree();
  };
  closTwo();
};
closOne();
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function () {
    return count += 1;
  }
};
let newCounter = counter();
console.log(newCounter())
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
 
 const countObj = {
  increment: function (){
    let count = 0;
    return function () {
      return count += 1;
    }
  },
  decrement: function (){
    let count = 0;
    return function () {
      return count -= 1;
    }
  }
}
  
return countObj;
  
};
let countObject = counterFactory();
let increment = countObject.increment();
let decrement = countObject.decrement();

console.log(increment())
console.log(increment())

console.log(decrement())
console.log(decrement())
