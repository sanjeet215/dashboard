import React from "react";
import { useForm } from "react-hook-form";

import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Button
} from "shards-react";

const AddressForm = () => {

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
                <Col md="12" className="form-group">
                  <label htmlFor="addressLine1">addressLine1</label>
                  <FormInput
                    id="addressLine1"
                    type="text"
                    placeholder="AddressLine1"
                  />
                </Col>
              </Row>
              <Row>
                <Col md="12" className="form-group">
                  <label htmlFor="addressLine1">addressLine2</label>
                  <FormInput
                    id="addressLine2"
                    type="text"
                    placeholder="AddressLine2"
                  />
                </Col>
              </Row>

              <Row>
                <Col md="7" className="form-group">
                  <label htmlFor="city">city</label>
                  <FormInput
                    id="city"
                    type="text"
                    placeholder="city"
                  />
                </Col>
                <Col md="5" className="form-group">
                  <label htmlFor="state">state</label>
                  <FormInput
                    id="state"
                    type="text"
                    placeholder="state"
                  />
                </Col>
              </Row>
              <Row>
                <Col md="5" className="form-group">
                  <label htmlFor="zip">zip</label>
                  <FormInput
                    id="zip"
                    type="text"
                    placeholder="zip"
                  />
                </Col>
                <Col md="7" className="form-group">
                  <label htmlFor="country">country</label>
                  <FormInput
                    id="country"
                    type="text"
                    placeholder="country"
                  />
                </Col>

              </Row>
              <Button type="submit">Update Address</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  );
}

export default AddressForm;
