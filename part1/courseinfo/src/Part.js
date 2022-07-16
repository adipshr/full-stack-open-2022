import React from "react";

export default function Part(props) {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
}
