import React, { useState } from 'react'
import "./App.css"
import Header from './layouts/Header/Header';
import LeftSidebar from "./layouts/LeftSidebar/index";
import Dashboard from "./containers/Dashboard";
import Tracking from './containers/Tracking';
import RouteCalculating from './containers/RouteCalculating/RouteCalculating';
import ExportImport from './containers/ExportImport/ExportImport';
import DnevnaAnaliza from './containers/DnevnaAnaliza';
import MjesecnaAnaliza from './containers/MjesecnaAnaliza/index'
import Partners from './containers/Partners/index'
import Drivers from './containers/Drivers';
import ProfitEvidence from './containers/Dashboard/components/ProfitEvidence';

function App() {
  const [section, setSection] = useState('ProfitEvidence')

  const RenderSection = () => {
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

    if (section === "ExportImport") {
      return (
        <ExportImport />
      )
    }
    if (section === "Export") {
      return (
        <ExportImport />
      )
    }
    if (section === "Import") {
      return (
        <ExportImport />
      )
    }
    if (section === "DnevnaAnaliza") {
      return (
        <DnevnaAnaliza />
      )
    }
    if (section === "MjesecnaAnaliza") {
      return (
        <MjesecnaAnaliza />
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
    return null;
  }
  return (
      <div className="App">
        <Header />
        <div style={{display: "flex" }}>
          <LeftSidebar setSection={setSection} />
          <RenderSection />
        </div>
      </div>
  );
}

export default App;
