import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./Actiontype"

const initialState = {
    books: [],
    isLoading: false,
    isEroor: false
}



export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case GET_BOOKS_REQUEST:
            return { ...state, isLoading: true }
        case GET_BOOKS_SUCCESS:
            return { ...state, isLoading: false, isEroor: false, books: payload }

        case GET_BOOKS_FAILURE:
            return { ...state, isLoading: false, isEroor: true }
        default:
            return state
    }


}