import React from 'react';
import Fish from './Fish'
export class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day
        </h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>

        <ul className="list-of-fishes">
          {
            Object
              .keys(this.props.fishes)
              .map(key => <Fish />)
          }
          {console.log(this)}
        </ul>
      </header>
    )
  }

}
