import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from "shards-react";

import './OrganizationList.css';

function OrganizationList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:8080/api/org");
      setData(result.data.data);
      console.log(result.data.data);
    })();
  }, []);

  return (

    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-1">
        <Col lg="6">
        </Col>
      </Row>

      <Row>
        <Col>
          <table class="table dt-responsive">
            <thead>
              <tr>
                <th scope="col" className="border-0">
                  #
                  </th>
                <th scope="col" className="border-0">
                  Org-Id
                  </th>
                <th scope="col" className="border-0">
                  Organization Name
                  </th>
                <th scope="col" className="border-0">
                  Contact Name
                  </th>
                <th scope="col" className="border-0">
                  Phone No
                  </th>
                <th scope="col" className="border-0">
                  Email Id
                  </th>
                <th scope="col" className="border-0">
                  Status
                  </th>
                <th scope="col" className="border-0">

                </th>

              </tr>
            </thead>
            <tbody>

              {(data.length > 0) ? data.map((data, index) => {
                return (
                  <tr key={data.orgId}>
                    <td>{data.orgId}</td>
                    <td>{data.orgRefName}</td>
                    <td>{data.orgName}</td>
                    {/* <td>{data.description}</td> */}
                    <td>{data.contactName}</td>
                    <td>{data.contactNumber}</td>
                    <td>{data.contactEmail}</td>
                    <td>{data.status.toString()}</td>
                    <td><a href="/addorganization" className="fa fa-info mx-2"> </a></td>
                  </tr>
                )
              }) : <tr><td colSpan="5">Loading...</td></tr>}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>

  );
}

export default OrganizationList;
