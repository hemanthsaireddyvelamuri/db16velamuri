const mongoose = require("mongoose") 
const gasSchema = mongoose.Schema({ 
 name: String, 
 smell: String, 
 weight: Number 
}) 
 
module.exports = mongoose.model("gas", gasSchema)