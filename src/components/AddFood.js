import React, { Component } from 'react';

class AddFood extends Component {
  render() {
    const {onAdd} = this.props;
    return (
      <form onSubmit={onAdd}>
        <input name="name" type="text" placeholder="Enter title" />
        <input name="calories" type="number" />
        <button type="submit">Add food</button>
      </form>
    );
  }
}

export default AddFood;
