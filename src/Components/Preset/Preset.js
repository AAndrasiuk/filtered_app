import React from "react";
import "./Preset.css";

export default function Preset(props) {
   return (
      <div className="Preset" onClick={props.setPreset}>
         <img src={props.imgSrc} alt="filter" />
         <h4>{props.title}</h4>
      </div>
   );
}
