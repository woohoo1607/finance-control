import React from 'react';
import styles from './TransactionCard.module.css';

const TransactionCard = (props) => {
    return (
            <div className={props.refill ? styles.incoming : styles.spending}>
                <p>{props.category}: </p>
                {props.refill && <p>+{props.sum} грн.</p>}
                {!props.refill && <p>-{props.sum} грн.</p>}
            </div>
            
            )
}

export default TransactionCard;
