import React, { forwardRef, useEffect, useRef, useState } from "react";
import "./style.css";

let number = 0;

const CompoTabei = (prop, ref) => {
  let [name, setname] = useState();

  const addinputval = () => {
    let bal = ref.current.value;
    setname((name = bal));
  };

  return (
    <div className="form">
      <h4>حدث کلمه</h4>

      <input
        placeholder="تایپ کنید"
        type="text"
        id="demo"
        autoComplete="off"
        ref={ref}
      />
      <br />

      <div className="btn-box">
        <button onClick={addinputval}>ثبت</button>
        <button
          onClick={() => {
            ref.current.value = "";
          }}
        >
          مخفی
        </button>
      </div>

      <br />
      <span className="counter">{number++}</span>
    </div>
  );
};

export default forwardRef(CompoTabei);
