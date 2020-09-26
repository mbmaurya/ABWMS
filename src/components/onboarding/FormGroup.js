import React from 'react';
import { Form } from 'react-bootstrap';
import { formLabel, formInput, inputError } from '../../styles';

function FormGroup(props) {
        const {controlId, label, inputType, placeholder, disabled, selectOptions} = props;
        return (
                <Form.Group controlId={controlId}>
                        <Form.Label style={formLabel}>{label}</Form.Label>
                        {
                                (inputType !== 'select') ? 
                                <Form.Control style={formInput} type={inputType} placeholder={placeholder} disabled={disabled} /> :
                                <Form.Control as="select" style={formInput}>
                                        {
                                                selectOptions.map(selectOption => {
                                                        return (
                                                                <option value={selectOption} key={selectOption}>{selectOption}</option>
                                                        )
                                                })
                                        }
                                </Form.Control>
                        }
                        <Form.Text style={inputError}></Form.Text>
                </Form.Group>
        )
}

export default FormGroup
