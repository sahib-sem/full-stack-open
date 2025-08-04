import { useState } from "react";

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;
const StatisticLine = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
);
const Statistics = ({ stats }) => {
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          {stats.map(({ text, value }) => {
            return (
              <tr>
                <td>{text}</td>
                <td>{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = bad + good + neutral;

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text={"good"} />
      <Button onClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button onClick={() => setBad(bad + 1)} text={"bad"} />

      <Statistics
        stats={[
          { text: "good", value: good },
          { text: "neutral", value: neutral },
          { text: "bad", value: bad },
          { text: "all", value: good + neutral + bad },
          { text: "average", value: total / 3 },
          {
            text: "positive",
            value: ((total ? good / total : 0) * 100).toString() + "%",
          },
        ]}
      />
    </div>
  );
};

export default App;
