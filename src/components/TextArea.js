import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState();
  const [text2, setText2] = useState();
  const clickUpFunc = () => {
    setText(text.toUpperCase());
  };

  const clickLoFunc = () =>{
    setText(text.toLowerCase());

  }
  const clickClearPrevFunc = () =>{
    setText2("")
  }
  const clickClearTextFunc = () =>{
    setText("")
  }
  const clickGenFunc = () =>{
    let b = ["!","#","$","%","&"]
    let c = Math.floor( Math.random() *b.length.toString(36))
    let d = b[c]
    let a = Math.random().toString(36).substring(2,7) + Math.random().toString(36).substring(2,3).toUpperCase()+ Math.floor(Math.random() * 10).toString(8)+ d
    setText(a)
  }
  const clickUpChange = (event) => {
    setText(event.target.value);
    setText2(event.target.value)
  };

  return (
    <>
      <h2 id = "colorProp">{props.heading}</h2>
      <div className="mb-3">
        <label htmlFor="form-control" className="form-label"></label>
        <textarea
          onChange={clickUpChange}
          value={text2}
          className="form-control "
          id="box"
          rows="8"
        ></textarea>
        <div>
          <button className="btn btn-primary my-3" onClick={clickUpFunc}>
            CONVERT TO UPPERCASE
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={clickLoFunc}>
            CONVERT TO LOWERCASE
          </button>
          <button className="btn btn-primary my-3" onClick={clickGenFunc}>
            PASSWORD GENERATOR
          </button>
          <button className="btn btn-primary my-3 mx-3 " onClick={clickClearPrevFunc}>
            CLEAR PREVIEW AREA
          </button>
          <button className="btn btn-primary my-3 " onClick={clickClearTextFunc}>
            CLEAR TEXT AREA
          </button>

        </div>
      </div>
      <div>
        <div className="my-3">
          <h2 id = "previewColor">PREVIEW-OUTPUT</h2>
        </div>

        <div className="form-floating my-3 border border-info">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            rows = "20"
            resize="none"
            value = {text}
            readOnly={true}
          ></textarea>
        </div>
      </div>
    </>
  );
}
