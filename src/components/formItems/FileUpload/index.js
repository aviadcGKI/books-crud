import React from 'react'
import {Form,Col} from 'react-bootstrap'

const FileUpload = ({name,onChange}) => {
  return (
    <Col md>
      <Form.Label>Add an image</Form.Label>
      <Form.Control type="file" name={name} onChange={onChange} />
    </Col>
  )
}

export default FileUpload
