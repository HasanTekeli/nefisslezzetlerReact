import React from "react";
import {Nav, NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";


const ProductsCard = ({ urun }) => {
    return (
        <div className={"bg-light-gray dib br3 pa3 ma2 bw2 shadow-5"} key={urun.id}>
            <img alt={urun.title} src={urun.src} key={urun.key} style={{maxWidth:"100px"}}/>
            <div className={"tc"}>
                <h4>{urun.title}</h4>
            </div>
        </div>
    )
}

const ProductsCardList = ({products}) => {
    const [urunler, setUrunler] = React.useState(null);
    const [filteredUrunler, setfilteredUrunler] = React.useState(null)

    React.useEffect(() => {
        setUrunler(products);
        setfilteredUrunler(products);
        }, []
    )

    let Kurabiye = products.filter(e => e.type === "Kurabiye")
    let Diger = products.filter(e => e.type === "Diger")
    let Kahvalti = products.filter(e => e.type === "Kahvalti")
    let Serbetli = products.filter(e => e.type === "Serbetli")
    let Kek = products.filter(e => e.type === "Kek")

    function showKurabiye () {
        setfilteredUrunler(Kurabiye)
    }
    function showDiger() {
        setfilteredUrunler(Diger)
    }
    function showAll() {
        setfilteredUrunler(products)
    }
    function showKahvalti() {
        setfilteredUrunler(Kahvalti)
    }
    function showSerbetli() {
        setfilteredUrunler(Serbetli)
    }
    function showKek() {
        setfilteredUrunler(Kek)
    }

    return(
        <div>
            <nav className="navbar sticky-top navbar-light d-block bg-white" role="navigation">
                <Nav className="w-100">
                    <div className=" d-flex flex-row justify-content-around w-100">
                        <NavItem key={"All"}>
                            <NavLink to={"/urunler"} onClick={showAll} className="nav-link bottom-nav-link" activeClassName="active">
                                <div className="row d-flex flex-column justify-content-center align-items-center">
                                    <div className="bottom-tab-label">{"Hepsini Göster"}</div>
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem key={"Kurabiye"}>
                            <NavLink to={"/urunler"} onClick={showKurabiye} className="nav-link bottom-nav-link" activeClassName="active">
                                <div className="row d-flex flex-column justify-content-center align-items-center">
                                    <div className="bottom-tab-label">{"Kurabiyeler"}</div>
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem key={"Diger"}>
                            <NavLink to={"/urunler"} onClick={showDiger} className="nav-link bottom-nav-link" activeClassName="active">
                                <div className="row d-flex flex-column justify-content-center align-items-center">

                                    <div className="bottom-tab-label">{"Diğer"}</div>
                                </div>
                            </NavLink>
                        </NavItem>
                    </div>

                    <div className=" d-flex flex-row justify-content-around w-100">
                        <NavItem key={"Diger"}>
                            <NavLink to={"/urunler"} onClick={showKahvalti} className="nav-link bottom-nav-link" activeClassName="active">
                                <div className="row d-flex flex-column justify-content-center align-items-center">

                                    <div className="bottom-tab-label">{"Kahvaltılık"}</div>
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem key={"Diger"}>
                            <NavLink to={"/urunler"} onClick={showSerbetli} className="nav-link bottom-nav-link" activeClassName="active">
                                <div className="row d-flex flex-column justify-content-center align-items-center">

                                    <div className="bottom-tab-label">{"Şerbetli"}</div>
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem key={"Diger"}>
                            <NavLink to={"/urunler"} onClick={showKek} className="nav-link bottom-nav-link" activeClassName="active">
                                <div className="row d-flex flex-column justify-content-center align-items-center">

                                    <div className="bottom-tab-label">{"Kek"}</div>
                                </div>
                            </NavLink>
                        </NavItem>

                    </div>
                </Nav>
            </nav>

            {filteredUrunler && filteredUrunler.map(urun => (
                <ProductsCard key={urun.title} urun={urun} />
            ))}
        </div>
    )
}

export default ProductsCardList;