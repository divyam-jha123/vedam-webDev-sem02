// const cart = ["shirt", "trousers", "shoes", "shades"];

// const promise = createOrder(cart); // An async function -- will get orderId

// //Print PROMISE
// console.log(promise);

// //Consume
// promise.then(function (orderId) {
//     console.log("inside then", promise);
//   //This runs when Promise is resolved
//   console.log(orderId);
// }).catch(function(err){
//     console.log(err.message)
//     alert("error",err.message)
// })

// //Creation of promise/ backend side / producer side

// function createOrder(cart) {

// function validateCart() {
//   return false;
// }

//   const pr = new Promise(function (resolve, reject) {
//     //createOrder
//     //validate the cart (check in stock)
//     //return orderId

//     //Fail-first approach
//     if (!validateCart(cart)) {
//       setTimeout(function () {
//         // mimicking async BE jobs.
//         const err = new Error("Cart is invalid");
//         reject(err);
//       }, 2000);
//     }

//     // logic for createOrder

//     const orderId = "11010";

//     if (orderId) {
//       setTimeout(function () {
//         // mimicking BE jobs.
//         resolve(orderId);
//       }, 5000);
//     }
//   });

//   return pr;
// }


// ordering food:

// function orderFood(isRestaurantOpen) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (isRestaurantOpen) {
//         resolve("food delivered!");
//       } else {
//         reject("Restaurant is closed!");
//       }
//     }, 2000);
//   });
// }

// orderFood(false)
// .then((msg) => {
//   console.log(msg);
// })
// .catch((err) => {
//   console.log(err);
// });

//======================= Promise chaining=======================

let promise = new Promise((resolve, reject) => {
  resolve(2);
});

promise.then((num) => {
  return num * 2;
}).then((num) => {
  return num * 2;
}).then((final) => {
  console.log(final);
});
