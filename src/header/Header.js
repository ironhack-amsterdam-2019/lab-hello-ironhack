import React, {Component} from 'react';
import Nav from './Nav'
import Content from './Content'
import './Header.css';

class Header extends Component {
  render() {
    return <header className="header">
      <Nav/>
      <Content/>
    </header>
  }
}

export default Header;