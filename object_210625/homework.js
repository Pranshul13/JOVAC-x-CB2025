// const people = [
//   { firstname: "Emma", lastname: "Johnson", age: 28 },
//   { firstname: "Liam", lastname: "Smith", age: 34 },
//   { firstname: "Olivia", lastname: "Williams", age: 22 },
//   { firstname: "Noah", lastname: "Brown", age: 30 },
//   { firstname: "Ava", lastname: "Jones", age: 26 },
//   { firstname: "Elijah", lastname: "Garcia", age: 41 },
//   { firstname: "Sophia", lastname: "Miller", age: 29 },
//   { firstname: "Lucas", lastname: "Davis", age: 36 },
//   { firstname: "Isabella", lastname: "Rodriguez", age: 25 },
//   { firstname: "Mason", lastname: "Martinez", age: 33 },
//   { firstname: "Mia", lastname: "Hernandez", age: 24 },
//   { firstname: "Logan", lastname: "Lopez", age: 27 },
//   { firstname: "Charlotte", lastname: "Gonzalez", age: 32 },
//   { firstname: "James", lastname: "Wilson", age: 40 },
//   { firstname: "Amelia", lastname: "Anderson", age: 23 },
//   { firstname: "Benjamin", lastname: "Thomas", age: 38 },
//   { firstname: "Harper", lastname: "Taylor", age: 31 },
//   { firstname: "Ethan", lastname: "Moore", age: 35 },
//   { firstname: "Evelyn", lastname: "Jackson", age: 21 },
//   { firstname: "Alexander", lastname: "White", age: 37 }
// ];


// //FULLNAME USING MAP
// const fullNames = people.map(function(person) {
//   return person.firstname + " " + person.lastname;
// });

// console.log("Full Names:");
// console.log(fullNames);


// //AGE USING MAP
// const ages = people.map(function(person) {
//   return person.age;
// });

// console.log("Ages of all people:");
// console.log(ages);


// //OVER30 PEOPLE USING FILTER
// const over30 = people.filter(function(person) {
//   return person.age > 30;
// });

// console.log("People older than 30:");
// console.log(over30);


// //AVERAGE AGE USING REDUCE
// const totalAge = people.reduce(function(sum, person) {
//   return sum + person.age;
// }, 0);

// const averageAge = totalAge / people.length;

// console.log("Average Age:");
// console.log(averageAge);




// // E-COMMERCE PLATFORM OF ORDERING SOME FOOD

// // Menu with items and stock count
// const menu = {
//   "Pizza": 10,
//   "Burger": 5,
//   "Pasta": 7
// };

// // Prices for items
// const prices = {
//   "Pizza": 8,
//   "Burger": 5,
//   "Pasta": 6
// };

// // Step 1: Place the order
// function placeOrder(item, nextStep) {
//   console.log("Customer order:", item);
//   nextStep(item);
// }

// // Step 2: Check if item is available
// function checkInventory(item, nextStep) {
//   if (menu[item] && menu[item] > 0) {
//     console.log(item + " is available.");
//     nextStep(item);
//   } else {
//     console.log(item + " is out of stock.");
//   }
// }

// // Step 3: Apply discount
// function applyDiscount(item, nextStep) {
//   const originalPrice = prices[item];
//   const discount = 1; // Flat 1rs discount for example
//   const finalPrice = originalPrice - discount;
//   console.log("Applying discount. Final price for", item, "is rs" + finalPrice);
//   nextStep(item, finalPrice);
// }

// // Step 4: Process payment
// function processPayment(item, amountToPay, nextStep) {
//   console.log("Payment of rs" + amountToPay + " received for", item);
//   nextStep(item, amountToPay);
// }

// // Step 5: Confirm order
// function confirmOrder(item, amountPaid, nextStep) {
//   console.log("Order confirmed for", item );
//   nextStep(item, amountPaid);
// }

// // Step 6: Print receipt
// function printReceipt(item, amountPaid) {
//   console.log("      "); 
//   console.log("RECEIPT");
//   console.log("Item: " + item);
//   console.log("Amount Paid: rs" + amountPaid);
//   console.log("Thank you for your order!");
 
// }

// // Run the system
// placeOrder("Pizza", function(item) {
//   checkInventory(item, function(item) {
//     applyDiscount(item, function(item, finalPrice) {
//       processPayment(item, finalPrice, function(item, paid) {
//         confirmOrder(item, paid, function(item, paid) {
//           printReceipt(item, paid);
//         });
//       });
//     });
//   });
// });


const menu = {
  Pizza: 10,
  Burger: 5,
  Pasta: 7
};

const prices = {
  Pizza: 8,
  Burger: 5,
  Pasta: 6
};

function placeOrder(item) {
  return Promise.resolve(item);
}

function checkInventory(item) {
  if (menu[item]) return Promise.resolve(item);
  return Promise.reject();
}

function applyDiscount(item) {
  return Promise.resolve({ item: item, price: prices[item] - 1 });
}

function pay(data) {
  return Promise.resolve(data);
}

function confirm(data) {
  return Promise.resolve(data);
}

function receipt(data) {
  console.log(data.item, "$" + data.price);
}

placeOrder("Pizza")
  .then(checkInventory)
  .then(applyDiscount)
  .then(pay)
  .then(confirm)
  .then(receipt);
