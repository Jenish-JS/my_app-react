// clock
  // let [date, setDate] = useState(new Date());
  // setInterval(() => {
  //   setDate(new Date())
  // }, 1000);
  // return (
  //   <>
  //   {date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() }
  //   </>
  // );


  //for selected color
  // return(
  //   <>
  //   <input type = "color" id = "hhee"></input>
  //   <button onClick={(e) => {
  //     e.preventDefault();
  //     document.getElementById('hello').style.backgroundColor = document.getElementById('hhee').value;
  //   }}>
  //     press here for Change
  //   </button>
  //   </>
  // );


  // for random color
  // return (
  //   <>
  //     <button onClick={(e) => {
  //       e.preventDefault();
  //       let red = Math.floor(Math.random() * 255);
  //       let blue = Math.floor(Math.random() * 255);
  //       let green = Math.floor(Math.random() * 255);
  //       document.getElementById('hello').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  //     }}>
  //       Change Color
  //     </button>
  //   </>
  // );

  //change hello to world and world to hello
  // let [target, changeTarget] = useState(`Hello`);
  // return (
  //   <>
  //     <p id = "change"> {target} </p>
  //     <button onClick={(e) => {
  //       e.preventDefault();
  //       (target == `Hello`) ? changeTarget(`World`) : changeTarget(`Hello`);
  //     }}>
  //       Press for Change
  //     </button>
  //   </>
  // );


  //change the value of textbox
  // let [target, changeTarget] = useState();

  // return(
  //   <>
  //     <input type="textarea" id='box'></input>
  //     <button onClick={(e) => {
  //       e.preventDefault();
  //       changeTarget(document.getElementById('box').value);
  //     }}>Submit</button>
  //     <div id = "answer"> {target} </div>
  //   </>
  // );


// creating view from multiple object
  // return (
  //   <>
  //     {data.map((value) => {
  //       let date = new Date(value.createdAt)
  //       return (
  //         <div className = 'format' key = {value.id}>
  //           <img src = {value.avatar}></img>
  //           <div className = 'child'>
  //             <div>Id : {value.id}</div>
  //             <div>Name : {value.name} </div>
  //             <div>Time : {date.toLocaleDateString('en-GB')}  {date.toLocaleTimeString()}</div>
  //           </div>
  //         </div>
  //       );
  //     })}

  //   </>
  // )

