import { CHANGEUSER } from "../actions/actionsTypes.js";

const initialState={ id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    password:"1234",
    bio: "Pretty cool guy and even cooler photographer!",
    posts:[]}

const changeUserReducer=(state=initialState,action)=>{
switch(action.type){
    case CHANGEUSER: return action.value
    default :return state
}
}

export default changeUserReducer;