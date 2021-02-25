import React, {Component} from 'react';

class TodaysFood extends Component {

  render() {
    const {items} = this.props;

    return(
      <div>
        <h1>Today's Food :</h1>
        <ul>
        {
          items.map((singleFood) => 
          <li>{singleFood.quantity} {singleFood.name} = {singleFood.calories} cal</li>
          )
        }  
        </ul>
        <div>Total : {items.reduce((sum, {calories}) => sum + calories, 0)}</div>    
      </div>
    )
  }
}

export default TodaysFood;