import React from 'react';
import Home from './Home';
import {setInvoice, addData} from "../../reducers/homeReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class HomeContainer extends React.Component {

    
 /*   componentDidUpdate (prevProps, prevState) {
        if (prevProps.match.params.page !== this.props.match.params.page) {
            this.props.getFilms(this.props.match.params.page);
            window.scrollTo(0,0);
        }
    }*/
    
   /* componentDidMount() {
        if (this.props.match.params.page) {
            this.props.getFilms(this.props.match.params.page);
        } else {
            this.props.getFilms();
        }
        if (this.props.match.params.req) {
            this.props.searchFilms(this.props.match.params.req);
        }
    }   */


    render() {
     /*   let searching = false;
        if (this.props.match.path === "/search/:req") {
            if (this.props.match.params.req) {
                searching = true;
                console.log(this.props.match.params.req);
            } else {
                searching = false;
            }
        }*/
        
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
