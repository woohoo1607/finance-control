import React from 'react';
import TransactionCard from './TransactionCard/TransactionCard';
import AddTransaction from './AddTransaction';
import styles from './Home.module.css';

class Home extends React.Component {

countBalance = (start, end, data, result) => {
    if(start>end)
        return result;
    if (data[start].refill) {
        result=result+data[start].sum;
    } else {
        result=result-data[start].sum;
    }
    return this.countBalance(start+1, end, data, result);
}

render() {
    let result=0;
    var balance = this.countBalance(0, (this.props.home.data.length-1), this.props.home.data, result);

        return (
            <div className="center">
                <AddTransaction addData={this.props.addData} category={this.props.home.category}/>
                <div className={styles.balance}>
                    <p>Balance:</p>
                    <p>{balance} грн.</p>
                </div>
                <div className={styles.finance}>
                    {this.props.home.data.map(transaction => <TransactionCard key={transaction.id} refill={transaction.refill}
                    category={transaction.category} sum={transaction.sum} />).reverse()}
                </div>
            </div>
            );

};
};

export default Home;
