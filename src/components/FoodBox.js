import React, { Component } from 'react';
import foodsJson from '../foods.json';
import AddFood from './AddFood';
import SearchBar from './SearchBar';

class FoodBox extends Component {
  state = {
    foods: foodsJson,
    quantity: 1,
    showForm: false,
    filteredItems: []
  };

  handleAddFood = (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let calories = event.target.calories.value;
    let newItem = {
      name,
      calories,
    };
    this.setState({
      showForm: false,
      foods: [newItem, ...this.state.foods]
    });
  };

  handleShowForm = () => {
    this.setState({
      showForm: true,
    });
  };

  handleChange = (event) => {
    let searchText = event.target.value.toLowerCase();
    let filteredList = this.state.foods.filter((singleFood) => {
      return singleFood.name.toLowerCase().includes(searchText)
    })
    this.setState({
      filteredItems: filteredList
    })
  }

  handleQuantity = (event) => {
    this.setState({
      quantity: event.target.value
    })
  }

  render() {
    const {showForm, filteredItems, quantity} = this.state;
    return (
      <>
        <SearchBar setChange={this.handleChange}/>
        {showForm ? (
          <AddFood onAdd={this.handleAddFood} />
        ) : (
          <button onClick={this.handleShowForm}>Add an item</button>
        )}
        {filteredItems.map((singleFood, index) => (
          <div key={index} className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={singleFood.image} alt="" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <strong>{singleFood.name}</strong> <br />
                  <small>{singleFood.calories}</small>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input onChange={this.handleQuantity} className="input" type="number" />
                  </div>
                  <div className="control">
                    <button onClick={() => {this.props.onFoodAdd(singleFood, quantity)}} className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </>
    );
  }
}

export default FoodBox;
