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
    // example of bad practice
      // this.state.fishes.fish1 = 1;
    // update our state (best practice is to create a copy of state and then update)
    const fishes = { ...this.state.fishes };
    // add in our new fish
      // needs unique key, will use timestamp
      const timestamp = Date.now();
      fishes[timestamp] = fish;

      console.log({fish, 'this.state.fishes': this.state.fishes})
    //set state
    // you could do this.state.fishes = fishes; but it is better to use setState method
    // setState will tell React to rerender
    // you only pass what has updated because there could be several things in your state and React doesnt want to have to rerender all of it if you already know what part of your state you want to rerender
    // the one piece of state that has changed here is the fishes so we pass that into setState
    // react will update that state for us everywhere that that state is living
    this.setState({ fishes })
    console.log({fish, 'this.state.fishes': this.state.fishes})



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
