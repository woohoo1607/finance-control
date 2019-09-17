import React from 'react';
import {reduxForm, Field, reset} from "redux-form";
import {Input} from "../../FormsControls/FormsControls";
import {reqiredField} from "../../../validators/validators";
import styles from './EditCategoryCard.module.css';


const EditCategoryForm = (props) => {

    return (
            <form onSubmit={props.handleSubmit} >
                <div  className={styles.categoryForm}>
                    <Field name="name" component={Input} placeholder="Name" validate = {[reqiredField]} />
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