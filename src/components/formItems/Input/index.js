import React from 'react'
import {Form, Col} from 'react-bootstrap'

const Input = ({name,type,placeholder,onChange}) => {
    return (
        <Col md>
            <Form.Label>{name}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} name={name} onChange={onChange} />
        </Col>
    )
}

export default Input