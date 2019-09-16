import React from 'react';
import CategoryCard from './CategoryCard/CategoryCard';
import AddCategory from './AddCategory';
import styles from './Category.module.css';
//import Preloader from "../Preloader";

class Category extends React.Component {


render() {
  
    return (
            <div className="center">
                <AddCategory  addCategory={this.props.addCategory}/>
                <div className={styles.categorys}>
                    {this.props.home.category.map(category => <CategoryCard key={category.id} name={category.name}
                    categoryType={category.categoryType} putCategory={this.props.putCategory}
                    deleteCategory={this.props.deleteCategory}/>).reverse()}
                </div>
            </div>
            );

};
};

export default Category;
