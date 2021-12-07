import React, { Component } from 'react';
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavbarText, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <>
                <Navbar light color="info" sticky="top" expand="md" className="p-0">
                    <NavbarBrand href="/home"><img src="assets/images/main-image-1 (1).png" height="auto" width="470" alt="Rainbow Reflections By Rita Banner" className="img" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="nav-fill w-100">
                            <NavItem>
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/events">Events</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link no-wrap" to="/contact">Contact Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link mr-5" to="/shop">Shop</NavLink>
                            </NavItem>
                        </Nav>
                        <span className="navbar-text ml-auto">
                            <Link onClick={this.toggleModal} className="mr-5">
                                <i className="fa fa-lg fa-shopping-cart" />
                            </Link>
                        </span>
                    </Collapse>
                </Navbar>
            </>
        );
    };
}



export default Header;