import React from 'react'
import { Form, Col } from 'react-bootstrap'
import { DateSelector } from 'components/selector'

const DatePicker = ({onChange}) => {
    return (
        <Col md>
            <Form.Label>date published</Form.Label>
            <DateSelector onChange={onChange}/>
        </Col>
    )
}

export default DatePicker
