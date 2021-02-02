import Kurabiyeler from "./Kurabiyeler";
import Ekmekler from "./Ekmekler";
import Diger from "./DigerUrunler";
import Kahvalti from "./Kahvalti";
import Cookies from "../../pages/Cookies";
import React from "react";
import { HashRouter as Router,
    Switch,
    Route} from "react-router-dom";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path={"/"}>
                    <Cookies />
                </Route>
                <Route path={"/urunler/kurabiyeler"}>
                    <Kurabiyeler />
                </Route>
                <Route path={"/urunler/ekmekler"}>
                    <Ekmekler />
                </Route>
                <Route path={"/urunler/diger"}>
                    <Diger />
                </Route>
                <Route path={"/urunler/kahvalti"}>
                    <Kahvalti />
                </Route>
            </Switch>
        </Router>
    );
}
