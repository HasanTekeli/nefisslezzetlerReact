import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
    return (
        <div>
            <div className={"ma4 tc"}>
            <h2 className={""}>İletişim</h2>
            <p>Bizimle iletişime geçebileceğiniz kanallar:</p>
            </div>
            <Container>
                <Row xs={"1"} lg={"2"}>
                    <Col>
                        <a href={"tel:+90 382 213 85 44"} style={{color:"white"}}>
                            <div className="f4 link ph3 pv2 mt4 dib white bg-dark-pink mr1 br4">
                                <p className="fa fa-phone" style={{margin:"auto"}}>  +90 382 213 85 44</p>
                            </div>
                        </a><br/>
                        <a href={"tel:+90 546 480 00 68"}>
                            <div className="f4 link dim ph3 pv2 mt4 dib white bg-dark-pink mr1 br4">
                                <p className="fa fa-phone" style={{margin:"auto"}}>  +90 546 480 00 68</p>
                            </div>
                        </a><br/>

                        <a href={"https://www.google.com/maps/place/Nefiss+Lezzetler/@38.3732628,33.9969428,13z/data=!4m5!3m4!1s0x14d6717fcf0e921b:0xc125ccf38a5df4ee!8m2!3d38.3723388!4d34.0326512"}>
                            <div className="f4 link ph3 pv2 mt4 dib white bg-dark-blue mr1 br4">
                                <p className="fa fa-map-marker" style={{margin:"auto"}}>  Coğlaki Mah. 1221 Sk. No: 4/C Merkez / AKSARAY </p>
                            </div>
                        </a>
                    </Col>
                    <Col>
                    <h3 className={"mt4 mt0-l"}>Sosyal ağ adreslerimizden bizi takip edebilirsiniz:</h3>

                        <a href={"https://www.facebook.com/nefisslezzetleraksaray/"} target={"_blank"} rel={"noreferrer"} className={"mr2"}>
                            <div className={"fa fa-facebook tc"}>
                                <p className={"f4"}>nefisslezzetleraksaray</p>
                            </div>
                        </a>
                        <a href={"https://www.instagram.com/nefisslezzetler_aksaray"} target={"_blank"} rel={"noreferrer"} className={"ml2 mb6"}>
                            <div className={"fa fa-instagram tc"}>
                                <p className={"f4"}>nefisslezzetler_aksaray</p>
                            </div>
                        </a>




                    </Col>

                </Row>
            </Container>
        </div>
    )
};

export default Contact;