import React, { Component } from 'react';
import { SHOPITEMS } from '../shared/ShopItems'

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopItems: SHOPITEMS
        }
    }

    render() {
        return (
            <div>Shop today!</div>
        )
    }
}

export default Shop;