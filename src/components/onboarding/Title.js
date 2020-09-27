import React from 'react';
import { boxTitle } from '../../styles';

function Title({icon, title}) {
        return <p style={boxTitle}>{icon}{title}</p>
}

export default Title
