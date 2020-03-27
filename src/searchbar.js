import React, { useState, Component, Collapse, Toggle } from 'react';
import { Accordion } from 'react-bootstrap';
import data from "./data"; 
import {   Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ProgenyModal from "./Progeny";

class SearchBar extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    const styleInfo = {
      paddingRight:'10px'
    }
    const elementStyle ={
      position:'relative',
      height:'35px',
      width:'300px',
      marginTop:'5vh',
      marginBottom:'10vh',
      padding: "5px"
    }
    const items = data.Horses.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.breed.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
      <div>
        <ul>
          <li style={{color:"white",position:'relative',left:'10vh'}}>
            <span style={styleInfo}>{data.name}</span>
            <span style={styleInfo}>{data.age}</span>
            <span style={styleInfo}>{data.country}</span>
          </li>
        </ul>
      </div>
      )
    })

    return (
      <div>
      <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      {items}
      </div>
    )
  }
}

export default SearchBar;