import React from 'react';
import "tachyons"

const Contact = (props) => {
    return (
        <div className="mw9 center ph3-ns">
            <div className="cf ph2-ns">
                <div className="fl w-100 w-50-ns pa2">
                    <h2 className={"mt4"}>İletişim</h2>
                    <p>Bizimle iletişime geçebileceğiniz kanallar:</p>
                    <div>
                        <p className="fa fa-phone"> +90 382 213 85 44</p>
                    </div>
                    <div>
                        <p className="fa fa-phone"> +90 546 480 00 68</p>
                    </div>
                    <div>
                        <p className="fa fa-map-marker"> <a href={"https://www.google.com/maps/place/Nefiss+Lezzetler/@38.3732628,33.9969428,13z/data=!4m5!3m4!1s0x14d6717fcf0e921b:0xc125ccf38a5df4ee!8m2!3d38.3723388!4d34.0326512"}> Coğlaki Mah. 1221 Sk. No: 4/C Merkez / AKSARAY</a> </p>
                    </div>
                    <h3 className={"mt3"}>Sosyal ağ adreslerimizden bizi takip edebilirsiniz:</h3>
                    <span className={"fa fa-facebook ma2 tc"}><p>facebook.com</p></span>
                    <span className={"fa fa-instagram ma2 tc"}><p>instagram.com</p></span>

                </div>
                <div className="fl w-100 w-50-ns pa2">
                    <iframe title={"NefissLezzetlerOnMap"}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390.9988105224173!2d34.032376912866305!3d38.37234157965515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d6717fcf0e921b%3A0xc125ccf38a5df4ee!2sNefiss%20Lezzetler!5e0!3m2!1str!2str!4v1578559795346!5m2!1str!2str"
                        width="400" height="300" frameBorder="0" allowFullScreen=""></iframe>
                </div>
            </div>
        </div>

    )
};

export default Contact;