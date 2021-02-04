import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <div className={"text-center main"} style={{marginTop:"50px"}}>
            <div className={"wrapper"}>
                <div>
                    <p id={"baslik"} className={"mt6"}>Nefiss Lezzetler</p>
                    <p id={"altbaslik"}>Ev Ürünleri</p>
                    <p id={"aciklama"}>Pazartesi'den Cumartesi'ye<br/>08:00'den günbatımına kadar açık</p>

                    <a className="f6 link dim ph3 pv2 mt4 dib white bg-dark-pink mr1 br4" target={"_blank"} rel={"noreferrer"} href="tel:+90-382-213-85-44">(0382) 213 85 44'ü ara</a><br/>
                    <a className="f6 link dim ph3 pv2 mt4 dib white bg-dark-pink ml1 br4" target={"_blank"} rel={"noreferrer"} href="https://www.google.com/maps/place/Nefiss+Lezzetler/@38.3732628,33.9969428,13z/data=!4m5!3m4!1s0x14d6717fcf0e921b:0xc125ccf38a5df4ee!8m2!3d38.3723388!4d34.0326512">Yol Tarifi Al</a>

                </div>
            </div>


        </div>

    )
};

export default Home;