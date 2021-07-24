import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [isBtn, setIsBtn] = useState(false);
  const btnShow = () => {
    setIsBtn(!isBtn);
  };
  return (
    <>
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={btnShow}>
            {isBtn ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {isBtn && <p>{info}</p>}
      </article>
    </>
  );
};

export default Question;
