import { act } from "react-test-renderer"
import { Value } from "react-native-reanimated"


const initState={
    totalGst:0,
    totalCgst:0,
    totalPrice:0
}


const rootReducer = (state=initState,action) => {
    switch(action.type) {
        case 'CALCULATE':
            return Object.assign({}, state, {
                totalGst: action.gstValue,
                totalCgst:action.cgstValue,
                totalPrice:action.totalValue
              })
        default: 
        return state;
    }
} 
export default rootReducer
