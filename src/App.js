import React, { useState } from 'react'
import 'devextreme/dist/css/dx.light.css';
import "./App.css"
import Header from './layouts/Header/Header';
import LeftSidebar from "./layouts/LeftSidebar/index";
import Dashboard from "./containers/Dashboard";
import Tracking from './containers/Tracking';
import RouteCalculating from './containers/RouteCalculating/RouteCalculating';
import ExportImport from './containers/ExportImport/index';
import Partners from './containers/Partners/index'
import Drivers from './containers/Drivers';
import ProfitEvidence from './containers/Dashboard/components/ProfitEvidence';
import AddRoute from './containers/Tracking/components/AddRoute';
import PutniNalog from './containers/PutniNalog';
import Login from './containers/Login';
import Register from './containers/Register';

function App() {
  const [section, setSection] = useState('Login')

  const RenderSection = () => {
    if(section === "Register") {
      return <Register setSection={setSection} />
    }

    if(section === "Login") {
      return <Login setSection={setSection} />
    }

    if (section === "Dashboard") {
      return (
        <Dashboard setSection={setSection} />
      )
    }

    if (section === "ProfitEvidence") {
      return (
        <ProfitEvidence setSection={setSection} />
      )
    }

    if (section === "Tracking") {
      return (
        <Tracking />
      )
    }

    if (section === "RouteCalculating") {
      return (
        <RouteCalculating />
      )
    }

    if (section === "ExportImport" || section === "Export" || section === "Import") {
      return (
        <ExportImport section={section} />
      )
    }
    if (section === "Partners") {
      return (
        <Partners />
      )
    }
    if (section === "Drivers") {
      return (
        <Drivers />
      )
    }
    if (section === "AddRoute") {
      return <AddRoute />
    }
    if (section === "PutniNalog") {
      return <PutniNalog />
    }
    return null;
  }
  return (
      <div className="App">
        {section !== "Login" && section !== "Register" ? <Header />: null}
        <div style={{display: "flex" }}>
        {section !== "Login" && section !== "Register" ?<LeftSidebar setSection={setSection} />: null}
          <RenderSection />
        </div>
      </div> 
  );
}

export default App;
