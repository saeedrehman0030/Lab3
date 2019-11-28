const express = require('express');
const cors = require('cors');
const mysql = require ('mysql');

const app= express();

const students= "select ID, Names, Country from sdgmates";

const connection=mysql.createPool({
    host:'us-cdbr-iron-east-05.cleardb.net',
    user:'b5563aa59ec2b6',
    password:'6ce901ec',
    database:'heroku_ecd0f45d12cd2bf'
});

const path = require('path');
app.use("/", express.static(path.join(_dirname, 'build')));
app.get("/", function(req,res) {
    res.sendFile(path.join(_dirname, 'dist', 'index.html'));
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
    
app.listen(process.env.PORT || 3000)

//res.send('Connection Established, Hang In there :)')