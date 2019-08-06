import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,
    TouchableOpacity, Image} from 'react-native';
export default class App extends Component{
    static navigationOptions = {
        header:null
    
      }
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Juego de habilidad</Text>
          <View style={styles.container2}>
            <Image style={{ width: 150, height: 150, marginBottom: 25, textAlign: 'center' }}
            source={require('./images/inicio.png')} />
            </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('home')}  style={styles.btningresar}><Text style={styles.txtingresar}>Ingresar</Text></TouchableOpacity>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2eafc8',
    },
    welcome: {
      fontSize: 30,
      textAlign: 'center',
      margin: 20,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    btningresar:{
      backgroundColor:'#dad82b',
      width: 250,
      borderRadius: 15,
      paddingHorizontal: 10,
      fontSize: 16,
      color: '#000',
      height: 50,
      marginVertical: 10,
      marginLeft:0,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    txtingresar:{
      
      fontSize: 24,
      fontWeight: '500',
      color: '#fff',
      textAlign: 'center',
    }
  });