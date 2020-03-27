import React, { useState, Component, Collapse, Toggle } from 'react';
import data from "./data"; 
import {   Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { 
  Popover,
  Tooltip,
  Modal
} from 'react-bootstrap';

class ProgenyModal extends React.Component {
  constructor(props, context){
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
        show: false
    }
}

handleShow() {
    console.log(this.state)
    this.setState({ show: true })
}
handleClose(){
    this.setState({ show: false })
}

render() {
  return (
    data.Horses.map((horse, i) => {
      return (
          <div key={i}>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>123</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Card className="collapsible">
                <CardBody>
                  { horse.progeny.map(function (progeny, i) { 
                      return (
                        progeny.name ? 
                            <div key={i}>
                            <p>{ progeny.available !== true ? <span>Unavailable for breeding</span> : <span>Available for breeding</span> }</p>
                            <u>Progeny</u><br />
                            <b>{progeny.name}</b> - {progeny.year} {progeny.color} {progeny.gender}<br />
                            <span>{progeny.parents}</span>
                            <p>{progeny.discipline}</p>
                            </div>
                        : 
                            <div key={i}>
                                <p>{ progeny.available !== true ? <span>Unavailable for breeding</span> : <span>Available for breeding</span> }</p>
                            </div>
                    );
                  })}
                </CardBody>
                </Card>
                </Modal.Body>
            </Modal>
          </div>
      );
    }));
}
}

export default ProgenyModal;