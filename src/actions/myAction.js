import axios from 'axios';

export function increamentData(url){
    return (dispatch)=>{
        axios
        .get(url)
        .then((resp)=>dispatch({
            type:"INCREAMENT_NUM",
            data:resp.data.increament
        }))
    }
}