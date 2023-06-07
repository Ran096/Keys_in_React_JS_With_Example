import "./styles.css";

export default function App() {
  const Number = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ];
  const users = [
    {
      name: "Ranjeet Patel",
      age: 26
    },
    {
      name: "Sandeep Patel",
      age: 28
    },
    {
      name: "Sulekha Patel",
      age: 45
    },
    {
      name: "Neetu Patel",
      age: 27
    },
    {
      name: "Mr Kanchhedi Patel",
      age: 56
    }
  ];
  return (
    <div className="App">
      {/*  {Number.map((num, index) => (
        <li keys={index}>{num} </li>
      ))} */}
      {users.map((user, index) => (
        <>
          <li keys={index}>{user.name}</li>
          <li>{user.age}</li>
        </>
      ))}
    </div>
  );
}
