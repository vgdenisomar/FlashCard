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
        <View style={{ alignItems: 'center',height:100, backgroundColor:'#000'}}>
          <Text style={{color:'#fff'}}>{item.acertijo}</Text>
        </View>
        {/* Back Side */}
        <View style={{ alignItems: 'center',height:100, backgroundColor:'#000' }}>
          <Text style={{color:'#fff'}}>{item.key}</Text>
        </View>
      </FlipCard>

    )
  }
  fetchData = async () => {
    fetch('http://sustento.000webhostapp.com/detalle.php', {
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        // we will pass our input data to server
        id: 15
      })

    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount() {
    this.fetchData();
  }


  render() {
    var figures = [
      {acertijo:"es redondo",key:"circulo"},
      {acertijo:"es redondo",key:"ciuadrado"},
      {acertijo:"es redondo",key:"triangulo"},
      {acertijo:"es redondo",key:"circulo"},
      {acertijo:"es redondo",key:"circulo"},
      {acertijo:"es redondo",key:"circulo"},

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

  container: {
    marginTop:25,
  },

  card: {

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

