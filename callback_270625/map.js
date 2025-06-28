//..............MAP................//


const num = [1,2,3,4];
const num2 = [1,2,3,4];
const num3 = [1,2,3,4];
function addition(num,num2){
    return num + num2;
}

function multiply(num,num2){
    return num * num2;
}

function addthree(num , num2 ,num3){
    return num+num2+num3;
}


const output = num.map((val,i) => multiply(val,num2[i]));
console.log(output);

const output1 = num.map((val,i) => addition(val,num2[i]));
console.log(output1);

const output2 = num.map((val,i)=>addthree(val,num2[i] , num3[i]));
console.log(output2);

