import React from 'react';
import { Header } from './Header';
import Order from './Order';
import Inventory from './Inventory';


export default class App extends React.Component {
  constructor() {
    super();
    // initial state
    this.state = {
      fishes: {},
      order: {}
    }
  }

  // it should get state from child components
  addFish(fish) {
    // update our state (best practice is to create a copy of state and then update)
    const fishes = { ...this.state.fishes };
    // add in our new fish
      // needs unique key, will use timestamp
      const timestamp = Date.now();
      fishes[timestamp] = 1
      this.state.fishes = fishes;
      console.log({fish, 'this.state.fishes': this.state.fishes})
    //set state
    // example of bad practice
      // this.state.fishes.fish1 = 1;
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory />
        <button onClick={e => this.addFish(e)}></button>
      </div>
    )
  }
}
