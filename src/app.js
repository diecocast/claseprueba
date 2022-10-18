import express from 'express'

const app = express()

app.listen(8080,()=>console.log("Listeninf"))

app.get('/',(req,res)=>{
    res.send("Mi primer cambio ")
})