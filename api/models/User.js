const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
      fullname:{
        type: String,
        require:true,
        min:1,
        max:30
      },
      username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        min: 6,
      },
      profilePicture: {
        type: String,
        default: "",
      },
      friends: {
        type: Array,
        default: [],
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
      from: {
        type: String,
        max: 50,
      },
      pastTransactions:[{
        amount: {
          type: Number,
          default: ""
        },
        Owner: {
          type: String,
          default: ""
        }
      }]
    }
)
  
  module.exports = mongoose.model("User", UserSchema);