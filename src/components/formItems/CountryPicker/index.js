import React from 'react'
import {Form} from 'react-bootstrap'
import {CountrySelector} from 'components/selector/countrySelector'

export const CountryPicker = React.forwardRef((props,ref)=>{
  return (
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Author Country</Form.Label>
      <CountrySelector onChange={props.onChange} ref={ref} />
    </Form.Group>
  )
})

