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
    FlatList,
    Image,
    ImageBackground
} from 'react-native';
import FlipCard from 'react-native-flip-card'
const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

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
        title: 'Nivel Bajo',
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
                    <Text style={{ color: '#000' }}>{item.acertijo}</Text>
                </View>
                {/* Back Side */}
                <ImageBackground  source={item.imagen} style={styles.card2}>
                    <Text style={{ color: '#000' }}>{item.key}</Text>
                </ImageBackground>
                
            </FlipCard>

        )
    }

    render() {
        var figures = [
            { acertijo: "Es redondo", key: "circulo", imagen:require("./images/circulos.jpg")},
            { acertijo: "Tiene cuatro lados iguales", key: "Cuadrado", imagen:require("./images/cuadrados.jpg")},
            { acertijo: "es redondo", key: "triangulo" },
            { acertijo: "es redondo", key: "circulo" },
            { acertijo: "es redondo", key: "circulo" },
            { acertijo: "es redondo", key: "circulo" },

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
        height: 100,
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10,
        marginLeft:'2%',
        width:'96%',
        shadowColor: "#000",
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
        height: 100,
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

