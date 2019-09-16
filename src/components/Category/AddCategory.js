import React from 'react';
import {reduxForm, Field} from "redux-form";
import {Input} from "../FormsControls/FormsControls";
import {reqiredField} from "../../validators/validators";
import styles from './AddCategory.module.css';


const AddCategoryForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit} >
                <div className={styles.vategoryForm}>
                    <Field name="name" component={Input} placeholder="Name" validate = {[reqiredField]} />
                    <Field name="categoryType" component={Input} placeholder="Type" validate = {[reqiredField]} />
                    <button type="submit">Add</button>
                </div>
                                               
            </form>

            );
};


const AddCategoryReduxForm = reduxForm({form: 'addCategoryForm'})(AddCategoryForm);

const AddCategory = (props) => {

    const onSubmit = (formData) => {
        props.addCategory(formData);
    };
    

    return (
            <div>
                <AddCategoryReduxForm onSubmit={onSubmit} />
            </div>
            );
};

export default AddCategory;