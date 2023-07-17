const http = require('http');
const fs = require('fs');
const express = require('express')
const app = express()




app.get('/',(req,res)=>{
        fs.readFile('index.html',function(err,data){
            if(err){
                throw err
            }
            res.writeHead(200,{'Content-Type': 'text/html'})
            console.log(data)
            res.write(data);
            res.end
        })
    })

app.get('/about',(req,res)=>{
    fs.readFile('about.html',function(err,data){
        if(err){
            throw err
        }
        res.writeHead(200,{'Content-Type': 'text/html'})
        console.log(data)
        res.write(data);
        res.end
    })
})

app.listen(3000,()=>{
    console.log('Server listening on port 3000')
})