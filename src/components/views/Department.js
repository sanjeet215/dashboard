import React from 'react';
import { Form, FormGroup, FormInput } from "shards-react";


function Department() {
    return (<Form>
        <FormGroup>
            <label htmlFor="#username">Username</label>
            <FormInput id="#username" placeholder="Username" />
        </FormGroup>
        <FormGroup>
            <label htmlFor="#password">Password</label>
            <FormInput type="password" id="#password" placeholder="Password" />
        </FormGroup>
    </Form>);
}

export default Department;