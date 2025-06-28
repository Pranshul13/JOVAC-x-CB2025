//...............FILTER.................

const a = [1,2,3,4];

function odd(a){
    return a%2;
}

function divisible(a){
    return a/2 == 1;
}

const output = a.filter(odd);
console.log(output);

const output2 = a.filter(divisible);
console.log(output2);

