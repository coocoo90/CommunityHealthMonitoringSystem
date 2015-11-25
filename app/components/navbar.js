import React from 'react';
import {Router,Route} from 'react-router';
import {Nav, Navbar, NavBrand, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';
require('../static/animate.css');


export default class CHMSNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFullBrandShown: false
        };
        this.showFullBrand = this.showFullBrand.bind(this);
        this.hideFullBrand = this.hideFullBrand.bind(this);

    }

    showFullBrand() {
        this.setState({isFullBrandShown: true})

    }

    hideFullBrand() {
        this.setState({isFullBrandShown: false})

    }

    render() {
        return (
            <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#/" onMouseOver={this.showFullBrand}
                           onMouseOut={this.hideFullBrand}> {this.state.isFullBrandShown ? "Community Health Monitoring System" : "CHMS"}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem href="#/">Heat Map</NavItem>
                        <NavItem href="#/rankingList">Ranking List</NavItem>
                        <NavItem href="#/deepMining">Food Deep Analysis</NavItem>
                        <NavItem href="#/comments">Comments</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown title="Tommy" id="basic-nav-dropdown">
                            <MenuItem >My Profile</MenuItem>
                            <MenuItem divider/>
                            <MenuItem >Log Out</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        );
    }

}

