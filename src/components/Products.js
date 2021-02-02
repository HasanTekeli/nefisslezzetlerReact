import React from "react";
import {Card, CardBody, CardImg, CardTitle} from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";


class Products extends React.Component {
    render() {
        return (
            <Container className={"tc"}>
                <Row xs={"1"} lg={"4"} className={"mt3"}>
                    <Col>
                        <Link to={"/urunler/kurabiyeler"}>
                        <Card className={"col-sm"} style={{maxWidth: "300px", maxHeight: "120px"}}>
                            <div className={"dib"}>
                            <CardImg top width={"100%"} style={{maxWidth: "100px", maxHeight: "60px", float:"left"}} alt={"Kurabiyeler"} src={"https://raw.githubusercontent.com/HasanTekeli/nefisslezzetlerReact/gh-pages/assets/Products/5.jpeg"}/>
                            <CardBody >
                                <CardTitle tag={"h6"} style={{float:"right"}}>Kurabiyeler</CardTitle>
                            </CardBody>
                            </div>
                        </Card>
                        </Link>
                    </Col>
                    <Col>
                        <Link to={"/urunler/kahvalti"}>
                        <Card className={"col-sm"} style={{maxWidth: "300px", maxHeight: "120px"}}>
                            <div className={"dib"}>
                            <CardImg top width={"100%"} style={{maxWidth: "100px", maxHeight: "60px", float:"left"}} alt={"Kahvaltı"} src={"https://raw.githubusercontent.com/HasanTekeli/nefisslezzetlerReact/gh-pages/assets/Products/2.jpeg"}/>
                            <CardBody>
                                <CardTitle tag={"h6"} style={{float:"right"}}>Kahvaltı</CardTitle>
                            </CardBody>
                            </div>
                        </Card>
                        </Link>
                    </Col>
                    <Col>
                        <Link to={"/urunler/ekmekler"}>
                        <Card className={"col-sm"} style={{maxWidth: "300px", maxHeight: "120px"}}>
                            <div className={"dib"}>
                            <CardImg top width={"100%"} style={{maxWidth: "100px", maxHeight: "60px", float:"left"}} alt={"Ekmekler"} src={"https://raw.githubusercontent.com/HasanTekeli/nefisslezzetlerReact/gh-pages/assets/Products/Mayal%C4%B1.jpeg"}/>
                            <CardBody>
                                <CardTitle tag={"h6"} style={{float:"right"}}>Ekmekler</CardTitle>
                            </CardBody>
                            </div>
                        </Card>
                        </Link>
                    </Col>
                    <Col>
                        <Link to={"/urunler/diger"}>
                        <Card className={"col-sm"} style={{maxWidth: "300px", maxHeight: "120px"}}>
                            <div className={"dib"}>
                            <CardImg top width={"100%"} style={{maxWidth: "100px", maxHeight: "60px", float:"left"}} alt={"Diğer Ürünlerimiz"} src={"https://raw.githubusercontent.com/HasanTekeli/nefisslezzetlerReact/gh-pages/assets/Products/Elmalı%20Turta.jpeg"}/>
                            <CardBody>
                                <CardTitle tag={"h6"} style={{float:"right"}}>Diğer Ürünlerimiz</CardTitle>
                            </CardBody>
                            </div>
                        </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Products;