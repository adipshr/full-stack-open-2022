import React from "react";

export default function Statistics({stats}) {
  return (
    <div>
      <p>Good : {stats.goodRating}</p>
      <p>Neutral : {stats.neutralRating}</p>
      <p>Bad : {stats.badRating}</p>
      <p>All : {stats.totalRating}</p>
      <p>Average : {stats.averageRating}</p>
      <p>Percentage : {stats.positivePer}%</p>
    </div>
  );
}
