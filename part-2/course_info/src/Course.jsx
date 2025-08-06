const Course = ({ course }) => {
  const total = course.parts.reduce((a, b) => a + b.exercises, 0);
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </>
  );
};

const Header = ({ course }) => <h1>{course}</h1>;
const Content = ({ parts }) => {
  console.log(parts);
  return (
    <>
      {parts.map((ele) => (
        <Part key={ele.id} part={ele.name} exercises={ele.exercises} />
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


export default Course;