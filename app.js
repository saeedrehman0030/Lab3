var http=require('http');
var express = require('express');
var mysql = require('mysql');
var fs=require('fs');
var app = express();



const connection=mysql.createPool({
    host:'us-cdbr-iron-east-05.cleardb.net',
    user:'b9e81c42f3daea',
    password:'b7e74f20',
    database:'heroku_386181d448e7db5'
});  


app.get('/', function(req,resp){
	 connection.query("select * from students",function(error,rows,fields){
	    if(!!error){
		console.log('Error Connecting');
	}else{
		console.log('Successful Connection\n');
		console.log(rows);
		
		//resp.send('Hello, ' + JSON.stringify(rows));
		//document.getElementById("myHeader").innerHTML = JSON.stringify(rows);
		
		   var a=JSON.stringify( rows);
	
		resp.send("<!DOCTYPE html><html ><head><title >Document</title></head><body><p style='color:red;font-size:20px;'>"+a+"</p></body></html>" );
	}
});
    
})
app.listen('3000',() =>{
    console.log('Server started on port 3000');
});