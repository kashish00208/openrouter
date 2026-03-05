import express from 'express' 

const app = express()

app.get("/",()=>{
    console.log("Hello world")
})

app.listen(8080,()=>{
    "console.log app is working on port no 8080"
})