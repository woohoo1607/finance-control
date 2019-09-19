import React from 'react';
import {reduxForm, Field, reset} from "redux-form";
import {Input, Select} from "../../FormsControls/FormsControls";
import {reqiredField} from "../../../validators/validators";
import styles from './EditCategoryCard.module.css';


const EditCategoryForm = (props) => {

    return (
            <form onSubmit={props.handleSubmit} >
                <div className={styles.categoryForm}>
                    <div className={styles.inputs}>
                        <Field name="name" component={Input} placeholder="Name" validate = {[reqiredField]} />
                        <Field name="categoryType" component={Select} placeholder="CategoryType" validate = {[reqiredField]}>
                            <option></option>
                            <option></option>
                        </Field>
                    </div>
                    <button type="submit">Save</button>
                    <button onClick = {()=> {props.cancel()}}>Cancel</button>
                </div>
                                               
            </form>

            );
};


const EditCategoryReduxForm = reduxForm({form: 'editCategoryForm'})(EditCategoryForm);

const EditCategoryCard = (props) => {

    const onSubmit = (formData) => {
        formData.id = props.id;
        props.put(formData);
    };
    

    return (
            <div>
                <EditCategoryReduxForm onSubmit={onSubmit} 
                                       initialValues={{name: props.name}}
                                       cancel={props.deactivatedEditMode}/>
            </div>
            );
};

export default EditCategoryCard;