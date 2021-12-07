import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container site-footer">
                <div className="row mt-5">
                    <div className="footerColor col-sm-2 text-center mt-3">
                        <h4>Links</h4>
                        <ul className="footerColor list-unstyled">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="aboutus.html">About Us</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="events.html">Events</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="shop.html">Shop</a></li>
                        </ul>
                    </div>
                    <div className="footerColor col-sm-3 text-center mt-3">
                        <h4>Hours</h4>
                        <ul className="hours list-unstyled">
                            <li><u>Monday - Thursday</u>: Appointment Only</li>
                            <li><u>Friday</u>: 12PM - 4PM</li>
                            <li><u>Saturday</u>: 11AM - 3PM</li>
                            <li><u>Sunday</u>: 11AM - 3PM</li>
                        </ul>
                    </div>
                    <div className="footerColor col-sm-3 text-center mt-3">
                        <h4>Social</h4>
                        <Link className="btn btn-social-icon btn-facebook"
                            href="https://www.facebook.com/Rainbowreflectionsbyrita/"><i class="fa fa-facebook"></i></Link>
                        <Link className="btn btn-social-icon btn-instagram"
                            href="https://www.instagram.com/rainbowreflectionsbyrita/?hl=en"><i
                                class="fa fa-instagram"></i></Link>
                    </div>
                    <div className="footerColor col-sm-3 text-center mt-3">
                        <h4>Contact</h4>
                        <a role="button" className="contactBtn btn btn-link text-nowrap"
                            href="mailto:rainbowreflectionsbyrita@gmail.com"><i className="fa fa-envelope-o"></i>
                         rainbowreflectionsbyrita@gmail.com</a>
                    </div>
                    <div className="row mx-auto">
                        <div className="col hours">
                            Copyright © 2021 Rainbow Reflections by Rita - All Rights Reserved.
                            </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;