import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {connect} from 'react-redux';

class Result extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>
                        Result
                    </Text>
                </View>
                <View style={styles.headContainer}>
                    <Text style={styles.output}>
                        Total GST Value is found to be:  {this.props.totalGst}
                    </Text>
                    <Text style={styles.output}>
                        Total CGST Value is found to be:
                    </Text>

                    <Text style={styles.output}>
                        Total SGST Value is found to be:
                    </Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.finalResult}>
                        Total Price inclusive of GST is found to be: {this.props.totalGst}
                    </Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps =(state) => {
    return {
        totalGst:state.totalGst
    }
}
/*
const mapDispatchToProps = (dispatch) => {
    return {

        calculation: () => {
            const actionResult= {type:'CALCULATE'}
            dispatch(actionResult);
        }
        }
}
*/
export default connect(mapStateToProps)(Result);


const styles=StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        
    },
    heading:{
        alignItems:'center',
        height:30,
    },
    headingText: {
        fontSize:40,
        fontWeight:'bold',

    },
    headContainer: {
        height:200,
        paddingTop:30,
    },
    bodyContainer: {
        height:300,
    },
    output:{
        padding:10,
        fontSize:18,
    },
    finalResult: {
        flex:1,
        padding:20,
        fontWeight:'bold',
        fontSize:24,
    }
})