import React from 'react';
import TransactionCard from './TransactionCard/TransactionCard';
import AddTransaction from './AddTransaction';
import styles from './Home.module.css';
//import Preloader from "../Preloader";

class Home extends React.Component {

countBalance = (start, end, acc) => {
    if(start>=end)
        return acc;
    acc.push(start);
    return this.addPages(start+1, end, acc);
}

render() {
    
    return (
            <div className="center">
                <AddTransaction addData={this.props.addData}/>
                <div className={styles.finance}>
                    {this.props.home.data.map(transaction => <TransactionCard key={transaction.id} refill={transaction.refill}
                    category={transaction.category} sum={transaction.sum} />).reverse()}
                </div>
            </div>
            );

};
};

export default Home;
