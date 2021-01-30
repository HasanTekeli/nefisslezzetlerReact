import React from 'react';
import "tachyons"
import "./Home.css"

const Home = (props) => {
    return (
        <div className={"tc"}>
            <p id={"baslik"} className={"mt6"}>Nefiss Lezzetler</p>
            <p id={"altbaslik"}>Kurabiye Dükkanı</p>
            <p id={"aciklama"}>Pazartesi'den Cumartesi'ye<br/>07:30-18:30 saatleri arasında açık</p>

        </div>
    )
};

export default Home;