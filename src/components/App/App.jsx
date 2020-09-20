import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ModalPrint from "../../pages/ModalPrint/ModalPrint";
import ResumeHeader from "../ResumeHeader/ResumeHeader";
import LocalizationContext from "../../context/localization";

const App = () => (
  <BrowserRouter>
    <LocalizationContext>
      <article>
        <Switch>
          <Route exact path="/" component={ResumeHeader} />
          <Route path="/print" component={ModalPrint} />
          <Redirect to="/" />
        </Switch>
      </article>
    </LocalizationContext>
  </BrowserRouter>
);

export default App;
