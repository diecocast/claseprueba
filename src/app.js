import express from 'express'

const app = express()
const PORT = process.env.PORT || 8080 
app.listen(PORT,()=>console.log("Listeninf"))

app.get('/',(req,res)=>{
    res.send("Mi primer cambio ")
})