// setTimeout(()=>{
//      console.log("serve water");
//  },5000);
// setTimeout(()=>{
//      console.log(" hello ");
//  },2000);

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function square(a) {
  return a * a;
}


function calculate(func, a, b) {
  return func(a, b);
}


console.log("Divide:", calculate(divide, 10, 2));     
console.log("Multiply:", calculate(multiply, 3, 4));  
console.log("Sum:", calculate(sum, 5, 6));            
console.log("Subtract:", calculate(subtract, 9, 4));  
console.log("Square:", square(5));   
