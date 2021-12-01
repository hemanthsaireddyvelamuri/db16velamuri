const mongoose = require("mongoose")
const gasSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 5
    },
    smell: {
        type: String,
        minLength: 2
    },
    weight: Number
})

module.exports = mongoose.model("gas", gasSchema)