import React from "react";

// Course Component
export default function Course(props) {
  const { course } = props;

  const totalExercise = (sum, curr) => sum + curr.exercises;

  let sum = course.parts.reduce(totalExercise, 0);

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
