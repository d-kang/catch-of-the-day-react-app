import React from 'react';
import { Header } from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes'
import Fish from './Fish'
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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" fishes={this.state.fishes}/>

        </div>

        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
        <button onClick={e => this.addFish(e)}></button>
      </div>
    )
  }
}
