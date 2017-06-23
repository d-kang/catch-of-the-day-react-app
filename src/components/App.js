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

    this.addFish = this.addFish.bind(this)
  }

  // it should get state from child components
  addFish(fish) {
    // update our state (best practice is to create a copy of state and then update)
    const fishes = { ...this.state.fishes };
    // add in our new fish
      const timestamp = Date.now();
      fishes[timestamp] = fish;
    //set state
    this.setState({ fishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
        <button onClick={e => this.addFish(e)}></button>
      </div>
    )
  }
}
