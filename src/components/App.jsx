import React from "react";

function App() {
  const options = { hour12: false };
  const currentTime = new Date().toLocaleTimeString(undefined, options);

  const [time, setTime] = React.useState(currentTime);

  function UpdateTime() {
    const newTime = new Date().toLocaleTimeString(undefined, options);
    setTime(newTime);
  }

  setInterval(UpdateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={UpdateTime}>Get Time</button>
    </div>
  );
}

export default App;
