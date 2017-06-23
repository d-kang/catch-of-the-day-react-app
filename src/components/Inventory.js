import React from 'react'
import AddFishForm from './AddFishForm'

export default class Inventory extends React.Component {
  render() {
    return (
      <div id="inventory">
        <h1>Inventory</h1>
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}
