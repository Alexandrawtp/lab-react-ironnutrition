import React, { Component } from 'react';
import foodsJson from '../foods.json';

class FoodBox extends Component {
  state = {
    foods: foodsJson,
  };

  render() {
    return (
      <>
        {this.state.foods.map((singleFood, index) => (
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
