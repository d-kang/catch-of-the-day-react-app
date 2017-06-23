import React from 'react'

export default class AddFishForm extends React.Component {
  createFish(e) {
    e.preventDefault();
    console.log('Gonna make some fish!');
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    }
    this.props.addFish(fish)
    this.fishForm.reset();
  }
  render() {
    return (
      <div>
        <form ref={input => this.fishForm = input} action="" className="fish-edit" onSubmit={ e => this.createFish(e) }>
          <input ref={ input => this.name = input } type="text" placeholder="Fish Name"/>
          <input ref={ input => this.price = input } type="text" placeholder="Fish Price"/>
          <select ref={ input => this.status = input } name="" id="">
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <div className="other">
            <textarea ref={ input => this.desc = input } placeholder="FishDesc"></textarea>
            <input ref={ input => this.image = input } type="text" placeholder="Fish Image"/>
            <button type="submit">+ Add Item</button>
          </div>
        </form>
      </div>
    )
  }
}
