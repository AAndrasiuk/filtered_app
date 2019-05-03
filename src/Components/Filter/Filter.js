import React from "react";
import "./Filter.css";

export default function Filter(props) {
   return (
      <div className="filter" onClick={props.setPreset}>
         <img src={props.imgSrc} alt="filter" />
         <h4>{props.title}</h4>
      </div>
   );
}
