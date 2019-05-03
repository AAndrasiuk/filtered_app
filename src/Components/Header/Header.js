import React from "react";
import "./Header.css";

export default function Header(props) {
   return (
      <header>
         <img src={props.src} alt="logo" />
         <h1>{props.title}</h1>
      </header>
   );
}
