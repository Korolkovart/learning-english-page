import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Audio from "./Components/Audio/Audio";
import Form1 from "./Components/Part1/Form1/Form1";
import Form2 from "./Components/Part2/Form2/Form2";

function App() {
  const [isForm, setIsForm] = useState(true);

  return (
    <div className='wrapper'>
      <Header />
      <Audio className='audio'/>
      <div className="partBtn">
        <button  className='btn' onClick={() => setIsForm(true)}>Part One</button>
        <button className='btn' onClick={() => setIsForm(false)}>Part Two</button>
      </div>
      {isForm ? <Form1 /> : <Form2 />}
    </div>
  );
}

export default App;
