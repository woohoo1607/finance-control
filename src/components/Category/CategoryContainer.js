import React from 'react';
import Category from './Category';
import {addCategory, putCategory, deleteCategory} from "../../reducers/homeReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class CategoryContainer extends React.Component {

     render() {

        return (
                <Category home={this.props.home}
                          addCategory={this.props.addCategory}
                          putCategory={this.props.putCategory}
                          deleteCategory={this.props.deleteCategory}/>
                
                )
    }
}

let mapStateToProps = (state) => {
    return {
        home: state.home
    };
};



export default connect(mapStateToProps, {addCategory, putCategory, deleteCategory})(withRouter(CategoryContainer));
