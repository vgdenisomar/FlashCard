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
          <TouchableOpacity onPress={() => this.props.navigation.navigate('flash')}><Text style={styles.signupButton}>Nivel Bajo</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('flash1')}><Text style={styles.signupButton}>Nivel Medio</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('flash2')}><Text style={styles.signupButton}>Nivel Alto</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('flash3')}><Text style={styles.signupButton}>Cuerpos geometricos</Text></TouchableOpacity>
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