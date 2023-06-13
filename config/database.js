const mongoose = require("mongoose")

const dbConnect = mongoose.connect("mongodb+srv://nodejsboy:amit93023@cluster0.o9ptkk7.mongodb.net/").then((e)=>{
    console.log(`Db Connected with ${e.connection.port}`)

}).catch((err)=>{
    console.log("Mongo Connection Error :::::"  +err)
})

module.exports=dbConnect