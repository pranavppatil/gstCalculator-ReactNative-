import React from 'react'
import {connect} from 'react-redux';


function calculate() {
    

}

const mapStateToProps =(state) => {
    return {
        initialPrice: state.netPrice,
        gstVal:state.gstPercent,
    }
}
export default connect(mapStateToProps)(calculate)
