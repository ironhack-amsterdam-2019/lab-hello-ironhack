import React, {Component} from 'react';
import './Item.css';

class Item extends Component {
  render() {
    return (
    <div className="Item">
      <img src={this.props.image} alt={this.props.title}></img>
      <h2>{this.props.title}</h2>
      <p>{this.props.description}</p>
    </div>
    )
  }
}

export default Item;