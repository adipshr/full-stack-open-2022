import React from "react";

export default function StatisticLine({ text, value }) {
  return (
    <div>
      <p>
        {text} : {value}
      </p>
    </div>
  );
}
