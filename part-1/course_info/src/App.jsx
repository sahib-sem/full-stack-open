const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts.reduce((total, b) => total + b.exercises, 0)} />
    </div>
  );
};

const Header = ({ course }) => <h1>{course}</h1>;
const Content = ({ parts }) => {
  console.log(parts);
  return (
    <>
      {parts.map((ele) => (
        <Part key={ele.name} part={ele.name} exercises={ele.exercises} />
      ))}
    </>
  );
};
const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);
const Total = ({ total }) => <p>Number of exercises {total}</p>;
export default App;
