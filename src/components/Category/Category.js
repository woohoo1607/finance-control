import React from 'react';
import CategoryCard from './CategoryCard/CategoryCard';
import AddCategory from './AddCategory';
import styles from './Category.module.css';
//import Preloader from "../Preloader";

class Category extends React.Component {

render() {
    let allCategorys = this.props.home.category.map(category => {
        return category.categoryType;
    });
    function a (value, index, self) {
        return self.indexOf(value) === index;
    }
    let uniqueCategorys = allCategorys.filter(a);
    console.log(uniqueCategorys);
    
    return (
            <div className="center">
                <AddCategory  addCategory={this.props.addCategory}/>
                <div className={styles.categorys}>
                    {this.props.home.category.map(category => <CategoryCard key={category.id} id={category.id} name={category.name}
                    categoryType={category.categoryType} putCategory={this.props.putCategory}
                    deleteCategory={this.props.deleteCategory} uniqueCategorys={uniqueCategorys}/>).reverse()}
                </div>
            </div>
            );

};
};

export default Category;
