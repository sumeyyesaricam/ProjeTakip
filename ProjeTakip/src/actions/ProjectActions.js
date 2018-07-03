
import axios from 'axios';
import { PROJECT_FETCH_SUCCESS,BASE_URL} from './types';

export const projectFetch = () => {
    return (dispatch) => {
        const URL = BASE_URL+'/Project/GetProjects';
        axios.get(URL)
            .then(response => { 
                dispatch({
                    type: PROJECT_FETCH_SUCCESS, payload: response.data
                });
            })
            .catch((error) => {
                console.error(error);
            });
       
    }
};