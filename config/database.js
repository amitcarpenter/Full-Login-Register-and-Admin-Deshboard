const mongoose = require("mongoose")

const dbConnect = mongoose.connect("mongodb://127.0.0.1/task").then((e)=>{
    console.log(`Db Connected with ${e.connection.port}`)

}).catch((err)=>{
    console.log("Mongo Connection Error :::::"  +err)
})

module.exports=dbConnect