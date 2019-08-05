import React, {Component} from 'react';
import Item from './Item'
import './Icons.css';

class Icons extends Component {
  constructor(props) {
    super(props)
    this.items = [
      {
        icon: "/images/icon1.png",
        index: 1,
        title: "Declerative",
        description: "React makes it painless to create interactive UIs."
      },
      {
        icon: "/images/icon2.png",
        index: 2,
        title: "Components",
        description: "Build encapsulated components that manage their state."
      },
      {
        icon: "/images/icon3.png",
        index: 3,
        title: "Single-Way",
        description: "A set of immutable values are passed to the components."
      },
      {
        icon: "/images/icon4.png",
        index: 4,
        title: "JSX",
        description: "Statically-typed, designed to run on modern browsers."
      }
    ]
  }
  render() {
    let components = this.items.map((item)=> {
      return (
          <Item 
              image={item.icon}
              title={item.title}
              description={item.description}
              key={item.index}
          />
      )
  })
    return (
    <div className="Icons">
      {components}
    </div>
    )
  }
}

export default Icons;