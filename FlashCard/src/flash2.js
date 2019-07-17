import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  AppRegistry,
  ActivityIndicator,
  ListView,
  ImageBackground,
  FlatList,
  Image
} from 'react-native';
import FlipCard from 'react-native-flip-card'

export default class detalle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  GetItem(names) {

    alert(names);

  }

  static navigationOptions = {
    title: 'Nivel Alto',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#355cec',
    },

  }
  renderItem = ({ item }) => {
    return (
        <FlipCard
            style={styles.container}
            friction={6}
            perspective={1000}
            flipHorizontal={true}
            flipVertical={false}
            flip={false}
            clickable={true}
            onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
        >
            {/* Face Side */}
            <View style={styles.card}>
                <Text style={{ color: '#000',textAlign:'center', fontSize:16}}>{item.acertijo}</Text>
            </View>
            {/* Back Side */}
            <ImageBackground  source={item.imagen} style={styles.card2}>
                <Text style={{ color: '#000', fontSize:25, backgroundColor:'#fff', borderRadius:5, padding:2}}>{item.key}</Text>
            </ImageBackground>
            
        </FlipCard>

    )
}

render() {
    var figures = [
        { acertijo: "Tiene 2 lados y 2 ángulos iguales", key: "Triangulo Isosceles", imagen:require("./images/isoceles.png")},
        { acertijo: "Son paralelogramos que tienen sus lados y ángulos iguales dos a dos", key: "Romboide", imagen:require("./images/romboides.png")},
        { acertijo: "Una figura del plano con cinco lados y ángulos iguales (todos sus ángulos son de 108º)", key: "Pentágono Regular", imagen:require("./images/pentagono.jpg")},
        { acertijo: "Es una figura geométrica con seis lados y ángulos iguales (todos sus ángulos son de 120º)", key: "Hexágono regular",imagen:require("./images/hexagono.jpg")},
        { acertijo: "Es una figura geométrica con siete lados y ángulos iguales (todos sus ángulos son de 128,6º)", key: "Heptágono regular",imagen:require("./images/heptagono.gif")},
        { acertijo: "Es una figura del plano con ocho lados y ángulos iguales (todos sus ángulos son de 135º)", key: "Octágono regular",imagen:require("./images/octagono.png")},

    ];
    return (
        <View style={styles.MainContainer}>
            <FlatList
                data={figures}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )

}
}

const styles = StyleSheet.create({

MainContainer:{
    marginTop: 0,
},
container: {
    marginTop: 10,
},

card: {
    height: 150,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    marginLeft:'2%',
    width:'96%',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    
    elevation: 12,
},
card2: {
    height: 150,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    marginLeft:'2%',
    width:'98%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    }
},
cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
},
rowViewContainer: {
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    color: '#000',

},

cont: {
    color: '#000'
}

})

