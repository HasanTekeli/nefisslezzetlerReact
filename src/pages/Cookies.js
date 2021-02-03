import React from 'react';
import {products} from "../components/PhotosDev";
import Routes from "../components/ProductsPages/Routing";
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
                <Routes />

            </div>
        )
    }


};

export default Cookies;


