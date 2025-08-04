import { useState } from "react";

const getRandom = (start, end) => {
  return Math.floor(Math.random() * (end - start + 1) + start);
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const [selected, setSelected] = useState(0);
  const highestVote = Math.max(...votes);
  const mostVoted = anecdotes[votes.indexOf(highestVote)];

  return (
    <div>
      <h1>Anectode of the day</h1>
      <div>{anecdotes[selected]}</div>
      <p>has {votes[selected]} votes</p>
      <div>
        <button
          onClick={() => {
            const newVotes = [...votes];
            newVotes[selected] += 1;
            setVotes(newVotes);
          }}
        >
          vote
        </button>
        <button onClick={() => setSelected(getRandom(0, anecdotes.length - 1))}>
          next anectode
        </button>
      </div>

      <h1>Anectode with the most vote</h1>
      {mostVoted}
    </div>
  );
};

export default App;
