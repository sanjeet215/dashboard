import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    Alert
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import OrganizationForm from "../../components/formviews/OrganizationForm";
import AddressForm from "../../components/formviews/AddressForm";
import AddEmployee from "../../components/formviews/AddEmployee";

const Addorganization = () => (
    <div>
        <Container fluid className="px-0">
            <Alert className="mb-0">
                <i className="fa fa-info mx-2"></i> How you doin'? I'm just a friendly, good-looking notification message and I come in all the colors you can see below. Pretty cool, huh?
      </Alert>
        </Container>
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle
                    sm="4"
                    title="Onboard New Organization"
                    subtitle="Overview"
                    className="text-sm-left"
                />
            </Row>

            <Row>
                <Col lg="8" className="mb-4">
                    {/* Complete Form Example */}
                    <Card small>
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">New Organization</h6>
                        </CardHeader>
                        <OrganizationForm />
                    </Card>

                    <p>

                    </p>
                    <Card small>
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Add Admin for Organization</h6>
                        </CardHeader>
                        <AddEmployee />
                    </Card>
                </Col>
                <Col lg="4" className="mb-4">
                    {/* Sliders & Progress Bars */}
                    <Card small>
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Update Address</h6>
                        </CardHeader>
                        <AddressForm />
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Addorganization;