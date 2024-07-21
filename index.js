const express = require("express");
// const app = express();
const cors = require("cors");
// const pool = require("./db");
// import pg from "pg";
const pg = require("pg");
const bodyParser = require("body-parser");


const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "perntodo",
  password: "Akash@123",
  port: 5432,

});
db.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.use(cors());

app.use(express.json()); // req.body


// routes


// create a todo

app.post("/todos",async (req,res)=>{
    try {

        console.log(req.body);
        const {description} = req.body;
        const newTodo = await db.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description]);
        res.json(newTodo.rows[0]);        
    } catch (error) {
        console.log(error);
        
    }

})


// get all todo

app.get("/todos",async (req,res)=>{
    try {
        const allTodos = await db.query("SELECT * FROM todo");
        res.json(allTodos.rows)
    } catch (error) {
        console.log(error);
        
    }
});


// get a specific todo
app.get("/todos/:id",async(req,res)=>{
    try {

        // console.log(req.params);

        const {id} = req.params;
        const todo = await db.query("SELECT * FROM todo WHERe todo_id = $1",[id]);
        res.json(todo.rows[0]);

    } catch (error) {
        console.log(error);
    }
});


// update a todo
app.put("/todos/:id",(req,res)=>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = db.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description,id]);
        res.json("Todo was updated");
        
    } catch (error) {
        console.log(error);
        
    }
});


// delete a todo 

app.delete("/todos/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteTodo = await db.query("DELETE FROM todo WHERE todo_id = $1",[id]);
        res.json("Todo was deleted");
        
    } catch (error) {
        console.log(error);
        
    }
});

app.listen(port, () => {
    console.log(`Server running on port httpl://localhost:${port}`);
  });
