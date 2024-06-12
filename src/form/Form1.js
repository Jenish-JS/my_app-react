import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Form1() {

  let [userData,setUserData] = useState({
    name: "",
    password: ""
  });
  let [apiCallFlag, setApiCallFlag] = useState(0)

  useEffect(() => {
    apiCalling(userData)
  }, [apiCallFlag])

    function apiCalling(data) {
        try {
         
          axios
            .post("http://localhost:7000/login", data)
            .then((rawData) => {
              console.log(rawData.data)
            })
            .catch((err) => {
              console.log("error == ", err);
            });
        } catch (error) {
          console.log("error in catch === ", error);
        }
      }

  return (
    <>
    
        name<input type="text" name="name" value={userData.name} onChange={(e)=>{
          e.preventDefault();

          setUserData({...userData, name: e.target.value});
        }} />
           password<input type="text" name='password' value={userData.password} onChange={(e)=>{ 
            e.preventDefault();

            setUserData({...userData, password: e.target.value});
           }} />
        <button type="submit" onClick={(e) => {
          e.preventDefault()

          setApiCallFlag(++apiCallFlag)
        }}>submit</button>

    </>
  )
}

export default Form1
