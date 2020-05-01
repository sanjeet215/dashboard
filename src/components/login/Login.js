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

const Login = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col md="4" className="form-group">
                  <label htmlFor="contactEmail">Email</label>
                  <FormInput
                    // id="contactEmail"
                    type="email"
                    placeholder="Email"
                    name="email"
                    ref={register({
                      required: "Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "invalid email address"
                      }
                    })}
                  />
                  {errors.email && errors.email.message}
                </Col>
                <Col md="5" className="form-group">
                  <label htmlFor="contactName">Contact Name</label>
                  <FormInput
                    id="contactName"
                    type="text"
                    placeholder="Contact person"
                  />
                </Col>
                <Col md="3">
                  <label htmlFor="contactNumber">Mobile No</label>
                  <FormInput
                    id="contactNumber"
                    type="text"
                    placeholder="contactNumber"
                  />
                </Col>
              </Row>

              <Row>
                <Col md="4" className="form-group">
                  <label htmlFor="orgRefName">Organization Ref Name</label>
                  <FormInput
                    id="orgRefName"
                    type="text"
                    placeholder="Unique Name"
                  />
                </Col>
                <Col md="5" className="form-group">
                  <label htmlFor="orgName">Organization Name</label>
                  <FormInput
                    id="orgName"
                    type="text"
                    placeholder="Organization Name"
                  />
                </Col>
              </Row>

              <FormGroup>
                <label htmlFor="description">Description</label>
                <FormInput id="description" placeholder="Organization Description" />
              </FormGroup>
              <Button type="submit">Add Organization</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>

  );
};


export default Login;