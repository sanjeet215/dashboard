import React, { useState, useEffect } from "react";
import OrganizationForm from "../formviews/OrganizationForm";
import AddressForm from "../formviews/AddressForm";
import AddEmployee from "../formviews/AddEmployee";
import AddOrganization from "./AddOrganization";

import Tabs from 'react-bootstrap/Tabs'
import Tab  from 'react-bootstrap/Tab'
import TestPage from "./Testpage";

import OrganizationList from "../views/OrganizationList";
import OrganizationStepper from "../views/OrganizationStepper";

function OrganizationTabs() {
    const [key, setKey] = useState('listOrganization');
    return (<Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
    >
        <Tab onClick="testmethod()" eventKey="listOrganization" title="Registered Organization">
            <OrganizationList />
        </Tab>
        <Tab eventKey="profile" title="Add Organization">
            <OrganizationStepper />
        </Tab>
        <Tab eventKey="contact" title="Update Address" disabled>
        </Tab>
    </Tabs>);
}

function testmethod(){
    alert('working');
}

export default OrganizationTabs;