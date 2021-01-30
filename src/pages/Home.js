import React from 'react';
import "tachyons"
import "./Home.css"

const Home = (props) => {
    return (
        <div className={"tc"}>
            <p id={"baslik"} className={"mt6"}>Nefiss Lezzetler</p>
            <p id={"altbaslik"}>Kurabiye Dükkanı</p>
            <p id={"aciklama"}>Pazartesi'den Cumartesi'ye<br/>07:30-18:30 saatleri arasında açık</p>


            <div className="mw9 center ph3-ns">
                <div className="cf ph2-ns">
                    <div className="fl w-100 w-50-ns pa2">
                        <a className="f6 link dim ph3 pv2 mb2 dib white bg-pink mr1" target={"_blank"} rel={"noreferrer"} href="tel:+90-382-213-85-44">(0382) 213 85 44'ü ara</a>
                    </div>
                    <div className="fl w-100 w-50-ns pa2">
                        <a className="f6 link dim ph3 pv2 mb2 dib white bg-pink ml1" target={"_blank"} rel={"noreferrer"} href="https://www.google.com/maps/place/Nefiss+Lezzetler/@38.3732628,33.9969428,13z/data=!4m5!3m4!1s0x14d6717fcf0e921b:0xc125ccf38a5df4ee!8m2!3d38.3723388!4d34.0326512">Yol Tarifi Al</a>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Home;