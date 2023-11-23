import {createStore,combineReducers} from "redux"
import changeUserReducer from "./reducer/changeStudentReducer.js"
const rootReducer=combineReducers({
changeUser:changeUserReducer,
})
const store= createStore(rootReducer)

export default store;