import React from 'react';
let jsx = (that) => (
<div>
  <h1>Hello, World!</h1>
  <h2>it is {that.state.date.toLocaleTimeString()}</h2>
</div>
);

export default jsx;
