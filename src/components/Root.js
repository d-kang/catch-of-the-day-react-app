import React from 'react'
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './App';
import StorePicker from './StorePicker'
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />

      </div>
    </BrowserRouter>
  )

}

export default Root;
