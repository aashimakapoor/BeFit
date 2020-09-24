import axios from 'axios';
import { 
    HOME_DATA_FAILURE, 
    HOME_DATA_REQUEST, 
    HOME_DATA_SUCCESS,
} from "../actionTypes/actionTtypes";

// const getHomeDataFailure = () => ({
//     type: HOME_DATA_FAILURE,
//     payload: {
//         error: "You dont have healthy Tips Data",
//     }
// })

// const getHomeDataRequest = () => ({
//     type: HOME_DATA_REQUEST,
// })

const getHomeDataSuccess = (response) => ({
    type: HOME_DATA_SUCCESS,
    payload: {
        response,
    }
})

export function getHomeData(url){
    return (dispatch)=>{
        axios
        .get(url)
        .then(response => dispatch(getHomeDataSuccess(response.data)))
        .catch(console.log("Error"))
        
    }
}