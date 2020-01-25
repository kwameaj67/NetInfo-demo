import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import  NetInfoState from '@react-native-community/netinfo'


const { width } = Dimensions.get('window');
export default class App extends React.Component {
  state = {
    connected:true
  }
  componentDidMount(){
    NetInfoState.isConnected.addEventListener('connectionChange',this.handleConnectivity);
  }
  componentWillUnmount(){
    NetInfoState.isConnected.removeEventListener('connectionChange',this.handleConnectivity);
  }
  handleConnectivity = (connected) => {
    this.setState({connected});
    console.log(`is connected: ${this.state.connected}`)
  }
  
  render(){
  return(
    <View style={styles.container}>
      {this.state.connected
      ?
      <View style={styles.showtext}>
          <View style={{backgroundColor: 'green',padding:15,borderRadius:5}}>
            <Text style={styles.about}>You are connected.</Text>
         </View>
       </View>
      :
      <View style={styles.showtext}>
         <View style={{backgroundColor: '#b52424',padding:15,borderRadius:5}}>
            <Text style={styles.about}>Oops! Please check your internet connection</Text>
         </View>
       </View>
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
  showtext:{
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      width,
      position: 'absolute',
      top: 30,
    },
      about:{
      fontSize: 14,
      letterSpacing: -0.4,
      color:"white",
      },
});
