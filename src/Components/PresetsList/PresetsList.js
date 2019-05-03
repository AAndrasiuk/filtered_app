import React from "react";
import Preset from "../Preset/Preset";
import "./PresetsList.css";

export default function PresetsList(props) {
   const presets = props.presets.map((preset, id) => (
      <Preset
         imgSrc={preset.src}
         title={preset.title}
         setPreset={() => props.setPreset(id)}
         key={id}
      />
   ));

   return (
      <div className="PresetsList">
         <button className="default" onClick={props.setDefault}>
            Use Default
         </button>
         {presets}
      </div>
   );
}
