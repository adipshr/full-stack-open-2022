import { useState } from "react";
import Button from "./Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelGood = () => setGood(good + 1);
  const handelBad = () => setBad(bad + 1);
  const handelNeutral = () => setNeutral(neutral + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <br />
      <Button handelClick={handelGood} text={"Good"} />
      <Button handelClick={handelNeutral} text={"Neutral"} />
      <Button handelClick={handelBad} text={"Bad"} />
      <br />
      <h1>Statistics</h1>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>

    </div>
  );
};

export default App;
