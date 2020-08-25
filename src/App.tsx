import React from 'react';
import Layout from './components/Layout';
import {Tabs} from "antd";
import TabBoat from './components/Tabs/Tab-Boat';
import 'antd/dist/antd.css'
import './bootstrap-grid.min.css'
import Service from './services/moysklad-api';

const {TabPane} = Tabs;


function App() {
  return (
    <Layout>
      <Tabs defaultActiveKey={'1'} size='large' centered type={'card'}>
        <TabPane tab={'Расчет тента для катера'} key={1}>
          <TabBoat/>
        </TabPane>
        <TabPane tab={'Расчет чехла для мотора'} key={2}>
      </TabPane>
      </Tabs>
    </Layout>
  );
}

export default App;
