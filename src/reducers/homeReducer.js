const initialState =  {
    homeDataContainer: {},
    isLoading: false,
    isError: false,
};
export function homeDataReducer(state=initialState,action){
    switch(action.type){
        case "HOME_DATA_SUCCESS": return {...state,
            homeDataContainer: action.payload.response,
        };

        default: return state;
    }
}