import React from 'react';
import {products} from "../components/PhotosDev";
import ProductsMainPage from "../components/Products/MainPage";

class Cookies extends React.Component {
    constructor() {
        super();
        this.state = {
            photos: [],
            products: ""
        }
    }
    componentDidMount() {
        fetch({products})
            .then(response => response.json())
            .then(prods => this.setState({photos: prods}));
    }


    render() {
        return (
            <div className={"mb6"}>
                {/*<ProductsCard />*/}
                <ProductsMainPage />


            </div>
        )
    }


};

export default Cookies;


