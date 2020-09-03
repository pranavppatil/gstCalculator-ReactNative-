import { act } from "react-test-renderer"
import { Value } from "react-native-reanimated"


const initState={
    totalGst:0,
    totalCgst:0,
    totalPrice:0
}


const rootReducer = (state=initState,action) => {
    switch(action.type) {
        /*case 'INPUT_GST_CHANGE':
            return Object.assign({},state,{gstPercent:action.value});
        case 'INPUT_PRICE_CHANGE':
            return Object.assign({},state,{netPrice:action.text});
        */
        case 'CALCUALTE':
            return {
                ...state,
                totalGst:action.totalGst
            }
       /* case 'CALCULATE':
            return Object.assign({}, state, {
                totalGst: action.fetchValue
              })*/
        default: 
        return state;
    }
} 
export default rootReducer
