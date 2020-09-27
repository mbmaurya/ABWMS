import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { steps, stepElipse } from '../../styles';


function Steps({currentStep}) {
        return (
                <ListGroup as="ul" style={steps}>
                                {
                                        (currentStep === 1) ?
                                        <ListGroup.Item as="li" style={stepElipse} active></ListGroup.Item> :
                                        <ListGroup.Item as="li" style={stepElipse}></ListGroup.Item>

                                }
                                {
                                        (currentStep === 2 || currentStep === 3) ?
                                        <ListGroup.Item as="li" style={stepElipse} active></ListGroup.Item> :
                                        <ListGroup.Item as="li" style={stepElipse}></ListGroup.Item>

                                }
                                {
                                        (currentStep === 4) ?
                                        <ListGroup.Item as="li" style={stepElipse} active></ListGroup.Item> :
                                        <ListGroup.Item as="li" style={stepElipse}></ListGroup.Item>

                                }
                        </ListGroup>
        )
}

export default Steps
