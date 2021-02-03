import {Nav, NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

const FiltreButonBilgi = [{
    route: "/urunler/kurabiyeler",
    icon: "",
    label: "Kurabiyeler"
},{
    route: "/urunler/ekmekler",
    icon: "",
    label: "Ekmekler"
},{
    route: "/urunler/kahvalti",
    icon: "",
    label: "Kahvaltılık"
},{
    route: "/urunler/diger",
    icon: "",
    label: "Diğer Ürünler"
}
]

const FiltreButonlari = ({change}) => {
    return (
        <nav className="navbar sticky-top navbar-light d-block bg-white" role="navigation">
            <Nav className="w-100">
                <div className=" d-flex flex-row justify-content-around w-100">
                    {
                        FiltreButonBilgi.map((tab, index) =>(
                            <NavItem key={`tab-${index}`}>
                                <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                                    <div className="row d-flex flex-column justify-content-center align-items-center">
                                        <FontAwesomeIcon size="lg" icon={tab.icon}/>
                                        <div className="bottom-tab-label">{tab.label}</div>
                                    </div>
                                </NavLink>
                            </NavItem>
                        ))
                    }
                </div>
            </Nav>
        </nav>
    )
}

export default FiltreButonlari;