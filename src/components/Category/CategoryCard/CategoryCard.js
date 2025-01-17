import React from 'react';
import styles from './CategoryCard.module.css';
import EditCategoryCard from './EditCategoryCard';


class CategoryCard extends React.Component {
     
    state ={
        editMode: false,
        data: {
            id: this.props.id,
            name: this.props.name
        }
    }
    
    componentDidUpdate (prevProps, prevState) {
        if (prevProps !== this.props) {
            this.setState({
                data: {
                    id: this.props.id,
                    name: this.props.name
                }
            });
        }
    }
    
    activatedEditMode = () => {
        if (!this.props.isActiveEdit) {
            this.props.activeteEdit();
            this.setState({
                editMode: true
            });
        };
    }
    
    deactivatedEditMode = () => {
        this.props.deactiveteEdit();
        this.setState({
            editMode: false
        });
    }
    
    putCat = (data) => {
        this.deactivatedEditMode();
        this.props.putCategory(data);
    };
    delCat = (id) => {
        this.props.deleteCategory(id);
    };
    render () {
    return (
            <div>
            {this.state.editMode && 
                <div className={styles.category}>    
                    <EditCategoryCard name={this.state.data.name} 
                                      id={this.state.data.id}
                                      put={this.putCat}
                                      categoryType={this.props.categoryType}
                                      deactivatedEditMode={this.deactivatedEditMode}
                                      uniqueCategorys={this.props.uniqueCategorys}
                                      />
                </div>}
            {!this.state.editMode && <div className={styles.category}>
                {this.props.categoryType === "spending" && <p className={styles.spending}>{this.props.name}</p>}
                {this.props.categoryType === "incoming" && <p className={styles.incoming}>{this.props.name}</p>}
                <button onClick={e => {this.activatedEditMode()}}>Edit</button>
                <button onClick={e => {this.delCat(this.props.id)}}>Delete</button>
            </div>}
            </div>
            )
   }
}

export default CategoryCard;
