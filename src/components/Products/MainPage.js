import React from "react";
import {products} from "../PhotosDev";
import ProductsCardList from "./ProductsCard";


class ProductsMainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch(products)
            .then(response =>  response.json())
            .then(fetchedProducts => this.setState({ products: fetchedProducts }));
    }



    render() {

        return (
            <div className={"tc"}>
                <h1 className={"f1"}>Ürünlerimiz</h1>
                <ProductsCardList products={products}/>
            </div>
        );
    }
}



export default ProductsMainPage;