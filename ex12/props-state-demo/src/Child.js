import React from 'react';

function Child({ name, age }) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Child;
