import React from "react";

export default function Course(props) {
  const { course } = props;
  let sum = 0;
  course.parts.map((part) => (sum += part.exercises));  

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <b>Total of {sum} exercises</b>
    </div>
  );
}
