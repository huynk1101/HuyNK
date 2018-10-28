import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, ScrollView  } from 'react-native';
import styles from './styles';

const iconCart = require('../../../assets/images/ic_shopping_cart_white_24dp.png');
const iconSearch = require('../../../assets/images/ic_search_grey_24dp.png');
const iconMenu = require('../../../assets/images/ic_menu_white_24dp.png');
const iconLocation = require('../../../assets/images/ic_location_red.png');
const banner = require('../../../assets/images/country-1.jpg');
const banner_event = require('../../../assets/images/country-14.jpg');

var listCategory = [
  {"name":"Nhà Sách Tiki","image_url":"https:\/\/vcdn.tikicdn.com\/media\/upload\/2017\/06\/21\/821750786e0b0fa9db5859aca6608ea8.jpeg"},
  {"name":"Đồ Chơi - Mẹ & Bé","image_url":"https:\/\/vcdn.tikicdn.com\/media\/upload\/2017\/06\/21\/f774bde99ad56c41bdb57997e864323a.jpeg"},
  {"name":"Bách Hóa Online","image_url":"https:\/\/salt.tikicdn.com/ts\/category\/64\/de\/71/304bb012e2fa4c920c18f74c524330a2.jpg"},
  {"name":"Làm Đẹp - Sức Khỏe","image_url":"https:\/\/salt.tikicdn.com\/ts\/category\/ac\/f3/09\/b9d30ace23fbecab2ce0bd0dfb71de1d.jpg"},
  {"name":"Thời Trang","image_url":"https:\/\/salt.tikicdn.com\/ts\/category\/f5\/fa\/04\/de7cb1cce34783972d3c0f7ea45dc8d8.png"},
  {"name":"Điện Gia Dụng","image_url":"https:\/\/vcdn.tikicdn.com\/media\/upload\/2017\/06\/21\/f26712dbb5aa367b7ca7c5ad6e1fdb12.jpeg"},
  {"name":"Ô Tô - Xe Máy - Xe Đạp","image_url":"https:\/\/salt.tikicdn.com\/ts\/category\/eb\/14\/4f\/13b27a76812c0a87d6c6e3ad56e29824.jpg"},
  {"name":"Voucher - Dịch vụ","image_url":"https:\/\/salt.tikicdn.com\/ts\/category\/f6\/09\/a6\/28e857298269d18a22122c5a0f6582db.jpg"},
  {"name":"Nhà Cửa - Đời Sống","image_url":"https:\/\/vcdn.tikicdn.com\/media\/upload\/2017\/06\/21\/d4594b54da1a975d099a566c866e49a3.jpeg"},
  {"name":"Thể Thao - Dã Ngoại","image_url":"https:\/\/vcdn.tikicdn.com\/media\/upload\/2017\/06\/21\/9f9305358a63c6e70a329af32b4cbdfa.jpeg"},
  {"name":"Tivi & Thiết Bị Nghe Nhìn","image_url":"https:\/\/salt.tikicdn.com\/ts\/category\/56\/12\/70\/e263caf2914f0f8013f9acd5c790f7a0.png"},
  {"name":"Điện Thoại - Máy Tính Bảng","image_url":"https:\/\/salt.tikicdn.com\/ts\/category\/fe\/aa\/56\/6e4dedfc6a5f042a4d2edbcfeeb3ba5a.png"},
  {"name":"Máy Ảnh - Máy Quay Phim","image_url":"https:\/\/vcdn.tikicdn.com\/media\/upload\/2017\/06\/21\/3b12ac83b10408ddf33204197b4f34cf.jpeg"},
  {"name":"Laptop - Máy Vi Tính","image_url":"https:\/\/salt.tikicdn.com\/ts\/category\/03\/f0\/03\/f48f5a2fcb6f11192758f9b5beb79f15.png"},
  {"name":"Thiết Bị Số - Phụ Kiện Số","image_url":"https:\/\/vcdn.tikicdn.com\/media\/upload\/2017\/06\/21\/846aec38753ca3e8b4a04cbae61cc863.jpeg"}
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderHeader() {
    return (
      <View style={styles.header}>
        <View style={styles.iconMenu}>
          <Image source={iconMenu} style={{width: 30, height: 30}} />
        </View>
        <View style={styles.search}>
          <Image source={iconSearch} style={styles.iconSearch} />
          <TextInput style={styles.inputSearch} placeholder="Search" placeholderTextColor='#C7C7C7' />
        </View>
        <View style={styles.iconCart}>
          <Image source={iconCart} style={{width: 30, height: 30}} />
        </View>
      </View>
    );
  }

  renderLocation() {
    return (
      <View style={styles.location}>
        <Image source={iconLocation} style={{width: 14, height: 20}} />
        <Text style={ styles.textLocaltion }> Giao hàng tới: Tòa nhà Sông Đà, đường Mễ Trì, Mỹ Đình, Nam Từ Liêm </Text>
      </View>
    );
  }

  renderBanner() {
    return (
      <View style={ styles.banner }>
        <Image source={banner} style={styles.banner} resizeMode="cover" />
      </View>
    );
  }

  renderEvent() {
    return (
      <View style={ styles.event }>
        <Image source={banner_event} style={styles.banner_event} resizeMode="cover" />
      </View>
    );
  }

  renderCategory() {
    return (
      <View style={{backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', height: 150}}>
        <View style={{paddingTop: 10}}>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <View style={{width: '70%'}}>
              <Text style={{paddingLeft: 10}}>Danh sách ngành hàng</Text>
            </View>
            <TouchableOpacity  style={styles.seeAllCategory}>
              <Text style={{color: '#FFFFFF'}}>XEM TẤT CẢ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listCategory}>
            <FlatList data={listCategory} horizontal
              renderItem={({item}) => 
                <View style={styles.itemCat}>
                  <Image style={{width: 50, height: 50}} source={{ uri: item.image_url }} />
                  <Text>{item.name}</Text>
                </View>
              }
              keyExtractor={(item) => item.toString()}
            />
          </View>     
        </View>
      </View>
    );
  }

  renderService() {
    return (
      <View style={ styles.listService }>
        <View>
          <Text style={{color: '#FFFFFF', paddingTop: 10, paddingLeft: 10}}> Dịch vụ tiện ích </Text>
        </View>
        <View>
          <FlatList data={listCategory} horizontal
                renderItem={({item}) => 
                  <View style={styles.itemCat}>
                    <Image style={{width: 50, height: 50}} source={{ uri: item.image_url }} />
                    <Text style={{color: '#FFFFFF', paddingTop: 10}}>{item.name}</Text>
                  </View>
                }
                keyExtractor={(item) => item.toString()}
              />
        </View>
      </View>
    );
  }

  renderAuthentication() {
    return (
      <View style={{height: 100, padding: 10}}>
        <View style={{flexDirection: 'column', marginBottom: 10, width: '80%'}}>
          <View>
            <Text style={{paddingLeft: 10}}>Đăng nhập để trải nghiệm tốt nhất</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{marginHorizontal: 10}}>
              <TouchableOpacity  style={styles.register}>
                <Text style={{color: '#FFFFFF'}}>ĐĂNG KÝ</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity  style={styles.login}>
                <Text style={{color: '#FFFFFF'}}>ĐĂNG NHẬP</Text>
              </TouchableOpacity>
            </View>            
          </View>
        </View>
      </View>
    );
  }
  render() {
    return (
      <ScrollView  style={styles.container}>
        {this.renderHeader()}
        {this.renderLocation()}
        {this.renderBanner()}
        {this.renderEvent()}
        {this.renderCategory()}
        {this.renderService()}
        {this.renderAuthentication()}
      </ScrollView>
    );
  }
}
