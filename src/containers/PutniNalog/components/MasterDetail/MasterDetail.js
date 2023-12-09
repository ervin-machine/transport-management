import React from 'react';
import Form, {
  SimpleItem,
  GroupItem,
  Label,
} from 'devextreme-react/form';
import {
  DataGrid, Column, Item
} from 'devextreme-react/data-grid';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import TabPanel from 'devextreme-react/tab-panel';
import service from './data.js';

const tasks = service.getTasks();

const DetailTemplate = () => {
    const data = [];
    const columns = ["test"]
    return (
      <React.Fragment>
        <TabPanel animationEnabled={true} swipeEnabled={true}>
          <Item title='test'>
          <DataGrid 
              id="dataGrid"
              dataSource={data}
              showBorders={true}>
              <Column dataField="Datum" />
              <Column dataField="Cas" />
              <Column dataField="pozicija" />
              <Column dataField="Stanje na km brojilu" />
              <Column dataField="Stanje na km brojilu pri pret. uzim. goriva" />
              <Column dataField="Broj racuna" />
              <Column dataField="Plinsko ulje nafta" />
              <Column dataField="Benzin" />
              <Column dataField="Motor. ulja" />
              <Column dataField="Ost. maziva" />
              <Column dataField="Mjesto tankovanja Pump. stanica Potpis i zig" />
            </DataGrid>
          </Item>
          
        
      </TabPanel>
      </React.Fragment>
    );
}

function getTasks(key) {
  return new DataSource({
    store: new ArrayStore({
      data: tasks,
      key: 'ID',
    }),
    filter: ['EmployeeID', '=', key],
  });
}

export default DetailTemplate;
