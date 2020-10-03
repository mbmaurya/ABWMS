import React, {useState} from 'react'
import { transactionBox } from '../../styles';
import BuyIn from '../homepage/components/BuyIn';
import GoldRate from './GoldRate';
import Summary from './Summary';

function TransactionBox(props) {
        const {noInput} = props;
        const [goldRate, setGoldRate] = useState(5375.38);

        return (
          <div style={ !noInput ? transactionBox : {...transactionBox, marginTop: 12}}>
            <GoldRate goldRate={goldRate} />
            <div className="buyInDiv" style={{marginTop: 40, marginBottom: 40}}>
                {
                  !noInput ? <BuyIn goldRate={goldRate} /> : null
                }
            </div>
            {!noInput ? <hr /> : null}
            <Summary />
          </div>
        );
}

export default TransactionBox
