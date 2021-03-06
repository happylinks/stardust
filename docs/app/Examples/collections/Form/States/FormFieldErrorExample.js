import React from 'react'
import { Checkbox, Form, Input, Select } from 'stardust'

const options = [
  { text: 'Male', value: 'male' },
  { text: 'Female', value: 'female' },
]

const FormFieldErrorExample = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Input label='First name' placeholder='First name' error />
      <Form.Input label='Last name' placeholder='Last name' />
    </Form.Group>
    <Form.Select options={options} placeholder='Gender' error />
    <Form.Checkbox label='I agree to the Terms and Conditions' error />
  </Form>
)

export default FormFieldErrorExample
