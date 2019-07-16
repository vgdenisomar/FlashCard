import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,
    TouchableOpacity} from 'react-native';
export default class App extends Component{
    static navigationOptions = {
        header:null
    
      }
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Juego de habilidad</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('home')}><Text style={styles.signupButton}>Ingresar</Text></TouchableOpacity>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });