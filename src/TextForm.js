// rfc
import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("uppercase wase clickes!!!" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleonChange = (event)=>{
        setText(event.target.value);
    }
    const [text,setText] = useState('enter text here');
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Conver to uppercase</button>
    </div>
  );
}
