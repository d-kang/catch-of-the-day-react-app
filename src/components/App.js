import React from 'react';
import { Header } from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes'

export default class App extends React.Component {
  constructor() {
    super();
    // initial state
    this.state = {
      fishes: {},
      order: {}
    }

    this.addFish = this.addFish.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.addToOrder = this.addToOrder.bind(this)

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

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    })
  }
  addToOrder(key) {
    // take a copy of our state
    const order = { ...this.state.order }
    // update ir add the new number if fish ordered
    order[key] = order[key] + 1 || 1;
    // update our state
    this.setState({ order })
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" fishes={this.state.fishes} addToOrder={this.addToOrder}/>

        </div>

        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
        {/* {<button onClick={e => this.addFish(e)}></button>} */}
      </div>
    )
  }
}
