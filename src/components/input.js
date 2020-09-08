import React, { Component } from 'react'
import { View,StyleSheet,Text, TextInput,Button, Alert} from 'react-native'
import {Picker} from 'react-native'
import {connect} from 'react-redux';



class Input extends Component  {
    constructor(props) {
    
        super(props);
    this.state={
        netPrice:'0',
        gstPercentage:'5',
        totalGst:'0',
        gstVal:'0',
        sgstVal:'0',
    }
    }
    updateGstValue = (value) => {
        this.setState({ gstPercentage: value })
     }

    onPressCalculate =() => {
        this.validateInput()
        
    }
    
    validateInput = () => {
       // if(!isNaN(parseInt(this.state.netPrice))) {
        //    console.log(this.state.netPrice)    
        //}
        //console.log("Hello")
        /*if(this.state.netPrice.includes('-')) {
            var newNetPrice=this.state.netPrice.replace('-','');
            this.setState({netPrice:newNetPrice})
        }
        else if(this.state.netPrice.includes)
        this.setState({
            netPrice: this.state.netPrice.replace(/\s/g, ''),
            netPrice:this.state.netPrice.replace('-',''),
            netPrice:this.state.netPrice.replace('..','')
        })
        */
      if(this.state.netPrice.includes(' ')|| this.state.netPrice.includes('-') || this.state.netPrice.includes('..')) {
        Alert.alert("Your Price input contains invalid character please enter a number") 
      }
      else {
        this.calculateResult()
        this.props.navigation.navigate('Result')

      }
    }
    calculateResult =() => {
       this.setState({
            gstVal: parseInt(this.state.netPrice * this.state.gstPercentage / 100),
            sgstVal: parseInt(this.state.netPrice * this.state.gstPercentage / 200),
            totalGst: parseInt(this.state.netPrice) + parseInt(this.state.netPrice * this.state.gstPercentage / 100),
        })
        
    }


render() {
    this.props.calculation(this.state.gstVal,this.state.sgstVal,this.state.totalGst)

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

const mapStateToProps  =(state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        calculation: (gst,cgst,total) => {
            const actionResult= {type:'CALCULATE',gstValue:gst,cgstValue:cgst,totalValue:total}
            dispatch(actionResult);
        }
        }
}
export default connect(mapStateToProps,mapDispatchToProps)(Input);

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