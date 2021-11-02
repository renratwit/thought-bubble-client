import * as api from '../api'

export const getThoughts = () => async(dispatch) => {
    try {
        const {data} = await api.getThoughts();
        dispatch({type: 'FETCH_ALL', paylod: data})
    }catch(e) {
        console.log(e)
    }
}