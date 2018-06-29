
import axios from 'axios';
import { USER_FETCH_SUCCESS,BASE_URL} from './types';

export const userFetch = () => {
    return (dispatch) => {
        const URL = BASE_URL+'/Person/GetUsers';
        axios.get(URL)
            .then(response => { 
                dispatch({
                    type: USER_FETCH_SUCCESS, payload: response.data
                });
            })
            .catch((error) => {
                console.error(error);
            });
       
    }
};