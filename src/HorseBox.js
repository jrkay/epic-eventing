import React, { useState, Component, Collapse, Toggle } from 'react';
import { Accordion } from 'react-bootstrap';
import data from "./data"; 
import {   Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ProgenyModal from "./Progeny";

class HorseBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasFilter: false,
            modal: true,
            openedModal: null,
        };
    };

    loginModalRef = ({handleShow}) => {
        this.showModal = handleShow;
     }
     
     onLoginClick = () => {
       this.showModal();
     }

     openModal = id => {
        this.setState({ openedModal: id });
      };
      closeModal = () => {
        this.setState({ openedModal: null });
      };

     render() {
        console.log("Click box: " + this.props.filter);
        const filterStatus = this.props.filter !== "" ? ((data.Horses.filter((f) => f.category.includes(this.props.filter)))) : (data.Horses);
    
        return (
            filterStatus.sort((a, b) => (a.name > b.name) ? 1 : -1).map((horse, i) => {
                return (
                    <Card key={i} className="box">
                        <CardBody>
                            <CardTitle className="card-title">{horse.name}</CardTitle>
                            <CardText>
                                {horse.year} {horse.breed} {horse.gender}<br />
                                { horse.sire === "Created" ? 
                                    <p>Created</p>
                                :
                                    <p>{horse.sire} x {horse.dam}</p>
                                }
                            </CardText>

                            <div key={i} class="button-link">
                                <Button color="info" onClick={() => this.openModal(i)}>More Information</Button>

                                <Modal
                                    isOpen={this.state.openedModal === i}
                                    toggle={this.closeModal}
                                >
                                    <ModalHeader>{horse.name}</ModalHeader>
                                    <ModalBody>
                                        {horse.year} {horse.breed} {horse.gender}<br />
                                        { horse.sire === "Created" ? 
                                            <p>Created</p>
                                        :
                                            <p>{horse.sire} x {horse.dam}</p>
                                        }
                                                <Row key={i} style={{borderTop: "1px solid #EDEDED"}}>
                                                    <Col sm="6" key={i}>
                                                        <CardBody className="modal-card-body">
                                                            <div>
                                                                <b>Breeding Information</b>
                                                                <p>{ horse.available !== true ? <span>Unavailable for breeding</span> : 
                                                                <span>Available for breeding<br /> 
                                                                    { horse.category.includes("Stud") ? 
                                                                        <em>2020 Stud Fee: {horse.fee}</em>
                                                                    :
                                                                        <em>2020 Brood Fee: {horse.fee} / year</em>} </span>
                                                                }</p>
                                                                <u>Progeny</u><br />
                                                                { horse.progeny.length != 0  ? 
                                                                    <div>
                                                                    <p><a href={horse.foalRecord} target='_newWindow'>Foal Record</a></p>
                                                                    { horse.progeny.sort((a, b) => a.age - b.age).map(function (progeny, i) { 
                                                                    return (
                                                                        <div>
                                                                            <div>{progeny.age} - <b>{progeny.name}</b>,  {progeny.breed} {progeny.gender}  
                                                                            { horse.category.includes("Stud") ? <span> (Out of {progeny.parent})</span> : <span> (By {progeny.parent})</span>}<br /></div>
                                                                        </div> 
                                                                    );
                                                                })}
                                                                    </div>
                                                                :
                                                                    <p>No Foals</p>
                                                                }
                                                            </div>
                                                        </CardBody>
                                                    </Col>
                                                    <Col sm="4">
                                                       <CardBody className="modal-card-body">
                                                            <div>
                                                                <b>Performance Information</b><br />
                                                                <p><a href={horse.showRecord} target='_newWindow'>Show Record</a></p>
                                                            </div>
                                                        </CardBody>
                                                    </Col>
                                                </Row>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="info" onClick={this.closeModal}>Close</Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                          </CardBody>
                    </Card>
                 );
            }));
    }
}

export default HorseBox;