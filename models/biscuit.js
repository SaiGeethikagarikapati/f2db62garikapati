const mongoose = require("mongoose") 
const biscuitSchema = mongoose.Schema({ 
 brandName: {
    type:String,
    required:true
 }, 
 price: {
    type:Number,
    required:true,
    min:0,
    max:1000
 }, 
 flavour: {
    type:String,
    required:true
 } 
}) 
 
module.exports = mongoose.model("Biscuit", biscuitSchema) 