import React from 'react';
import styles from './CategoryCard.module.css';

const CategoryCard = (props) => {
    
    return (
            <div className={styles.category}>
                {props.categoryType === "spending" && <p className={styles.spending}>{props.name}</p>}
                {props.categoryType === "incoming" && <p className={styles.incoming}>{props.name}</p>}
                <button>Edit</button>
                <button>Delete</button>
            </div>
            
            )
}

export default CategoryCard;
