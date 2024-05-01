import { useState } from "react";
import "./App.css";
import Comp1 from "./comp1/comp1";

function App() {
  const [ toDo, setToDOs ] = useState([]);
  function callback(value) {
    console.log(value);
  }
  

  function getToDos() {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        setToDOs(res);
      });
  }

  return (
    <div className="App">
      <Comp1 name="Sharath" age={28} callback={callback}></Comp1>
      <button onClick={getToDos}> Get to Do</button>
    </div>
  );
}

export default App;
