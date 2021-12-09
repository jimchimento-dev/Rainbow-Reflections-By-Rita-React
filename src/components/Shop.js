import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';
import { SHOPITEMS } from '../shared/ShopItems';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: SHOPITEMS
        }
    }

    render() {
        return <div />
    }
}

export default Shop;