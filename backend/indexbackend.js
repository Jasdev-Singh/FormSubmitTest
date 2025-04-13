//Step1 : Create DB from xampp phpmyadmin
//step 2 : set up backend
//import express, sql,cors
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

//initialize
const app = express();
app.use(express.json());
app.use(cors());

//create db connection
const db = mysql.createConnection(
    {
        host: 'localhost',
        user:'root',
        password:'',
        database:'formsubmit_project'
    }
);

db.connect(err=> {
    if (err) throw err;
    console.log("DB is connected successfully!")
});

// create post api to insert data into db

app.post('/student',(req,res)=>{
    const{name,age,marks} = req.body;
    db.query('insert into student(name,age,marks) values (?,?,?)',[name,age,marks],(err,result)=>{
        if(err){
            return res.status(500).json(err);
        }

        res.status(200).json({message :"Student added!"});

    });
});


//start server
app.listen(5000, ()=> console.log("server running at port 5000"));

