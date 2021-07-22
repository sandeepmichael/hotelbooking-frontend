import React, {useEffect, useState} from 'react'
import { Tabs } from 'antd';
import Loader from '../Loader'
import Swal from 'sweetalert2'
import axios from 'axios';
import Addroom from '../Adminpanel/Addroom';
import Users from '../Adminpanel/Adminusers';
import Rooms from '../Adminpanel/Adminrooms';
import Bookings from '../Adminpanel/Adminbookings';

const { TabPane } = Tabs;
const Adminscreen = () => {

useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentuser'))
    if(!user.isAdmin){
    window.location.href='/home'
    }
},[])



    return (
        <div>
            <b><h1>Admin Panel</h1></b>
             <Tabs defaultActiveKey="1">
    <TabPane tab="Bookings" key="1">
      <Bookings />
    </TabPane>
    <TabPane tab="Rooms" key="2">
      <Rooms/>
    </TabPane>
    <TabPane tab="Add Room" key="3">
      <Addroom/>
    </TabPane>
    <TabPane tab="users" key="4">
      <Users/>
    </TabPane>
    
  </Tabs>
        </div>
    )
}

export default Adminscreen


























