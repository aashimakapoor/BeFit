const initialState =  {
    counter:0,
    number:0
};
export function increament(state=initialState,action){
    switch(action.type){
        // case "INCREAMENT_NUM": return {...state,
        //          counter:action.data.counter,
        //          number:action.data.number
        //       };
        case "INCREAMENT_NUM": return ({},{
            counter:action.data.counter,
            number:action.data.number
        });
        default: return state;
    }
}