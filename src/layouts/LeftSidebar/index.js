import React from 'react'
import "./LeftSidebar.css"
import logo from "../../assets/images/Kusur_logo_FINAL-white-01.svg"
import dashboardLogo from "../../assets/images/Dashboard.svg"
import loyalty from "../../assets/images/loyalty.svg"
import image from "../../assets/images/image.svg"
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import TuneIcon from '@mui/icons-material/Tune';
import expandMoreIcon from "../../assets/images/expandMoreIcon.svg"

function LeftSidebar(props) {
  const { section } = props;

  return (
    <div className='sidebar-content'>
      <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" style={{ background: "#181818" }}>
        <div class="container-fluid d-flex flex-column p-0">
          <hr class="sidebar-divider my-0" />
          <ul class="navbar-nav text-light" id="accordionSidebar">
            <li class="nav-item"><a class="nav-link" href="index.html"><i class="fas fa-tachometer-alt"></i><span>Dashboard</span></a><a class="nav-link" href="index.html"><i class="fas fa-tachometer-alt"></i><span>Partners</span></a></li>
            <li class="nav-item"></li>
            <li class="nav-item"><a class="nav-link" href="table.html"><i class="fas fa-table"></i><span>Export/Import</span></a><a class="nav-link" href="table.html"><i class="fas fa-table"></i><span>Export</span></a><a class="nav-link" href="table.html"><i class="fas fa-table"></i><span>Import</span></a><a class="nav-link" href="table.html"><i class="fas fa-table"></i><span>Route Tracking</span></a><a class="nav-link" href="table.html"><i class="fas fa-table"></i><span>Drivers</span></a><a class="nav-link" href="table.html"><i class="fas fa-table"></i><span>Putni Nalog</span></a></li>
            <li class="nav-item"></li>
            <li class="nav-item"><a class="nav-link active" href="blank.html"><i class="fas fa-window-maximize"></i><span>Route Calculate</span></a><a class="nav-link active" href="blank.html"><i class="fas fa-window-maximize"></i><span>Analiza</span></a><a class="nav-link active" href="blank.html"><i class="fas fa-window-maximize"></i><span>Mjesecni izvjestaj</span></a><a class="nav-link active" href="blank.html"><i class="fas fa-window-maximize"></i><span>Dnevni Izvjestaj</span></a></li>
            <li class="nav-item"></li>
          </ul>
          <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
        </div>
      </nav>
    </div>
  )
}

export default LeftSidebar