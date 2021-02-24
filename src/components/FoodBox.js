import React, { Component } from 'react';
import foodsJson from '../foods.json';
import AddFood from './AddFood';

class FoodBox extends Component {
  state = {
    foods: foodsJson,
    showForm: false,
  };

  addForm() {}

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

  render() {
    const {showForm, foods} = this.state;
    return (
      <>
        {showForm ? (
          <AddFood onAdd={this.handleAddFood} />
        ) : (
          <button onClick={this.handleShowForm}>Add an item</button>
        )}
        {foods.map((singleFood, index) => (
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
                    <input className="input" type="number" value="1" />
                  </div>
                  <div className="control">
                    <button className="button is-info">+</button>
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
