import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component{
  render() {
    return(
      <div className="amap">
        <Header tagline="Des bons légumes"/>
        <Order></Order>
        <Inventory></Inventory>
      </div>
      )
  }
}

export default App;
