// function servewater(callback){
//     console.log("serve water");
//     setTimeout(callback,1000);
// }

// function givemenu(callback){
//     console.log("read menu");
//     setTimeout(callback,1000);
// }
// function ordertaken(callback){
//     console.log("give order");
//     setTimeout(callback,1000);
// }
// function orderserved(callback){
//     console.log("order is served");
//     setTimeout(callback,1000);
// }
// function paybill(callback){
//     console.log("please pay bill");
//     setTimeout(callback,1000);
// }
// function feedback(){
//     console.log("please give us feedback");
// }

// servewater(()=>{
//     givemenu(()=>{
//         ordertaken(()=>{
//             orderserved(()=>{
//                 paybill(()=>{
//                     feedback();
//                 })
//             })
//         })
//     })
// })


//CALL BACK FUNCTION FOR ATM
// function language(callback){
//     console.log("select language");
//     callback();
// }
// function operation(callback){
//     console.log("select the options give below");
//     console.log("withdrawal");
//     console.log("balance check");
//     callback();
// }
// function enterpin(callback){
//     console.log("enter the pin");
//     callback();
// }
// function card(callback){
//     console.log("please take out your card");
//     callback();
// }
// function feedback(){
//     console.log("give feedback");
// }

// language(()=>{
//     operation(()=>{
//         enterpin(()=>{
//             card(()=>{
//                 feedback();
//             })
//         })
//     })
// })

//HIGH ORDER FUNCTION
// const data1 = [1,2,3,4];
// const data2 = [4,3,2,1];

// function operation(data1){
//     return data1 * 2;
// }

// function square(data1){
//     return data1*data1;
// }

// function multiply(data1,data2){
//     return data1 * data2;
// }

// const doublenum = function (data1 , logic){
//     const num1 = [];
//     for(let i = 0;i<data1.length;i++){
//         num1.push(logic(data1[i]));
        
//     }
//     return num1;
// }
// console.log(doublenum(data1,operation));
// console.log(doublenum(data1,square));
// console.log(doublenum(data1,data2,multiply));



const data1 = [1,2,3,4];
const data2 = [4,3,2,1];
const data3 = [1,2,3,4];
function operation(data1){
    return data1 * 2;
}

function square(data1){
    return data1*data1;
}

function multiply(data1,data2){
    return data1 * data2;
}

function multi3(data1,data2,data3){
    return data1*data2*data3;
}

const doublenum = function (data1 , logic,data2 = null,data3 = null){
    const num1 = [];
    for(let i = 0;i<data1.length;i++){
        if(data2){
            num1.push(logic(data1[i],data2[i]));

        }if(data3){
            num1.push(logic(data1[i],data2[i],data3[i]));

        }
        else{
            num1.push(logic(data1[i]));}
        
    }
    return num1;
}
//console.log(doublenum(data1,operation));
//console.log(doublenum(data1,square));
//console.log(doublenum(data1,multiply,data2));
console.log(doublenum(data1,multi3,data2,data3));