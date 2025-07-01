const user = [
    {
        firstname: "PRANSHUL",
        lastname: "SHARMA",
        age: 20
    },
    {
        firstname: "HARSH",
        lastname: "SINGH",
        age: 50
    },
    {
        firstname: "ADITYA",
        lastname: "BAGHEL",
        age: 30
    }
]
//console.log(user);
//console.log(user[0]);        // { firstname: 'PRANSHUL', lastname: 'SHARMA', age: 20 }
//console.log(user[0][0]);     //undefined

//......USING MAP........

// const output = user.map(user => user.firstname + " " + user.lastname);
// console.log(output);
// console.log(output[0]);

//.......using filter..........

// const output = user.filter(user => user.age<21);
// console.log(output);
// const output = user.filter(user => user.age<21).map(user => user.firstname);
// console.log(output);

//.........using reduce............
const output = user.reduce(function(acc,curr){
    if(acc>curr.age){
        return acc;
    }else{
        return curr.age;
    }
},0)
console.log(output);
const output1 = user.filter(user => user.age == output);
const output2 = output1.map(user => user.firstname);
console.log(output1);