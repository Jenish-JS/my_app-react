import { useState } from "react";
import "./App.css";
import axios from "axios";
import React, { useEffect } from "react";
import {useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Notes() {

  // let [name, setName] = useState("hello");
  // let [counter, setCounter] = useState(0);
  let [Data, SetData] = useState([]);

  let navigator = useNavigate()

  let pathParam = useParams();
  console.log("path parameter == ", pathParam);

  function apiCalling() {
    try {
      axios
        .get("https://6620b6df3bf790e070b06282.mockapi.io/admin")
        .then((rawData) => {
          SetData(rawData.data);
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
      {Data.map((Value, Index, Array) => {
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
        return (
          <>
            <div key={Index} id="Con" style={{border: "2px solid black", marginTop: "10px"}} onClick={(e) => {
              e.preventDefault()

              navigator(`/getdata/${Value.id}`)
            }}>
              <div className="Left">
                <img src={Value.avatar} alt="" />
              </div>
              <div className="Right">
                <h1 name="id">{Value.id}</h1>
                <h1>{Value.name}</h1>
                <h1>{dt}</h1>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

//   function App(props) {
//     let [taskList, setTaskList] = useState([]);
//     let [taskTitle, setTaskTitle] = useState("");
//     let [counter, setCounter] = useState(0);
//     let [flagForEditing, setFlagForEditing] = useState(0);
//     let [buttonVisible, setButtonVisible] = useState("none");
//     let [alert, setAlert] = useState(false);
//     // let [apiData, setApiData] = useState([]);

//     let deleteTask = (index) => {
//       let newTaskList = [...taskList];
//       // console.log(newTaskList);
//       newTaskList.splice(index, 1);
//       setTaskList(newTaskList);
//     };
//     let checkElement = (index) =>{
//       let newTaskList = [...taskList];
//       newTaskList[index].checked = !newTaskList[index].checked;
//       setTaskList(newTaskList);
//     }
//     function removeCheckedElements() {
//         setTaskList(taskList.filter(task => !task.checked));
//       }

//     // function apiCallingWPromiseHandle() {
//     //   try {
//     //     axios
//     //       .get("https://6620b6df3bf790e070b06282.mockapi.io/admin")
//     //       .then((rawData) => {
//     //         console.log("data === ", rawData.data);
//     //         setApiData(rawData.data)
//     //       })
//     //       .catch((err) => {
//     //         console.log("error == ", err);
//     //       });
//     //   } catch (error) {
//     //     console.log("error in catch === ", error);
//     //   }
//     // }
//     // function Submit(){
//     //   apiCallingWPromiseHandle();
//     // }

//     // function apiCallingWOPromiseHandle() {
//     //   try {
//     //     return axios
//     //       .get("https://6620b6df3bf790e070b06282.mockapi.io/admin")
//     //   } catch (error) {
//     //     console.log("error in catch === ", error);
//     //     return []
//     //   }
//     // }

//     // useEffect(() => {
//     //   // apiCallingWOPromiseHandle().then((rawData) => {
//     //   //   setApiData(rawData.data)
//     //   // }).catch()
//     //   Submit()
//     //   // apiCallingWPromiseHandle()
//     // }, []);

//   return (
//     <>
//      <input
//         type="text"
//         onChange={(e) => {
//           e.preventDefault();
//           setTaskTitle(e.target.value);
//           setButtonVisible("inline-block");
//           setAlert(false);
//           // taskTitle == "" && setButtonVisible("none")
//         }}
//         value={taskTitle}
//       />

//       <button
//         onClick={(e) => {
//           e.preventDefault();
//           taskTitle === "" && setAlert(true);
//           if (taskTitle !== "") {
//             setAlert(false);
//             if (flagForEditing) {
//               flagForEditing.title = taskTitle;
//               setTaskList(
//                 taskList.map((value, index) => {
//                   if (value.id === flagForEditing.id) {
//                     value = flagForEditing;
//                   }
//                   return value;
//                 })
//               );

//               setFlagForEditing(0);
//             } else {
//               setTaskList([
//                 ...taskList,
//                 {
//                   title: taskTitle,
//                   id: counter,
//                 },
//               ]);

//               setCounter(++counter);
//             }

//             setTaskTitle("");
//             setButtonVisible("none");
//           }
//         }}
//       >
//         Add Task
//       </button>
//       <button onClick={(e)=>{
//         e.preventDefault();
//         removeCheckedElements();
//       }}>Remove Checked Elements</button>
//       <br />
//       {alert && (
//         <p
//           style={{
//             border: "1px solid black",
//             display: "inline-block",
//             margin: "8px 12px",
//             padding: "5px 10px",
//             fontWeight: "600",
//             borderRadius: "8px",
//             backgroundColor: "whitesmoke",
//             boxShadow: "2px 3px 8px",
//             position: "absolute",
//             right: "12px",
//           }}
//         >
//           Plese Enter Charecters!!!!
//         </p>
//       )}

//       <div>
//         {taskList.map((value, index) => {
//           return (
//             <div style={{ display: "flex" }} key={index + value.id}>
//               <h2> {value.title} </h2>
//               <input type="checkbox" value={value.title} checked = {value.checked} onChange={() => checkElement(index) }/>
//               <button
//                 onClick={(e) => {
//                   e.preventDefault();
//                   deleteTask(index);
//                 }}
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={(e) => {
//                     e.preventDefault();
//                     setTaskTitle(taskList[index].title);
//                     setFlagForEditing(taskList[index]);
//                     setButtonVisible("inline-block");
//                 }}
//               >
//                 Edit
//               </button>
//               {flagForEditing.id === value.id &&
//               <button
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setTaskTitle("");
//                   setFlagForEditing(0);
//                   setButtonVisible("none");
//                 }}
//                 style={{ display: buttonVisible }}
//               >
//                 Cancel
//               </button>
//         }
//             </div>
//           );
//         })}
//         {/* {false && <Navbar/>}
//         {false ? <h1>yes this is true part</h1> : <h1>no, this is false part</h1>} */}
//       </div>
//       {/* {(!apiData.length) ? (
//         <h1>there is no data</h1>
//       ) : (
//         <>

//           {apiData.map((val, index) => {
//             return (
//               <div key={index}>
//                 <h1>{val.name}</h1>
//               </div>
//             );
//           })}

//         </>
//       )}
//       <button onClick={(e)=>{
//         e.preventDefault();
//         Submit();
//       }}>Submit</button> */}
//     </>
//   );
// }
export default Notes;
