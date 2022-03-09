import React from 'react'
import { AgeSelector } from 'components/selector/ageSelector'
import {Form} from 'react-bootstrap'


export const AgePicker = React.forwardRef((props,ref) => {
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Author Age</Form.Label>
            <AgeSelector onChange={props.onChange} ref={ref} size={120} />
        </Form.Group>
    )
})

