import * as API from '../../API/api.js'

export const getTagsAction = () => {
    return async (dispatch) => {
        const {data} = await API.getTags()

        dispatch ({
            type: 'FETCH_TAGS',
            payload: data
        })
    }
}