import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthContex from "../src/context/AuthContext";

import adminAcess from "./pages/states/minas-gerais/pimenta/adminAcess";
import denunciations from "./pages/states/minas-gerais/pimenta/denunciations";
import Landing from "./pages/states/minas-gerais/pimenta/Landing";
import generateProtocol from "./pages/states/minas-gerais/pimenta/pages-denunciations/generateProtocol";
import report from "./pages/states/minas-gerais/pimenta/pages-denunciations/report";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/mg/pimenta" exact component={Landing} />
        <AuthContex.Provider value={{ UserName:'leleo', city_id: '123' }}>
          <Route path="/mg/pimenta/adminAcess" component={adminAcess} />
        </AuthContex.Provider>
        <Route path="/mg/pimenta/denunciations" component={denunciations} />
        <Route path="/mg/pimenta/report" component={report} />
        <Route
          path="/mg/pimenta/generateProtocol"
          component={generateProtocol}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
