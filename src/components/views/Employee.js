import React, { useState, useEffect } from "react";
import AddressForm from "../formviews/AddressForm";
import AddEmployee from "../formviews/AddEmployee";
import AddOrganization from "../views/AddOrganization";

import Tabs from 'react-bootstrap/Tabs'
import Tab  from 'react-bootstrap/Tab'
import TestPage from "./Testpage";

function Employee() {
    const [key, setKey] = useState('home');
    return (<Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
    >
        <Tab eventKey="home" title="New Organization">
            <AddOrganization />
        </Tab>
        <Tab eventKey="profile" title="Add Administrator">
            <AddressForm />
        </Tab>
        <Tab eventKey="test" title="Test Page">
            <TestPage />
        </Tab>
        <Tab eventKey="contact" title="Update Address" disabled>
            <AddEmployee />
        </Tab>
    </Tabs>);
}

export default Employee;