import React from 'react';
import {reduxForm, reset, Field} from "redux-form";
import {Input, Select} from "../FormsControls/FormsControls";
import {reqiredField, numbers} from "../../validators/validators";
import styles from './AddTransaction.module.css';


const AddForm = (props) => {

    return (
            <form onSubmit={props.handleSubmit} >
                <div className={styles.transForm}>
                <Field name="category" component={Select} placeholder="Category" validate = {[reqiredField]}>
                    <option></option>
                    {props.category.map(category=> <option key={category.id}>{category.name}</option>)}
                </Field>
                    <Field name="sum" component={Input} placeholder="Sum" validate = {[reqiredField, numbers]} />
                    <button type="submit">Add</button>
                </div>
                                               
            </form>

            );
};
const afterSubmit = (result, dispatch) =>
  dispatch(reset('addForm'));

const AddReduxForm = reduxForm({form: 'addForm', onSubmitSuccess:afterSubmit})(AddForm);

const AddTransaction = (props) => {

    const onSubmit = (formData) => {
        formData.sum = +formData.sum;
        let categoryAdd = categArr.find(item=> item.name===formData.category);
        formData.categoryId = categoryAdd.id;
        props.addData(formData);
    };
    let categArr = props.category.map(category =>{
        let name;
        let id;
        if (category.categoryType === "incoming") {
            name = "+" + category.name;
            id = category.id;
            return {id, name};
        } else {
            name = "-" + category.name;
            id = category.id;
            return {id, name};
        }
    });

    return (
            <div>
                <AddReduxForm onSubmit={onSubmit} category={categArr}/>
            </div>
            );
};

export default AddTransaction;