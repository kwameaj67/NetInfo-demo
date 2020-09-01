import React from 'react';
import { StyleSheet, Text, View,Dimensions,Alert } from 'react-native';
import  NetInfo from '@react-native-community/netinfo'


let unsubscribe = null
export default class App extends React.Component {
  constructor (props){
    super(props)
    this.handleConnectivity = this.handleConnectivity.bind(this)
  }
  state = {
    connected:null
  }
  componentDidMount(){
     unsubscribe =  NetInfo.addEventListener(this.handleConnectivity)
}
  componentWillUnmount(){
    if (unsubscribe != null) unsubscribe()
}
  handleConnectivity = (state) => {
    if (state.isConnected) {
      this.setState({connected: state.isConnected});
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
    } else {
      this.setState({connected: state.isConnected});
    }
    console.log(this.state.connected)
  }
 
  render(){
  return(
    <View style={styles.container}>
      {this.state.connected === true ?
        <Text style={styles.about}>You are connected.</Text>
        :  
        <Text style={styles.about}>Oops! Please check your internet connection</Text>
        }
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  about:{
     fontSize: 14,
     letterSpacing: -0.4,
     color:"black",
  },
});
