import React from 'react'
import {Form} from 'react-bootstrap'

const TextArea = ({name,rows,placeholder,onChange}) => {
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{name}</Form.Label>
            <Form.Control as="textarea" rows={rows} name={name} placeholder={placeholder} onChange={onChange} style={{resize: 'none'}} />
        </Form.Group>
    )
}

export default TextArea