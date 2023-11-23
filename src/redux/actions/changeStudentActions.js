import { CHANGEUSER } from "./actionsTypes.js";

export const changeUser=(value)=>{

    return{
        type:CHANGEUSER,
        value:value
    }
}

