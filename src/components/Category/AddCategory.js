import React from 'react';
import {reduxForm, Field} from "redux-form";
import {Input} from "../FormsControls/FormsControls";
import {reqiredField} from "../../validators/validators";
import styles from './AddCategory.module.css';


const AddCategoryForm = (props) => {

    return (
            <form onSubmit={props.handleSubmit} >
                <div className={styles.categoryForm}>
                    <Field name="name" component={Input} placeholder="Name" validate = {[reqiredField]} />
                    <p>Is it income?</p><Field name="categoryType" component={Input} placeholder="Type" type="checkbox" />
                    <button type="submit">Add</button>
                </div>
                                               
            </form>

            );
};


const AddCategoryReduxForm = reduxForm({form: 'addCategoryForm'})(AddCategoryForm);

const AddCategory = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
        if(!formData.categoryType){
            formData.categoryType = "spending";
        } else {
            formData.categoryType = "incoming";
        }
        props.addCategory(formData);
    };
    

    return (
            <div>
                <AddCategoryReduxForm onSubmit={onSubmit} />
            </div>
            );
};

export default AddCategory;