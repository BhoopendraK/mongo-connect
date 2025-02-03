const mongoose = require("mongoose")

const testSchema = new mongoose.Schema({ 
  name : {
    type : String,
    // unique: true,//
    require : true
  },
  mob : {
    type : String,
    // unique: true,//
    require : true
  },
  address : {
    add : String,
    city : String,
    distt: String,
  },
},
{ versionKey: false });


module.exports = mongoose.model("testing", testSchema);