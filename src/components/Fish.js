import React from 'react'

export default class Fish extends React.Component {
  render() {
    // const details = this.props.details;
    const { details } = this.props;
    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name}/>
        {details.name}
      </li>
    )
  }
}
