import React, { Component } from 'react';
import Sim from './Sim';

class App extends Component {
  state = {
    sims : [
      { name: 'S', age: 22, belt: 'back', id: 1 },
      { name: 'Sa', age: 23, belt: 'white', id: 2 },
      { name: 'Sb', age: 24, belt: 'pink', id: 3 },
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My First App</h1>
        <p>Welcome</p>

        <Sim sims={this.state.sims} />
      </div>
    );
  }
}

export default App;
