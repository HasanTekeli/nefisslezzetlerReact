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
                <div className="fl w-100-ns w-50-l pa2">
                    <img alt={"Aksaray Haritası"} src={"https://www.enerjiatlasi.com/i/gunes-haritasi/aksaray-gunes-enerjisi-potansiyeli-haritasi.png"}/>
                </div>
            </div>
        </div>

    )
};

export default Contact;