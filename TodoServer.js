const express = require('express');

const cors = require('cors')

const app = new express();
app.use(cors())
app.use(express.json())
let todos = [
    {title: "Read Dune", done: true, _id: "123"},
    {title: "Read Foundation", done: true, _id: "234"},
    {title: "Read Forever war", done: false, _id: "345"}
];
app.get('/api/todos',(req,res)=>{
    res.json(todos);
})
app.delete('/api/todos/:tid', (req, res) => {
    const tid = req.params.tid;
    todos = todos.filter(todo => todo._id !== tid);
    res.json(todos);
});
app.post('/api/todos',(req,res)=>{
    const newTodo = req.body;
    todos.push(newTodo);
    res.json(todos);
})
app.listen(4000)
