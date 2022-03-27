import * as API from '../../API/api.js'

export const getCoincidences = (text) => {
    return async (dispatch) => {
        const {data} = await API.findingCandies(text);

        dispatch({
            type: 'FIND', 
            payload: data
        })
    } 
}

export const clearCoincidences = () => ({type:'CLEAR_COINCIDENCES'})