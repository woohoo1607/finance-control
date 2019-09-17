import React from 'react';
import styles from "./FormsControls.module.css"


export const Input = ({input, meta, ...props}) => {
    return (
            <div className={styles.formControl + " " + (meta.touched && meta.error ? styles.error : "")}>
                <input {...input} {...props} />
                { meta.touched && meta.error && <span> ! </span>}
            </div>
    );
};

export const Select = ({input, meta, ...props}) => {
    return (
            <div className={styles.formControl + " " + (meta.touched && meta.error ? styles.error : "")}>
                <select {...input} {...props} />
                { meta.touched && meta.error && <span> ! </span>}
            </div>
    );
};