import React from 'react';
import Home from './Home';
import {setInvoice, addData} from "../../reducers/homeReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class HomeContainer extends React.Component {

    render() {
        
        return (
                <Home home={this.props.home}
                      addData={this.props.addData}/>
                
                )
    }
}

let mapStateToProps = (state) => {
    return {
        home: state.home
    };
};



export default connect(mapStateToProps, {setInvoice, addData})(withRouter(HomeContainer));
