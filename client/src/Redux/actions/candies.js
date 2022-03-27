import axios from 'axios'
import * as API from '../../API/api.js'

export const getPosts = () => {
    return async (dispatch) => {
        const {data} = await API.getCandies()

        dispatch ({
            type: 'FETCH',
            payload: data
        })
    }
}

export const uploadPost = (formData) => {
    return async (dispatch) => {
        const {data} = await API.postCandies(formData)

        dispatch({
            type: 'POST',
            payload: data
        })
    }
}

