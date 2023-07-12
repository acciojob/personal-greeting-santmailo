
import React from "react";
import './../styles/App.css';

const App = () => {
  const [task, setTask] = React.useState(""); 

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <input type="text" onChange={handleChange} />
        <p>{task}</p>
    </div>
  )
}

export default App
