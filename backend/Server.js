const express = require("express")
const mongoose = require("mongoose")
// const mydb = require("mysql")
// const con = require(".//utils/db.js")


// const routes = require("./myroutes.js")

require("dotenv").config()

const cors = require("cors");
const testModel = require("./Models/testModel");

// const routes = require("./myroutes.js")



const app=express();
const PORT = process.env.PORT || PORT
// const PORT1 = process.env.PORT1 || PORT1

app.use(cors(
  {
    // origin: "https://react-mysql-chi.vercel.app/",
    origin: "http://localhost:5173",
    origin:"*",
  } 
  ))
  app.use(express.json())

// const urlDB=`mysql://${process.env.DB_USER}: ${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.PORT}/${process.env.DB_DATABASE}`;  

// const con = mydb.createConnection(urlDB);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Database: myDb1 Connected successfully..."))
.catch((err)=>console.log(err));





// const con = mydb.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   // connectTimeout: 100000,   ///1000000
//   // mmax_allowed_packet: 500000000,
// })

// con.connect(function(err){
//   if(err){
//     console.log("Connection error!!" + err)
//   } else{
//     console.log("Database `aws-demo-2` Connected...")
//   }
// })







// module.exports.gettestData = async(req, res)=>{
//   // const myData = await myModel.find({"name":"Seeta"})
//   const myData = await testModel.find({})
//   res.send(myData)
// console.log("Fetch Data")
// }

app.get("/", (req, res)=>{
  name: "Admin", status: true,
})


app.get("/testabc", async(req, res)=>{
  const myData = await testModel.find({})
  res.send(myData)
console.log(myData)
})



app.get("/", (req, res)=>{
  res.send({
    activeStatus: true,
    error: false,
  })
})


app.get("/display", (req, res)=>{
  const sql="SELECT * FROM users";
  con.query(sql, (err, data)=>{
    if(err) console.log("Error: " + err)
      else return res.json(data)
  })
})

app.post("/register", (req, res)=>{
  console.log("Bhoop")
  const sql="INSERT INTO admin(`user`, `password`) VALUES(?)"
  const values=[req.body.email, req.body.password]
  con.query(sql, [values],(err, result)=>{
    if(err) console.log(err)
      else return res.json(result)
  })
})


app.put("/update/:id", (req, res)=>{
  const sql="UPDATE admin set user=?, password=? WHERE id=?"
  const values=[req.body.email, req.body.password] // req.body.password
  const id=req.params.id
  con.query(sql, [...values, id],(err, result)=>{
    if(err) console.log(err)
      else return res.json(result)
  })

})


app.delete("/delete/:id", (req, res)=>{
  const sql="DELETE FROM admin WHERE id = ?"
  // const values=[req.body.email, req.body.password]
  const id=req.params.id
  con.query(sql, [id],(err, result)=>{
    if(err) console.log(err)
      else return res.json(result)
  })

})




  // try{

  // // app.use("/auth", routes);
  
  // app.listen(PORT1, ()=>{console.log(`Nodemon Server Started at PORT =  ${PORT1}`)})
  // }catch(e){
  // console.log("ERROR: Mysql Network Error")
  // }

  try{

    // app.use("/api", routes);
  
  app.listen(PORT, ()=>{console.log(`Nodemon Server Started at PORT =  ${PORT}`)})
  }catch(e){
  console.log(" Mongodb Network Error")
  }
  
