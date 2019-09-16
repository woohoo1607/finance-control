//import {filmsAPI} from "../api/api";

const SET_INVOICE = "SET_INVOICE";
const ADD_DATA = "ADD_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


let initialState = {
    data: [{id: 0, refill: true, category: "The salary", sum: 12000},
           {id: 1, refill: false, category: "Film", sum: 400},
           {id: 2, refill: false, category: "Food", sum: 300},
           {id: 3, refill: false, category: "Clothes", sum: 730}],
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
        case ADD_DATA:
        {
            return {
                ...state,
                data: [...state.data, ...[action.data]]
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