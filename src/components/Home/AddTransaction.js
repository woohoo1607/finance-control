import React from 'react';
import {reduxForm, Field} from "redux-form";
import {Input, Select} from "../FormsControls/FormsControls";
import {reqiredField} from "../../validators/validators";
import styles from './AddTransaction.module.css';


const AddForm = (props) => {
    console.log(props.category);
    return (
            <form onSubmit={props.handleSubmit} >
                <div className={styles.transForm}>
                <Field name="category" component={Select} placeholder="Category" validate = {[reqiredField]}>
                {}<option>gggg</option>
                </Field>
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
        formData.sum = +formData.sum;
        console.log(formData);
        props.addData(formData);
    };
    let categ = props.category.map(category =>{
        let name;
        if (category.categoryType === "incoming") {
            name = "+" + category.name;
            return {name};
        } else {
            name = "-" + category.name;
            return {name};
        }
    });

    return (
            <div>
                <AddReduxForm onSubmit={onSubmit} category={categ}/>
            </div>
            );
};

export default AddTransaction;