const mongoose = require("mongoose");


const calculatedSchema = mongoose.Schema({
   resultValues: [{
    Ower: String,
    Amount: Number,
    Owner: String,
    // createdAt: {
    //     type: Date,
    //     default: new Date(),
    // },
   }]
});

module.exports = mongoose.model("Calculated", calculatedSchema);

