import React from "react";
import StatisticLine from "./StatisticLine";

export default function Statistics({ stats }) {
  if (stats.totalRating === 0) {
    return <p>No Feedback Given</p>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine text={"Good"} value={stats.goodRating} />
        <StatisticLine text={"Neutral"} value={stats.neutralRating} />
        <StatisticLine text={"Bad"} value={stats.badRating} />
        <StatisticLine text={"All"} value={stats.totalRating} />
        <StatisticLine text={"Average"} value={stats.averageRating} />
        <StatisticLine text={"Percentage"} value={`${stats.positivePer} %`} />
      </tbody>
    </table>
  );
}
