import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import styles from './styles';

const iconCart = require('../../../assets/images/ic_shopping_cart_white_24dp.png');
const iconSearch = require('../../../assets/images/ic_search_grey_24dp.png');
const banner = require('../../../assets/images/country-1.jpg');
const banner_event = require('../../../assets/images/country-14.jpg');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <Image source={iconSearch} style={styles.iconSearch} />
          <TextInput style={styles.inputSearch} placeholder="Search" placeholderTextColor='#C7C7C7' />
          <Image source={iconCart}  style={styles.iconCart} />
        </View>
        <View style={styles.location}>
          <Text style={ styles.textLocaltion }> Giao hàng tới: Tòa nhà Sông Đà, đường Mễ Trì, Mỹ Đình, Nam Từ Liêm </Text>
        </View>
        <View style={ styles.banner }>
          <Image source={banner} style={styles.banner} resizeMode="cover" />
        </View>
        <View style={ styles.event }>
          <Image source={banner_event} style={styles.banner_event} resizeMode="cover" />
        </View>
        <View style={ styles.listCategory }>
          <View style={{height: 40}}>
            <Text>Title Category</Text>
          </View>
          <View style={{height: 200}}>
            <Text>Item Category</Text>
          </View>
        </View>
        <View style={ styles.listService }>
          <Text> List service </Text>
        </View>
      </View>
    );
  }
}
