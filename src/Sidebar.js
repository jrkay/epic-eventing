import React, { Component } from 'react';
import { Button } from 'reactstrap';
import data from "./data"; 
import SearchBar from './searchbar';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const {filter, handleChange} = this.props;
    return (
      <div>
        <Button onClick={() => handleChange('Stud')} color="info" size="lg" block>All Available Studs</Button>
        <Button onClick={() => handleChange('Brood')} color="info" size="lg" block>All Available Broods</Button>
        <Button onClick={() => handleChange('Draft')} color="info" size="lg" block>Draft</Button>
        <Button onClick={() => handleChange('Light')} color="info" size="lg" block>Light</Button>
        <Button onClick={() => handleChange('Stock')} color="info" size="lg" block>Stock</Button>
        <Button onClick={() => handleChange('Pony')} color="info" size="lg" block>Pony</Button>
        <Button onClick={() => handleChange('Warmblood')} color="info" size="lg" block>Warmblood</Button>

        <SearchBar />
      </div>
        );
    }
} 

export default Sidebar;