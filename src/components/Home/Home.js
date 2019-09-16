import React from 'react';
import TransactionCard from './TransactionCard/TransactionCard';
import AddTransaction from './AddTransaction';
import styles from './Home.module.css';
//import Preloader from "../Preloader";

class Home extends React.Component {

/*componentDidUpdate(prevProps, prevState) {
    if (prevProps.films.currentPage !== this.props.films.currentPage) {
            window.scrollTo(0,0);
        }
}*/

render() {
               
    return (<>
                <AddTransaction addData={this.props.addData}/>
                <div className={styles.finance}>
                    {this.props.home.data.map(transaction => <TransactionCard key={transaction.id} refill={transaction.refill}
                    category={transaction.category} sum={transaction.sum} />)}
                </div>
            </>
            );

};
};

export default Home;
