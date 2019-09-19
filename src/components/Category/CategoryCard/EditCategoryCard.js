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
                            {props.uniqueCategorys.map((category, index)=> <option key={index}>{category}</option>)}
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
      
    let copyUniqueCategorys = [...props.uniqueCategorys];
    let objIndex = copyUniqueCategorys.findIndex(obj => obj === props.categoryType);
    let selfCategory = copyUniqueCategorys.splice(objIndex,1);
    let selfUniqueCategorys = [...selfCategory, ...copyUniqueCategorys];

    const onSubmit = (formData) => {
        formData.id = props.id;
        props.put(formData);
    };
    

    return (
            <div>
                <EditCategoryReduxForm onSubmit={onSubmit} 
                                       initialValues={{name: props.name, categoryType: selfCategory[0]}}
                                       cancel={props.deactivatedEditMode}
                                       uniqueCategorys={selfUniqueCategorys}/>
            </div>
            );
};

export default EditCategoryCard;