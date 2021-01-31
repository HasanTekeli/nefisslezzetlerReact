import React from 'react';
import "tachyons"
import { Container, Row, Col } from "reactstrap";
import Iframe from "react-iframe";

const Contact = (props) => {
    return (
        <div>
            <div className={"ma4"}>
            <h2 className={""}>İletişim</h2>
            <p>Bizimle iletişime geçebileceğiniz kanallar:</p>
            </div>
                <Container>
                <Row xs={"1"} lg={"2"}>
                    <Col>

                    <p className="fa fa-phone"> +90 382 213 85 44</p><br/>

                    <p className="fa fa-phone"> +90 546 480 00 68</p><br/>

                    <p className="fa fa-map-marker"> <a href={"https://www.google.com/maps/place/Nefiss+Lezzetler/@38.3732628,33.9969428,13z/data=!4m5!3m4!1s0x14d6717fcf0e921b:0xc125ccf38a5df4ee!8m2!3d38.3723388!4d34.0326512"}> Coğlaki Mah. 1221 Sk. No: 4/C Merkez / AKSARAY</a> </p>


                    <h3 className={"mt3"}>Sosyal ağ adreslerimizden bizi takip edebilirsiniz:</h3>
                        <div className={" d-flex flex-row justify-content-around w-100"}>
                    <div className={"fa fa-facebook ma2 tc"}><p>facebook.com</p></div>
                    <div className={"fa fa-instagram ma2 tc"}><p>instagram.com</p></div>
                        </div>
                    </Col>
                <Col>
                    <Iframe url={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d408.8777735582198!2d34.03107767708459!3d38.37176190011504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d6717fcf0e921b%3A0xc125ccf38a5df4ee!2sNefiss%20Lezzetler!5e0!3m2!1sen!2str!4v1612102914897!5m2!1sen!2str"}
                            width="100%"
                            height="300px"
                            id="mapIframe"
                            display="initial"
                            position="relative"/>
                </Col>
                </Row>
                </Container>
        </div>
    )
};

export default Contact;