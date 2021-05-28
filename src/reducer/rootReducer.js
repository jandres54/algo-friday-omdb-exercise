const initialState = {
    subHdrName: ("")
};

function rootReducer(state = initialState, action){
    switch (action.type){
        case "CHANGE_TO_BEST_MOVIES":
            return {...state, subHdrName: state.subHdrName
            };
        default:
            return state;
    }
}

export default rootReducer;