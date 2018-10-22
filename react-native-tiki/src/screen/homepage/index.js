import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

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
          <TextInput style={styles.inputSearch } placeholder='Search' placeholderTextColor='#C7C7C7'></TextInput>
        </View>
        <View style={styles.location}>
          <Text style={ styles.textLocaltion }> Giao hàng tới: Tòa nhà Sông Đà, đường Mễ Trì, Mỹ Đình, Nam Từ Liêm </Text>
        </View>
        <View style={ styles.banner }>
          <Text> Banner </Text>
        </View>
        <View style={ styles.event }>
          <Text> Event </Text>
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
