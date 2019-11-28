const express = require('express');
const cors = require('cors');
const mysql = require ('mysql');

const app= express();

const students= "select ID, Names, Country from sdgmates";

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'task1'
});

connection.connect(err=>{
    if(err){
        throw (err);
    }
    
});

app.use(cors()); 

//GET values from db
app.get('/students',(req,res)=>{
    connection.query(students,(err,results)=>{
        if (err){
        throw (err);
        }
        else{
                res.json({
                results
            })
        }
    });
});
    
app.listen(3000,()=>{
    console.log(`Server connected to port 3000!!`)
});

//res.send('Connection Established, Hang In there :)')