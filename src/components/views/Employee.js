import React, { useState, useEffect } from "react";
import AddressForm from "../formviews/AddressForm";

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tabs'

function Employee() {
    const [key, setKey] = useState('home');
    return (<Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
    >
        <Tab eventKey="home" title="Home">
            <AddressForm />
        </Tab>
        <Tab eventKey="profile" title="Profile">
            <AddressForm />
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
            <AddressForm />
        </Tab>
    </Tabs>);
}

export default Employee;