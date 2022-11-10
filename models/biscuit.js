const mongoose = require("mongoose") 
const biscuitSchema = mongoose.Schema({ 
 brandName: String, 
 price: Number, 
 flavour: String 
}) 
 
module.exports = mongoose.model("Biscuit", biscuitSchema) 