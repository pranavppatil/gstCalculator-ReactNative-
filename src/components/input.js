import React, { Component } from 'react'
import { View,StyleSheet,Text, TextInput,Button} from 'react-native'
import {Picker} from 'react-native'
import {connect} from 'react-redux';



class Input extends Component  {
    constructor(props) {
        super(props);
    }
    
    state={
        netPrice:'0',
        gstPercentage:'5',
        totalGst:'0',
        gstVal:'0',
        sgstVal:'0',
    }

    updateGstValue = (value) => {
        this.setState({ gstPercentage: value })
     }

    onPressCalculate =() => {
       // validateInput()
        this.calculateResult()
        this.props.navigation.navigate('Result')
    }
    
    calculateResult = () => {
        this.setState({
            gstVal: parseInt(this.state.netPrice * this.state.gstPercentage / 100),
            sgstVal: parseInt(this.state.netPrice * this.state.gstPercentage / 200),
            totalGst: parseInt(this.state.netPrice) + parseInt(this.state.netPrice * this.state.gstPercentage / 100),
        })
        console.log("In function", this.state.totalGst)
    }

render() {
    
    //console.log(this.state.netPrice)
    //console.log(this.state.gstPercentage)
    console.log(this.state.totalGst)
    //console.log(this.state.gstVal)
  //  console.log(this.state.sgstVal)
        return (
            <>
            <View style={styles.heading}>
                <Text style={styles.headingText}>GST Calculator</Text>
            </View>
            <View style={{flex:2}}>
            <View style={styles.inputField}>
                <View style={{flex:2}}>
                <Text style={styles.inputText}>Net Price </Text>
                 </View>
            <View style={{flex:2}}>
                <TextInput
                onChangeText={text=>{this.setState({
                    netPrice:text
                })}}
                placeholder="Enter Net Price"
                style={styles.inputFieldText}
                keyboardType={'numeric'} 

        />
             </View>
            </View>
            <View style={styles.drompDownField}>
                <View style={{flex:2}}>
                    <Text style={styles.inputText}>GST Percentage</Text>
                </View>
            <View style={{flex:2}}>
                <Picker 
                selectedValue={this.state.gstPercentage} onValueChange={this.updateGstValue}
                style={styles.pickerBox}
                >
                    <Picker.Item label="5%" value='5'/>
                    <Picker.Item label="12%" value='12'/>
                    <Picker.Item label="18%" value="18" />
                    <Picker.Item label="28%" value="28" />
                </Picker>
                </View>
                </View>
            <View style={styles.submitButton}>
            <Button
                title="Calculate"
                color="#841584"
                onPress={this.onPressCalculate}
            />
            </View>
            </View>
            </>
        )
    
}
}

const mapDispatchToProps = (dispatch) => {
    return {

        calculation: (value) => {
            const actionResult= {type:'CALCULATE',fetchValue:value}
            console.log(value)
           // dispatch(actionResult);
        }
        }
}
export default connect(mapDispatchToProps)(Input);

const styles=StyleSheet.create({
heading: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:70
},
headingText: {
    fontSize:30,
    fontWeight:'bold',
},
inputField:{
    textAlign:'center',
    height:100,
    flexDirection:'row',
    alignItems:'center'
},
inputFieldText: {
    borderRadius:10,
    borderWidth:2,
    borderColor:'grey',
    height:40,
    width:150,    
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center'
    
},
inputText: {
    fontSize:20,
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center',
},
drompDownField:{
    height:100,
    flexDirection:'row',
    alignSelf:'center',
    paddingRight:70,
    paddingLeft:30,
    alignItems:'center',

},
pickerBox: {
    height:40,
    width:160,    
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
},
submitButton: {
    padding:100,
}
})