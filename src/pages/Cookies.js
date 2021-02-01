import React from 'react';
import {photos} from "../components/PhotosDev";
import Products from "../components/Products";

class Cookies extends React.Component {
    constructor() {
        super();
        this.state = {
            photos: [],
            products: ""
        }
    }
    componentDidMount() {
        fetch({photos})
            .then(response => response.json())
            .then(prods => this.setState({photos: prods}));
    }

    render() {
        return (
            <div className={"mb6"}>
                <h1 className={"tc mt4 f1"}>Ürünlerimiz</h1>
                <Products />
                {/*<PhotoCardList photos={photos} />*/}

            </div>
        )
    }


};

export default Cookies;


