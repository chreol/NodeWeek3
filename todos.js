const uuid = require('uuid');

let Todo = function(id, description, done){
    this.id = id;
    this.description = description;
    this.done = done;
}

let todos = [];



for (let i = 0; i < 10; i++){
    let todo = new Todo (uuid(), " Todo number " + i, false)
    todos.push(todo)
}

module.exports = todos;