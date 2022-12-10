const initialState = {
    data: [],
    idx:[],
    idy:[],
}

const dataReducer=(state= initialState, action)=>{
    switch(action.type){
        case "STORE_DATA":
            return{
                ...state,
                data: action.payload,
            };
        case "STORE_IDX":
            return {
                ...state,
                idx: action.payload,
            }
        case "STORE_IDY":
            return {
                ...state,
                idy: action.payload,
              }
        default:
            return state;
    }
}

export default dataReducer;