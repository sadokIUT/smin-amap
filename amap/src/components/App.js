import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      veggies : {}
    }
    this.addVeggie = this.addVeggie.bind(this);
  }
  addVeggie(veggie){
    //mettre a jour le state
    const veggies = {...this.state.veggies};
    // ajouter nos nouveaux legumes
    const timestamp = Date.now();
    veggies[`veggie-${timestamp}`] = veggie;
    // appliquer le state
    this.setState({veggies});
  }
  render() {
    return(
      <div className="amap">
        <Header tagline="Des bons légumes"/>
        <Order></Order>
        <Inventory addVeggie={this.addVeggie}/>
      </div>
      )
  }
}

export default App;
