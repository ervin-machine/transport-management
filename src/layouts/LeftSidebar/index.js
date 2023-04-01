import React from 'react'
import "./LeftSidebar.css"

function LeftSidebar(props) {
  const { setSection } = props;

  return (
    <div className='sidebar-content'>
      <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" style={{ background: "#181818" }}>
        <div class="container-fluid d-flex flex-column p-0">
          <hr class="sidebar-divider my-0" />
          <ul class="navbar-nav text-light" id="accordionSidebar">
            <li className="nav-item" onClick={() => setSection("Dashboard")}>
              <i class="fas fa-tachometer-alt"></i><span>Dashboard</span>
            </li>
            <li className="nav-item" onClick={() => setSection("Partners")}>
              <i class="fas fa-tachometer-alt"></i><span>Partners</span>
            </li>
            <li className="nav-item" onClick={() => setSection("ExportImport")}>
              <i class="fas fa-table"></i><span>Export/Import</span>
            </li>
            <li className="nav-item" onClick={() => setSection("Export")}>
              <i class="fas fa-table"></i><span>Export</span>
            </li>
            <li className="nav-item" onClick={() => setSection("Import")}>
              <i class="fas fa-table"></i><span>Import</span>
            </li>
            <li className="nav-item" onClick={() => setSection("Tracking")}>
              <i class="fas fa-table"></i><span>Route Tracking</span>
            </li>
            <li className="nav-item" onClick={() => setSection("Drivers")}>
              <i class="fas fa-table"></i><span>Drivers</span>
            </li>
            <li className="nav-item" onClick={() => setSection("PutniNalog")}>
              <i class="fas fa-table"></i><span>Putni Nalog</span>
            </li>
            <li className="nav-item" onClick={() => setSection("RouteCalculating")}>
              <i class="fas fa-window-maximize"></i><span>Route Calculate</span>
            </li>
            <li className="nav-item" onClick={() => setSection("MjesecnaAnaliza")}>
              <i class="fas fa-window-maximize"></i><span>Analiza</span>
            </li>
            <li className="nav-item" onClick={() => setSection("MjesecnaAnaliza")}>
              <i class="fas fa-window-maximize"></i><span>Mjesecni izvjestaj</span>
            </li>
            <li className="nav-item" onClick={() => setSection("DnevnaAnaliza")}>
              <i class="fas fa-window-maximize"></i><span>Dnevni Izvjestaj</span>
            </li>
          </ul>
          <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
        </div>
      </nav>
    </div>
  )
}

export default LeftSidebar