import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./Actiontype"
import axios from "axios"
export const getBooksRequestAction = () => {
    return { type: GET_BOOKS_REQUEST }
}


export const getBooksSuccessAction = (payload) => {
    return { type: GET_BOOKS_SUCCESS, payload }
}



export const getBooksFailureAction = () => {
    return { type: GET_BOOKS_FAILURE }
}


export const getBooks = (params) => (dispatch) => {
    dispatch(getBooksRequestAction())

    axios.get(" http://localhost:8000/deals", params).then((res) => {
        dispatch(getBooksSuccessAction(res.data))
    })
        .catch((er) => {
            getBooksFailureAction()
        })
}