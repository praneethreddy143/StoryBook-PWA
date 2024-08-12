import React from "react";
import "./Button.css";
export interface ButtonProps {
  label:string;
  style?:React.CSSProperties;
  position?:position;
}

type position = "Top"| "Left" | "Right" | "Bottom";

const defaultPosition:position = "Top";

const Button: React.FC<ButtonProps> = ({label,style, position= defaultPosition}) => {

    const positionStyle:React.CSSProperties = {
        position: "absolute",
        [position.toLowerCase()]: "0",
        };

    style = {...style, ...positionStyle};


  return <button className="btn" style={style}>{label}</button>;
};

export default Button;