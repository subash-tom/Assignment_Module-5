import React, { useState } from "react";
import "./AverageStyle.css";

function Average() {
  const [name, setName] = useState("");
  const [m1, setM1] = useState("");
  const [m2, setM2] = useState("");
  const [m3, setM3] = useState("");
  const [m4, setM4] = useState("");
  const [m5, setM5] = useState("");

  const [total, setTotal] = useState("");
  const [average, setAverage] = useState("");
  const [result, setResult] = useState("");

  function calculate() {
    let sum = Number(m1) + Number(m2) + Number(m3) + Number(m4) + Number(m5);

    let avg = sum / 5;

    setTotal(sum);
    setAverage(avg);

    if (avg >= 50) {
      setResult("Pass");
    } else {
      setResult("Fail");
    }
  }

  return (
    <div className="container">
      <h1>Average Mark Calculator</h1>

      <input
        type="text"
        placeholder="Student Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Subject 1"
        onChange={(e) => setM1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Subject 2"
        onChange={(e) => setM2(e.target.value)}
      />

      <input
        type="number"
        placeholder="Subject 3"
        onChange={(e) => setM3(e.target.value)}
      />

      <input
        type="number"
        placeholder="Subject 4"
        onChange={(e) => setM4(e.target.value)}
      />

      <input
        type="number"
        placeholder="Subject 5"
        onChange={(e) => setM5(e.target.value)}
      />

      <br />

      <button onClick={calculate}>Calculate</button>

      <h3>Name: {name}</h3>
      <h3>Total: {total}</h3>
      <h3>Average: {average}</h3>
      <h3>Result: {result}</h3>
    </div>
  );
}

export default Average;
