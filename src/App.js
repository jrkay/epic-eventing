import React, { Component } from 'react';
import Grid from './Grid.js';
import Sidebar from './Sidebar.js';
import { Col, Row } from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(filter) {
        switch(filter){
            case 'Draft':
                this.setState({
                    filter: "Draft"
                });
                break;
            case 'Light':
                this.setState({
                    filter: "Light"
                });
                break;
            case 'Stock':
                this.setState({
                    filter: "Stock"
                });
                break;
            case 'Pony':
                this.setState({
                    filter: "Pony"
                });
                break;
            case 'Warmblood':
                this.setState({
                    filter: "Warmblood"
                });
                break;
            case 'Stud':
                this.setState({
                    filter: "Stud"
                });
                break;
            case 'Brood':
                this.setState({
                    filter: "Brood"
                });
                break;
            default:
                this.setState({
                    filter: ""
                });
            }
    };

    render() {
        console.log("Click: " + this.state.filter);
        return (
            <div className="app" style={{display: "flex"}}>
                <Col sm="2">
                    <Sidebar filter={this.state.filter} handleChange={this.handleChange} />
                </Col>
                <Col sm="10" className="horseGrid">
                    <Row>
    				    <Grid filter={this.state.filter} />
                    </Row>
                </Col>
            </div>
        );
    }
}
 
export default App;