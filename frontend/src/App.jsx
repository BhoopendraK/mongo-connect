import React, { useState } from 'react'

import axios from 'axios'

const App = () => {
  const [flag, setFlag] = useState(false);

  const [unaam, setUnaam] = useState('')
  const [pwd, setPwd] = useState('')

  const [number, setNumber] = useState()
  const [user, setUser] = useState()
  const [password, setPassword] = useState()
  const [ddata, setDdata] = useState([])


  // const baseUrl = "http://aws-mysql.vercel.app";

  // const baseUrl = "http://localhost:3306";
  const baseUrl = `http://localhost:7000`;


  const [values, setValues] = useState([{
    email: "",
    password: ""
  }]);




  const displayData = async () => {
    console.log("Bhoop")
    await axios.get(`${baseUrl}/testabc`)
      .then(res => {
        console.log(res.data);
        setDdata(res.data);
      })
      .catch(err => console.log("Error: " + err));
    console.log("object")
  }


  return (
    <div>
      <h1>MongoDb Application</h1>



      <div>
        <button onClick={displayData}>Display Data</button>
      </div>
      <h3>Database Records:</h3>
      {



        //   data.map((cur, ind) => {
        //     return (
        // <p key={ind}>{cur.uid}. {cur.uname} : [{cur.email}] ({cur.upass})
        //   <button onClick={() => updateRecord(cur.id, cur.user, cur.password)}>Update</button>
        //   <button onClick={() => deleteRecord(cur.id)}>Delete</button>
        // </p>
        // )

        //   })
      }

      {ddata.map((cur, index) => (
        <p key={index}>{cur.name}</p>
      ))}












    </div>
  )
}

export default App
