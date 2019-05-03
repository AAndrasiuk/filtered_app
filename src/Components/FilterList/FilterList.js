import React from "react";
import Filter from "../Filter/Filter";
import "./FilterList.css";

export default function FilterList(props) {
   const presets = props.presets.map((preset, id) => (
      <Filter
         imgSrc={preset.src}
         title={preset.title}
         setPreset={() => props.setPreset(id)}
         key={id}
      />
   ));

   return (
      <div className="filterList">
         <button className="default" onClick={props.setDefault}>
            Use Default
         </button>
         {presets}
      </div>
   );
}
