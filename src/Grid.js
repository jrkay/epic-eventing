import React, { Component } from 'react';
import HorseBox from "./HorseBox";

class Grid extends Component {
      constructor(props) {
        super(props);
        this.state = {
        };
      }
    
    render() {
        console.log("Click grid: " + this.props.filter);
        return (
          <div style={{display: "contents"}}>
            <HorseBox filter={this.props.filter} />
          </div>
        );
    }
} 
export default Grid;