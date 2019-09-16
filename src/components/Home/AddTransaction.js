import React from 'react';
import {reduxForm, Field} from "redux-form";
import {Input} from "../FormsControls/FormsControls";
import {reqiredField} from "../../validators/validators";
import styles from './AddTransaction.module.css';


const AddForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit} >
                <div className={styles.transForm}>
                    <Field name="category" component={Input} placeholder="Category" validate = {[reqiredField]} />
                    <Field name="sum" component={Input} placeholder="Sum" validate = {[reqiredField]} />
                    <Field name="refill" component={Input} placeholder="Refill" type="checkbox" />
                    <button type="submit">Add</button>
                </div>
                                               
            </form>

            );
};


const AddReduxForm = reduxForm({form: 'addForm'})(AddForm);

const AddTransaction = (props) => {

    const onSubmit = (formData) => {
        props.addData(formData);
    };
    

    return (
            <div>
                <AddReduxForm onSubmit={onSubmit} initialValues={{refill: false}}/>
            </div>
            );
};

export default AddTransaction;