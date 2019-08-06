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
          <Text style={styles.txt}>Selecciona un nivel para empezar</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('flash')} style={styles.btningresar4}><Text style={styles.signupButton}>Nivel Bajo</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('flash1')} style={styles.btningresar3}><Text style={styles.signupButton}>Nivel Medio</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('flash2')} style={styles.btningresar2}><Text style={styles.signupButton}>Nivel Alto</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('flash3')} style={styles.btningresar1}><Text style={styles.signupButton}>Cuerpos geometricos</Text></TouchableOpacity>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2D9BB4',
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
    
    btningresar1:{
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
    txt:{
      fontSize:30,
      margin:10
    },
    btningresar2:{
      backgroundColor:'#7A64F2',
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
    
    btningresar3:{
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
    
    btningresar4:{
      backgroundColor:'#7A64F2',
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

  });