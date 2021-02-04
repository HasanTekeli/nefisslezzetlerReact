import React from 'react';
import {Col, Container, Row} from "reactstrap";

const About = (props) => {
    return (
        <div>
            <Container className={"ma4"}>
                <Row xs={"1"} lg={"2"}>

                    <Col>
                        <h2>Hakkımızda</h2>
                        <p>Sektörde henüz yeni olan Nefiss Lezzetler, 2019 yılının Aralık ayında hizmet vermeye başlamış olsa da kısa sürede birçok kişinin beğenisini kazanmayı başarmıştır. Nefiss Lezzetler'in hizmet verdiği alanlar şunlardır:</p>
                        <h4>Kurabiye</h4>
                        <p>Aksaray Kurabiyesi, Portakallı Kurabiye, Elmalı Kurabiye ve daha niceleri.</p>
                        <h4>Kahvaltı</h4>
                        <p>Birbirinden güzel ve lezzetli ürünleri Nefiss Lezzetler'de bulabilirsiniz.</p>
                        <h4>Mantı ve Erişte Siparişi</h4>
                        <p>Kuru mantı ve erişte siparişi vermek istiyorsanız "İletişim" linki aracılığıyla bizimle iletişime geçebilirsiniz.</p>
                    </Col>
                    <Col>
                        <img alt={"Aksaray Kurabiyesi"} src={"https://raw.githubusercontent.com/HasanTekeli/nefisslezzetlerReact/master/public/assets/Products/urunler.png"}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default About;