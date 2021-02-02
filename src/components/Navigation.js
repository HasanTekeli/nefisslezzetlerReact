import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHome, faCookieBite, faAddressCard } from '@fortawesome/free-solid-svg-icons';

const tabs = [{
    route: "/anasayfa",
    icon: faHome,
    label: "Anasayfa"
},{
    route: "/iletisim",
    icon: faPhone,
    label: "İletişim"
},{
    route: "/urunler",
    icon: faCookieBite,
    label: "Ürünlerimiz"
},{
    route: "/hakkinda",
    icon: faAddressCard,
    label: "Hakkımızda"
}]

const Navigation = (props) => {
    return (
        <div>
            {/* Top Bar*/}
            <nav className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top" role="navigation">
                <div className="container-fluid">
                    <Nav>
                        <NavItem>
                            <NavLink to="/anasayfa" className="nav-link">Nefiss Lezzetler</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto">
                        <NavItem>
                            <NavLink to="/urunler" className="nav-link">
                                Ürünlerimiz
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/iletisim" className="nav-link">
                                İletişim
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/hakkinda" className="nav-link">
                                Hakkımızda
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </nav>
        {/* Bottom Tab Navigator*/}
        <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav bg-white" role="navigation">
            <Nav className="w-100">
                <div className=" d-flex flex-row justify-content-around w-100">
                    {
                        tabs.map((tab, index) =>(
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
        </div>
    )
};

export default Navigation;