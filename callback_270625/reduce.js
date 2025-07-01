let arr = [100,1,2,3,72,4];

// const output = arr.reduce(function(acc,curr){
//     acc = acc + curr;
//     return acc;
// },0)

// console.log(output);


//FOR MAXIMUM VALUE
const output = arr.reduce(function(acc,curr){
    if(acc > curr){
        return acc;
    }
    else{
        return curr;
    }
},0)
console.log(output);