// to do list
  // let [taskList, setTaskList] = useState([]);
  // let [taskTitle, setTaskTitle] = useState(``);
  // let [counter, setCounter] = useState(0);
  // let [flagForEditing, setFlagForEditing] = useState(0);
  // let [show, setShow] = useState("none");


  // function removeElement(index) {
  //   taskList = taskList.filter((xValue, yIndex) => {
  //     return yIndex != index;
  //   })
  //   setTaskList(taskList)
  // }
  // return (
  //   <>
  //     <input
  //       type="text"
  //       placeholder="Enter value here"
  //       onChange={(e) => {
  //         e.preventDefault();

  //         setTaskTitle(e.target.value);
  //         setShow("inline-block")
  //       }}
  //       value={taskTitle}
  //     />

  //     <button
  //       onClick={(e) => {
  //         e.preventDefault();

  //         if (flagForEditing) {
  //           flagForEditing.title = taskTitle
  //           setTaskList(taskList.map((value, index) => {
  //             if (value.id === flagForEditing.id) {
  //               value = flagForEditing
  //             }
  //             return value
  //           }))
  //           setShow("none")
  //           setFlagForEditing(0)
  //         } else {
  //           setTaskList([
  //             ...taskList,
  //             {
  //               title: taskTitle,
  //               id: counter,
  //             },
  //           ]);
  //           setCounter(++counter);
  //           setShow("none")
  //         }
  //         setTaskTitle(``);
  //       }}
  //     >
  //       Submit
  //     </button>

  //     <button style={{display: show}} onClick={(e) => {
  //       e.preventDefault();

  //       setTaskTitle(``);
  //       setFlagForEditing(0);
  //       setShow("none")
  //     }} > Cancel </button>

  //     <div>
  //       {taskList.map((value, index) => {
  //         return (

  //           <div style={{ display: "flex" }} key={index + value.id}>
  //             <h2> {value.title} </h2>
  //             <button
  //               onClick={(e) => {
  //                 e.preventDefault();
  //                 removeElement(index);
  //               }}
  //             >
  //               Delete
  //             </button>
  //             <button
  //               onClick={(e) => {
  //                 e.preventDefault();

  //                 setShow("inline-block")
  //                 setTaskTitle(taskList[index].title);
  //                 setFlagForEditing(taskList[index]);

  //               }}
  //             >
  //               Edit
  //             </button>
  //           </div>

  //         );
  //       })}
  //     </div>
  //   </>
  // );





  // final todo list
  // let [taskList, setTaskList] = useState([]);
  // let [taskTitle, setTaskTitle] = useState(``); 
  // let [counter, setCounter] = useState(0); // for unique id
  // let [flagForEditing, setFlagForEditing] = useState(0); // single json which is in editing form
  // let [show, setShow] = useState("none"); // for show cancel button display property
  // let [alertBox, setAlertBox] = useState(false);  // for alert box
  // let [personal, setPersonal] = useState(false); // for auth.. of cancel & right side of submit button on edit

  // //for delete perticular element 
  // function removeElement(index) {
  //   taskList = taskList.filter((xValue, yIndex) => {
  //     return yIndex != index;
  //   })
  //   setTaskList(taskList)
  // }

  // //for change the json when we click checkbox (from openAi)
  // function toggleCheck(index) {
  //   const newTaskList = [...taskList];
  //   newTaskList[index].checked = !newTaskList[index].checked;
  //   setTaskList(newTaskList);
  // }

  // //for make all checkbox checked
  // function selectAll(){
  //   const select = taskList.map(task => ({...task, checked: true}));
  //   setTaskList(select);
  // }

  // //for remove checked elements
  // function removeCheckedElements() {
  //   setTaskList(taskList.filter(task => !task.checked));
  // }
  // return (
  //   <>
  //     <input
  //       type="text"
  //       placeholder="Enter value here"
  //       onChange={(e) => {
  //         e.preventDefault();

  //         setTaskTitle(e.target.value);
  //         setShow("inline-block")
  //         setAlertBox(false)
  //       }}
  //       value={taskTitle}
  //     />

  //     <button
  //       onClick={(e) => {
  //         e.preventDefault();

  //         if (taskTitle != ``) {
  //           if (flagForEditing) {
  //             flagForEditing.title = taskTitle
  //             setTaskList(taskList.map((value, index) => {
  //               if (value.id === flagForEditing.id) {
  //                 value = flagForEditing
  //               }
  //               return value
  //             }))
  //             setShow("none")
  //             setFlagForEditing(0)
  //           } else {
  //             setTaskList([
  //               ...taskList,
  //               {
  //                 title: taskTitle,
  //                 id: counter,
  //                 checked: false,
  //               },
  //             ]);
  //             setCounter(++counter);
  //             setShow("none")
  //           }
  //           setTaskTitle(``);
  //         }
  //         else {
  //           setAlertBox(true)
  //         }
  //       }}
  //     >
  //       Submit
  //     </button>

  //     {personal == false && <button style={{ display: show }} onClick={(e) => {
  //       e.preventDefault();

  //       setTaskTitle(``);
  //       setFlagForEditing(0);
  //       setShow("none")
  //     }}> Cancel </button>}

  //     <button onClick={(e) => {
  //       e.preventDefault();

  //       removeCheckedElements();
  //     }} >
  //       Remove
  //     </button> 
  //     <button onClick={(e) => {
  //       e.preventDefault();

  //       selectAll();
  //     }}>
  //       Select All
  //     </button>

  //     {alertBox && <div style={{ display: "inline-block" }} className="alertBx"> Please enter some value in the box!!! </div>}

  //     <div>
  //       {taskList.map((value, index) => {
  //         return (

  //           <div style={{ display: "flex" }} key={index + value.id}>
  //             {/* <h2> {value.title} </h2> */}
  //             <input type="checkbox" value={value.title} checked = {value.checked} onChange={() => toggleCheck(index) }/>{value.title}
  //             <button
  //               onClick={(e) => {
  //                 e.preventDefault();
  //                 removeElement(index);
  //               }}
  //             >
  //               Delete
  //             </button>
  //             <button
  //               onClick={(e) => {
  //                 e.preventDefault();

  //                 setShow("inline-block")
  //                 setTaskTitle(taskList[index].title);
  //                 setFlagForEditing(taskList[index]);
  //                 setPersonal(true);

  //               }}
  //             > 
  //               Edit
  //             </button>
  //             {flagForEditing.id == value.id && <button style={{ display: show }} onClick={(e) => {
  //               e.preventDefault();

  //               setTaskTitle(``);
  //               setFlagForEditing(0);
  //               setPersonal(false);
  //               setShow("none")
  //             }}> Cancel </button>}

  //           </div>

  //         );
  //       })}
  //     </div>
  //   </>
  // );

  //creating view using api data
  // let [apiData, setApiData] = useState([]);

  // function callingApiData() {
  //   try {
  //     axios.get("https://6621f18527fcd16fa6c84bcc.mockapi.io/id").then((data) => {
  //       setApiData(data.data);
  //     }).catch((err) => {
  //       setApiData([]);
  //     })
  //   } catch (error) {
  //     setApiData([])
  //   }
  // }

  // useEffect(() => {
  //   callingApiData()
  // }, []);

  // return (
  //   <>
  //     <button type="Submit" onClick={() => {
  //       callingApiData();
  //     }}> Reload </button>

  //     {(!apiData.length) ? <h1>there is no data</h1> :
  //       apiData.map((value, index) => {
  //         return (<div key={index}>
  //           <h1> {value.name} </h1>
  //         </div>);
  //       })
  //     }

  //   </>
  // );