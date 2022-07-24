import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelGood = () => setGood(good + 1);
  const handelBad = () => setBad(bad + 1);
  const handelNeutral = () => setNeutral(neutral + 1);

  let total = good + bad + neutral;
  let average = (good - bad) / total;
  let positive = (good / total) * 100;

  let stats = {
    goodRating: good,
    badRating: bad,
    neutralRating: neutral,
    totalRating: total,
    averageRating: average,
    positivePer: positive,
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <br />
      <Button handelClick={handelGood} text={"Good"} />
      <Button handelClick={handelNeutral} text={"Neutral"} />
      <Button handelClick={handelBad} text={"Bad"} />
      <br />
      <h1>Statistics</h1>
      <Statistics stats={stats} />
    </div>
  );
};

export default App;
