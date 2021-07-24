import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [data, setData] = useState(2);
  const { id, name, job, image, text } = people[data];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const randomNumber = () => {
    let random = Math.floor(Math.random() * people.length);
    console.log(random);
    if (random === data) {
      random = data + 1;
    }
    return setData(checkNumber(random));
  };

  return (
    <article className="review" key={id}>
      <div>
        <div className="img-container">
          <img src={image} alt="" className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button
            className="prev-btn"
            onClick={() => setData(checkNumber(data - 1))}
          >
            <FaChevronLeft />
          </button>
          <button
            className="next-btn"
            onClick={() => setData(checkNumber(data + 1))}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <button className="random-btn" onClick={randomNumber}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
