//import {filmsAPI} from "../api/api";

const SET_INVOICE = "SET_INVOICE";
const ADD_DATA = "ADD_DATA";
const ADD_CATEGORY = "ADD_CATEGORY";
const PUT_CATEGORY = "PUT_CATEGORY";
const DELETE_CATEGORY = "DELETE_CATEGORY";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


let initialState = {
    data: [{id: 0, refill: true, category: "The salary", sum: 12000},
           {id: 1, refill: false, category: "Film", sum: 400},
           {id: 2, refill: false, category: "Food", sum: 300},
           {id: 3, refill: false, category: "Clothes", sum: 730}],
    category: [{id: 0, name: "Food", categoryType: "spending"},
               {id: 1, name: "The salary", categoryType:"incoming"},
               {id: 2, name: "Film", categoryType:"spending"},
               {id: 3, name: "Clothes", categoryType:"spending"}],
    isFetching: false
};

const filmsReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case SET_INVOICE:
        {
            return {
                ...state,
                data: [...action.data]
            };
        }
        case ADD_CATEGORY:
        {
            let allId = [...state.category.map(id => id=id.id)];
            let newId = Math.max.apply(Math, allId)+1;
            action.category.id = newId;

            return {
                ...state,
                category: [...state.category, ...[action.category]]
            };
        }
        case PUT_CATEGORY:
        {
            let newCategory = [...state.category];
            let objIndex = newCategory.findIndex(obj => obj.id === action.category.id);
            newCategory[objIndex].name = action.category.name;
            newCategory[objIndex].categoryType = action.category.categoryType;
            return {
                ...state,
                category: [...newCategory]
            };
        }
        case DELETE_CATEGORY:
        {
            let newCategory = [...state.category];
            let objIndex = newCategory.findIndex(obj => obj.id === action.category);
            newCategory.splice(objIndex, 1);
            return {
                ...state,
                category: [...newCategory]
            };
        }
        case ADD_DATA:
        {   
            let newData = {};
            let category = state.category.find(item => item.id === action.data.categoryId);
            let allId = [...state.data.map(id => id=id.id)];
            let newId = Math.max.apply(Math, allId)+1;
            newData.id = newId;
            newData.sum = action.data.sum;
            newData.category = category.name;
            if (category.categoryType === "spending") {
                newData.refill = false;
            } else {
                newData.refill = true;
            }

            return {
                ...state,
                data: [...state.data, ...[newData]]
            };
        }
        case TOGGLE_IS_FETCHING:
        {
            return {
                ...state, isFetching: action.isFetching
            };
        }
        default:
            return state;
}
};

export const setInvoice = (data) =>
    ({type: SET_INVOICE, data: data});

export const addData = (data) =>
    ({type: ADD_DATA, data: data});

export const addCategory = (category) =>
    ({type: ADD_CATEGORY, category: category});

export const putCategory = (category) =>
    ({type: PUT_CATEGORY, category: category});

export const deleteCategory = (category) =>
    ({type: DELETE_CATEGORY, category: category});

export const toggleIsFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING, isFetching});

/*export const getFilms = (currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        filmsAPI.getFilms(currentPage).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setFilms(response.results));
            dispatch(setCurrentPage(response.page));
            dispatch(setTotalPages(response.total_pages));
        });  
    };
};
*/

export default filmsReducer;