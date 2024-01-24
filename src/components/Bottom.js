import React from "react";
import "./Bottom.css";
import minus from "./minus.svg";

const Bottom = (props) => {
  return (
    <div className="drop-down">
      <div class="triangle-up"></div>
      <div className="top-selector">
        <div className="minus" onClick={props.decrementMecca}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="minus-icon"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
          </svg>
        </div>
        <div className="mecca-center">
          <p>{props.mecca}</p> <p>Mecca</p>
        </div>
        <div className="plus-icon" onClick={props.meccaIncrement}>
          <svg
            className="plus-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
      <div className="bottom-selector">
        <div className="minus" onClick={props.decrementMadinah}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="minus-icon"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
          </svg>
        </div>
        <div className="mecca-center">
          <p>{props.madinahNight}</p> <p>Madinah</p>
        </div>
        <div className="plus-icon" onClick={props.madinahIncrement}>
          <svg
            className="plus-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
