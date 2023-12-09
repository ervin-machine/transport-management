import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import './PutniNalog.css'

import {
    DataGrid, Column, MasterDetail
} from 'devextreme-react/data-grid';
import Typography from '@mui/material/Typography';
import DetailTemplate from './components/MasterDetail/MasterDetail';

const columns = ['Pozicija', 'Nalogodavac', 'Datum Utovara', 'Mjesto Utovara', 'Datum Istovara', 'Mjesto Istovara', 'Cijena'];
const data = [
  {
    id: 1,
    pozicija: "Export",
    nalogodavac: "Bingo d.o.o",
    datumUtovara: "11/11/2023",
    mjestoUtovara: "Tuzla",
    datumIstovara: "22/11/2023",
    mjestoIstovara: "Srebrenik",
    cijena: "120"
  }
]

const PutniNalog = () => {
  
  return (
    <div className='putni-nalog-container'>
      <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
        Putni Nalog
      </Typography>
      <DataGrid 
        id="dataGrid"
        className='putni-nalog-datagrid'
        dataSource={data}
        defaultColumns={columns}
        showBorders={true}>
        <Column dataField="pozicija" />
        <Column dataField="nalogodavac" />
        <Column dataField="datumUtovara" />
        <Column dataField="mjestoUtovara" />
        <Column dataField="datumIstovara" />
        <Column dataField="mjestoIstovara" />
        <Column dataField="cijena" />
        <MasterDetail
          enabled={true}
          component={DetailTemplate}
        />
      </DataGrid>
    </div>
      
  );
};

export default PutniNalog;