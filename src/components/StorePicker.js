import React from 'react';
import { getFunName } from '../helpers';
export default class StorePicker extends React.Component {
  constructor(props) {
    super(props);
    this.goToStore = this.goToStore.bind(this);
  }

  goToStore(e) {
    e.preventDefault()
    console.log('you changed the url')
    console.log(e)
    console.log(this);
    // grab text from box
    console.log(this.storeInput.value);
    // second we transition from / to /store/:storeId

  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore} >
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => this.storeInput = input} />
        <button type="submit">Visit Store →</button>
      </form>
    )

  }
}
