import React from 'react';
import "tachyons"
import "./Home.css"
import { Col, Row, Container } from "reactstrap";

const Home = () => {
    return (
        <div className={"tc"}>
            <p id={"baslik"} className={"mt6"}>Nefiss Lezzetler</p>
            <p id={"altbaslik"}>Kurabiye Dükkanı</p>
            <p id={"aciklama"}>Pazartesi'den Cumartesi'ye<br/>07:30-18:30 saatleri arasında açık</p>


            <Container>
                <Row xs={"1"} lg={"1"}>
                    <Col>
                        <a className="f6 link dim ph3 pv2 mt4 dib white bg-dark-pink mr1 br4" target={"_blank"} rel={"noreferrer"} href="tel:+90-382-213-85-44">(0382) 213 85 44'ü ara</a>
                    </Col>
                    <Col>
                        <a className="f6 link dim ph3 pv2 mt4 dib white bg-dark-pink ml1 br4" target={"_blank"} rel={"noreferrer"} href="https://www.google.com/maps/place/Nefiss+Lezzetler/@38.3732628,33.9969428,13z/data=!4m5!3m4!1s0x14d6717fcf0e921b:0xc125ccf38a5df4ee!8m2!3d38.3723388!4d34.0326512">Yol Tarifi Al</a>
                    </Col>
                </Row>
            </Container>
        </div>

    )
};

export default Home;