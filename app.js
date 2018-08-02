const express = require('express');
const uuid = require('uuid');
let app = express();
let PORT  = 4000;
app.set('view engine', 'ejs');
const todos = require('./todos.js')
// app.use(express.static('./public'));

// app.get("/", function(req, res){
//     res.send('Hello from node server, root route');
//     console.log(uuid());
// });

app.get ("/", function(req,res){
    res.redirect('http://www.google.fr')
})

app.get ("/todos", function(req,res){
    res.render('index', {todos: todos});
})

app.get ("/todos/:id", function(req,res){
    res.send('Hello from :ID')
})

app.get ("/todos/:id", function(req,res){
    let id = req.params.id;
    for (let i = 0; i < todos.length; i++){
        if(todos[i].id == id){
            res.render('todo', {todo : todos[i]})
        }
    }
    res.send("Todo not found")
})

app.listen(PORT, function() {
    console.log(`Server is listening to the port :${PORT}`)
}); 