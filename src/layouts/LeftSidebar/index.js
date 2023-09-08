import React, { useState } from 'react'
import "./LeftSidebar.css"

import AddModal from '../../containers/PublicComponents/AddModal';

function LeftSidebar(props) {
  const { setSection } = props;
  const [isEIExpanded, setIsEIExpanded] = useState(false);
  const [isIzvjestajExpanded, setIsIzvjestajExpanded] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  const handleEIExpand = () => {
    setIsEIExpanded(!isEIExpanded);
  }

  const handleIzvjestajExpand = () => {
    setIsIzvjestajExpanded(!isIzvjestajExpanded);
  }

  const handleExportImport = () => {
    handleEIExpand();
    setSection("ExportImport")
  }

  const handleIzvjestaj = () => {
    handleIzvjestajExpand();
    setSection("MjesecnaAnaliza")
  }

  const handleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  }

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
            <li className="nav-item" onClick={handleExportImport}>
              <i class="fas fa-table"></i><span>Export/Import</span>
            </li>
            <div style={{ display: isEIExpanded ? "block" : "none", marginLeft: "15px"}}>
            <li className="nav-item" onClick={() => setSection("Export")}>
              <i class="fas fa-table"></i><span>Export</span>
            </li>
            <li className="nav-item" onClick={() => setSection("Import")}>
              <i class="fas fa-table"></i><span>Import</span>
            </li>
            </div>
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
            <li className="nav-item" onClick={handleIzvjestaj}>
              <i class="fas fa-window-maximize"></i><span>Izvjestaj</span>
            </li>
            <div style={{ display: isIzvjestajExpanded ? "block" : "none", marginLeft: "15px"}}>
              <li className="nav-item" onClick={() => setSection("MjesecnaAnaliza")}>
                <i class="fas fa-window-maximize"></i><span>Mjesecni izvjestaj</span>
              </li>
              <li className="nav-item" onClick={() => setSection("DnevnaAnaliza")}>
                <i class="fas fa-window-maximize"></i><span>Dnevni Izvjestaj</span>
              </li>
            </div>
          </ul>
          
        </div>
        
      </nav>
        <AddModal setSection={setSection} isOpen={isAddModalOpen} />
        <button className='add-button' onClick={handleAddModal}>ADD</button>
    </div>
  )
}

export default LeftSidebar