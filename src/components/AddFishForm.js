import React from 'react'

export default class AddFishForm extends React.Component {

  render() {
    return (
      <div>
        <form action="" className="fish-edit">
          <input type="text" placeholder="Fish Name"/>
          <input type="text" placeholder="Fish Price"/>
          <select name="" id="">
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea placeholder="FishDesc"></textarea>
          <input type="text" placeholder="Fish Image"/>
          <button type="submit">+ Add Item</button>
        </form>
      </div>
    )
  }
}
