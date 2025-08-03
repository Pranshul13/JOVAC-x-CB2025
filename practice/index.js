const todo = [
    {
        id: 1,
        text: "yes i am there",
        isComplete: true

    },
    {
        id: 2,
        text: "ok",
        isComplete: false

    },
    {
        id: 3,
        text: "yes ",
        isComplete: true

    },
];
//const json = JSON.stringify(todo);
//console.log(json);

todo.forEach(function(todos){
    console.log(todos.text);
})