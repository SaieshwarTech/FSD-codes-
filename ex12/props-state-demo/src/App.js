import React, { useState } from 'react';
import Child from './Child';

function App() {
  // State to manage age
  const [age, setAge] = useState(20);

  const handleBirthday = () => {
    setAge(age + 1); // update state
  };

  return (
    <div>
      <h1>Props and State Demo</h1>
      {/* Passing props to child */}
      <Child name="Prashant" age={age} />
      <button onClick={handleBirthday}>Increase Age</button>
    </div>
  );
}

export default App;
