import React from 'react';
import styles from './CategoryCard.module.css';

const CategoryCard = (props) => {
    const putCat = (id) => {
        props.putCategory(id);
    };
    const delCat = (id) => {
        console.log(id);
        props.deleteCategory(id);
    };
    return (
            <div className={styles.category}>
                {props.categoryType === "spending" && <p className={styles.spending}>{props.name}</p>}
                {props.categoryType === "incoming" && <p className={styles.incoming}>{props.name}</p>}
                <button onClick={e => {putCat(props.id)}}>Edit</button>
                <button onClick={e => {delCat(props.id)}}>Delete</button>
            </div>
            
            )
}

export default CategoryCard;
