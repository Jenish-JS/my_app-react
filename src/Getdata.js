import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Getdata() {
  let [data, setData] = useState([]);
  // let indexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let pathParam = useParams();

  function apiCalling() {
    try {
      axios
        .get("https://6620b6df3bf790e070b06282.mockapi.io/admin")
        .then((rawData) => {
          setData(rawData.data);
        })
        .catch((err) => {
          console.log("error == ", err);
        });
    } catch (error) {
      console.log("error in catch === ", error);
    }
  }
  useEffect(() => {
    apiCalling();
  }, []);
  
    return (
      <>
        {data.map((Value, Index, Array) => {
          const date = new Date(Value.createdAt);
          let dt =
            date.getDate() +
            "-" +
            date.getMonth() +
            "-" +
            date.getFullYear() +
            " Time " +
            date.getHours() +
            ":" +
            date.getMinutes() +
            ":" +
            date.getSeconds() +
            " " +
            date.toLocaleTimeString();
          // console.log(dt);
          if (pathParam.id === Value.id) {
          return (
            <>
              <Link to={"/about/"+Value.id}>
                <div key={Index} id="Con">
                  <div className="Left">
                    <img src={Value.avatar} alt="" />
                  </div>
                  <div className="Right">
                    <h1>{Value.id}</h1>
                    <h1>{Value.name}</h1>
                    <h1>{dt}</h1>
                  </div>
                </div>
              </Link>
            </>
          );
        }
        })}
        {/* {indexArr.map((value, index, array) => {
      return (
       <div key={index}>
        <h1>{value}</h1>
        <h2> index number == {index}</h2>
        </div>
      );
    })}  */}

        {/* <button
          onClick={(e) => {
            e.preventDefault();

            console.log("counter == ", counter);
            setName(name === "hello" ? "world" : "hello");
            setCounter(++counter);
          }}
        >
          Submit
        </button> */}
      </>
    );
  
}
export default Getdata;
