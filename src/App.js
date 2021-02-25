import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import TodaysFood from './components/TodaysFood';

class App extends Component {

  state = {
    todaysFood: []
  }

  handleAddItem = (mySingleFood, myQuantity) => {

    let newItem = {
      name: mySingleFood.name,
      calories: mySingleFood.calories,
      quantity: myQuantity
    }

    this.setState({
      todaysFood: [...this.state.todaysFood, newItem]
    })
  }


  render() {
    return (
      <div className="App">
        <div className="columns">
          <div className="column"><FoodBox onFoodAdd={this.handleAddItem}/></div>
          <div className="column"><TodaysFood items={this.state.todaysFood}/></div>
        </div>
      </div>
    );
  }
}

export default App;
