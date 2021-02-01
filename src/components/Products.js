import React from "react";
import {Card, CardBody, CardImg, CardTitle} from "reactstrap";
import { Container, Row, Col } from "reactstrap";

class Products extends React.Component {
    render() {
        return (
            <Container className={"tc"}>
                <Row xs={"1"} sm={"2"} lg={"4"} className={"ma3"}>
                    <Col>
                        <Card className={"col-sm"} style={{maxWidth: "300px"}}>
                            <CardImg top width={"100%"} alt={"Çiçek Un Kurabiyesi"} src={"https://raw.githubusercontent.com/HasanTekeli/nefisslezzetlerReact/gh-pages/assets/Products/5.jpeg"}/>
                            <CardBody>
                                <CardTitle tag={"h5"}>Kurabiyeler</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={"col-sm"} style={{maxWidth: "300px"}}>
                            <CardImg top width={"100%"} alt={"Kahvaltı"} src={"https://raw.githubusercontent.com/HasanTekeli/nefisslezzetlerReact/gh-pages/assets/Products/2.jpeg"}/>
                            <CardBody>
                                <CardTitle tag={"h5"}>Kahvaltı</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={"col-sm"} style={{maxWidth: "300px"}}>
                            <CardImg top width={"100%"} alt={"Ekmekler"} src={"https://raw.githubusercontent.com/HasanTekeli/nefisslezzetlerReact/gh-pages/assets/Products/Mayal%C4%B1.jpeg"}/>
                            <CardBody>
                                <CardTitle tag={"h5"}>Ekmekler</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={"mb4"} style={{maxWidth: "300px"}}>
                            <CardImg top width={"100%"} alt={"Diğer Ürünlerimiz"} src={"https://raw.githubusercontent.com/HasanTekeli/nefisslezzetlerReact/gh-pages/assets/Products/Elmalı%20Turta.jpeg"}/>
                            <CardBody>
                                <CardTitle tag={"h5"}>Diğer Ürünlerimiz</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Products;