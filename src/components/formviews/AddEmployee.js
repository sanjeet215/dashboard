import React from "react";
import { useForm } from "react-hook-form";

import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Button
} from "shards-react";

const AddEmployee = () => {

  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  const init = {
    orgRefName: '',
    orgName: '',
    description: '',
    contactName: '',
    contactNumber: '',
    contactEmail: ''
  }

  return (
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col md="4" className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <FormInput
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                  />
                </Col>
                <Col md="4" className="form-group">
                  <label htmlFor="middleName">Middle Name</label>
                  <FormInput
                    id="middleName"
                    type="text"
                    placeholder="Middle Name"
                  />
                </Col>
                <Col md="4">
                  <label htmlFor="lastName">Last Name</label>
                  <FormInput
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                  />
                </Col>
              </Row>

              <Row>
                <Col md="4" className="form-group">
                  <label htmlFor="employeeid">Employee Id</label>
                  <FormInput
                    id="employeeid"
                    type="text"
                    placeholder="Employee Id"
                  />
                </Col>
                <Col md="4" className="form-group">
                  <label htmlFor="emailid">Email Id</label>
                  <FormInput
                    id="emailid"
                    type="email"
                    placeholder="Email Id"
                  />
                </Col>
                <Col md="4">
                  <label htmlFor="phoneno">Phone Number</label>
                  <FormInput
                    id="phoneno"
                    type="text"
                    placeholder="Phone Number"
                  />
                </Col>
              </Row>
              <Button type="submit">Add Admin</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  );
}

export default AddEmployee;
