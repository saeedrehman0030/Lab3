var http=require('http');
var express = require('express');
var mysql = require('mysql');
var fs=require('fs');
var app = express();



const connection=mysql.createPool({
    host:'us-cdbr-iron-east-05.cleardb.net',
    user:'b5563aa59ec2b6',
    password:'6ce901ec',
    database:'heroku_ecd0f45d12cd2bf'
});  





app.get('/', function(req,resp){
	 connection.query("select * from sdgmates",function(error,rows,fields){
	    if(!!error){
		console.log('Error in the query');
	}else{
		console.log('Successful query run\n');
		console.log(rows);
		
		//resp.send('Hello, ' + JSON.stringify(rows));
		//document.getElementById("myHeader").innerHTML = JSON.stringify(rows);
		
		   var a=JSON.stringify( rows);
	
		resp.send("<!DOCTYPE html><html ><head><title >Document</title></head><body><p style='color:yellow;font-size:20px;'>"+a+"</p></body></html>" );
	}
});
    
})
app.listen('3000',() =>{
    console.log('Server started on port 3000');
});


