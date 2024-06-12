import React from "react";

function Pr1() {
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();

          document.getElementById("b1").style.backgroundColor = "red";
          console.log("button clicked and change background color");
        }}
      >
        Color Change
      </button>
      <button
        onMouseEnter={(e) => {
          e.preventDefault();

          document.getElementById("b1").style.backgroundColor = "white";
          console.log(
            "when cursor enter on cancle button chnage background color"
          );
        }}
      >
        Cancel
      </button>
      <h1
        id="h1"
        onCopy={(e) => {
          e.preventDefault();
          document.getElementById("h1").style.color = "red";
          console.log("when copy taxt then change text color");
        }}
        onMouseOver={(e) => {
          e.preventDefault();
          document.getElementById("show").style.display = "block";
          console.log("when cursor on h1 then how new h1 ");
        }}
      >
        onCopy event
      </h1>
      <h1
        id="show"
        style={{ display: "none" }}
        onMouseLeave={(e) => {
          e.preventDefault();
          document.getElementById("show").style.display = "none";
        }}
      >
        show heading
      </h1>
      <h1
        onAbort={(e) => {
          e.preventDefault();
          console.log("onAbort coled!!!");
        }}
      >
        onAbort
      </h1>
      <input
        type="text"
        id="txt1"
        onBlur={(e) => {
          e.preventDefault();
          e.target.value = e.target.value.toUpperCase();
        }}
      />{" "}
      <h1>convert lovecase to uppercase</h1>
      <br />
      <input
        type="text"
        onChange={(e) => {
          e.preventDefault();
          console.log(e.target.value);
        }}
      />{" "}
      <h1>check on console</h1>
      <h1
        id="chk"
        onDoubleClick={(e) => {
          e.preventDefault();
          document.getElementById("chk").innerText = document
            .getElementById("chk")
            .innerText.toUpperCase();
        }}
      >
        scascnvdjkvndl
      </h1>
      <input
        type="text"
        onFocus={(e) => {
          e.preventDefault();
          console.log("in onfocus!!!");
        }}
      />{" "}
      onfocus
      <br />
      <input
        type="text"
        onInput={(e) => {
          e.preventDefault();
          console.log("in oninput");
        }}
      />
      oninput
      <br />
      <button
        onKeyDown={(e) => {
          e.preventDefault();
          console.log("in onkeydown");
        }}
      >
        click
      </button>
      onkeydown
    </>
  );
}

export default Pr1;
