import React from 'react';
import {Image} from 'react-bootstrap';
import {boxTitle, stepsDiv, stepsListItem, listIcon} from '../../styles';

function StepLists({listTitle, stepsList}) {
        return (
                <div style={stepsDiv}>
                <h3 style={{...boxTitle, color: 'black', marginBottom: 18}}>{listTitle}</h3>
                <ul>
                        {
                                stepsList.map((list, i) => {
                                        return (
                                                <li key={i} style={stepsListItem} className="stepListItem">
                                                        <div style={listIcon}><Image src={list.icon} style={{marginTop: -2, marginLeft: -2}} /></div>
                                                        <div>
                                                                <p><span style={{color: 'black', fontFamily: `PFHandbookPro-medium, "san-serif"`}}>Step 0{i+1}: </span>{list.text}</p>
                                                        </div>
                                                </li>
                                        )
                                })
                        }
                </ul>
              </div>
        )
}

export default StepLists
