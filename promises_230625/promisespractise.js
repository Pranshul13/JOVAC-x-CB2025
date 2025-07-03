const cart = ["Shoes","Glasses","Shirt","Pants"];
// const promise = new Promise((resolve, reject) => {
//     resolve("Promise Resolve");
// });
// console.log(promise);


// const promise1 = new Promise((resolve, reject) => {
//     reject("Promise reject");
// });
// // console.log(promise1);
// promise1.then(function(){
//     console.log("Promise resolve");
// }).catch(function(err){
//     console.log("err is occuring");
// })


// const promise1 = new Promise((resolve, reject) => {
//     //reject("Promise reject");
//     setTimeout(() => {
//         reject();
//     },3000);
// });
// // console.log(promise1);
// promise1.then(function(){
//     console.log("Promise resolved");
//     console.log(cart);

// }).catch(function(err){
//     console.log("err is occuring");
// })

//PROMISE API
//PROMISE.ALL()
//PROMISE.ALLSETTLED()
//PROMISE.RACE()
//PROMISE.ANY()

const p1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("Promise 1 is resolved");
    },1000);
});
const p2 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("Promise 2 is resolved");
    },2000);
});
const p3 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("Promise 3 is resolved");
    },1000);
});
const p4 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        //resolve("Promise 4 is resolved");
        reject("Promise 4 is rejected");
    },1000);
});

// Promise.all([p1,p2,p3,p4])
//     .then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log("err");
//     })

// Promise.allSettled([p1,p2,p3,p4])
//     .then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log("err");
//     })

// Promise.race([p1,p2,p3,p4])
//     .then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log("err");
//     })

Promise.any([p1,p2,p3,p4])
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log("err");
    })
    