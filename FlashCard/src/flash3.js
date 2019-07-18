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
    title: 'Cuerpos Geometricos',
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
        { acertijo: "Cuerpo geométrico de cuatro caras triangulares.", key: "Tetraedro", imagen:require("./images/tetraedro.gif")},
        { acertijo: "Cuerpo geométrico de ocho caras triangulares.", key: "Octaedro", imagen:require("./images/octaedro.gif")},
        { acertijo: "Cuerpo geométrico de veinte caras.", key: "Icosaedro", imagen:require("./images/icosaedro.gif")},
        { acertijo: "Cuerpo geométrico de doce caras.", key: "Dodecaedro",imagen:require("./images/dodecaedro.gif")},
        { acertijo: "Es un poliedro limitado por seis caras cuadradas congruentes.", key: "Cubo",imagen:require("./images/cubo.gif")},
        { acertijo: "Es un prisma rectangular ortogonal, cuyas caras forman entre sí ángulos diedros rectos", key: "Ortoedro",imagen:require("./images/ortoedro.gif")},
        { acertijo: "Es un prisma rectangular ortogonal, cuyas caras forman entre sí ángulos diedros rectos", key: "Ortoedro",imagen:require("./images/ortoedro.gif")},
        { acertijo: "Es un prisma rectangular ortogonal, cuyas caras forman entre sí ángulos diedros rectos", key: "Ortoedro",imagen:require("./images/ortoedro.gif")},
        { acertijo: "Es un prisma rectangular ortogonal, cuyas caras forman entre sí ángulos diedros rectos", key: "Ortoedro",imagen:require("./images/ortoedro.gif")},
        { acertijo: "Es un prisma rectangular ortogonal, cuyas caras forman entre sí ángulos diedros rectos", key: "Ortoedro",imagen:require("./images/ortoedro.gif")},
    ];
    return (
        <View style={styles.MainContainer}>
            <FlatList
                data={figures}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
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
