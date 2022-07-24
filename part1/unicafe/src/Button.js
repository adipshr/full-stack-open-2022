import React from "react";

export default function Button({ handelClick, text }) {
  return <button onClick={handelClick}>{text}</button>;
}
