import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Header from '../../Components/Header/Header';
import Input from '../../Components/Input/Input';

import styles from './styles';

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: "1",
    }
  }

  changePickerValue = (value, index) => {
    this.setState({ number: value });
    console.log('new picker value, index: ', value, index);
  }

  cancel = () => {
    this.props.navigation.navigate('Home');
  }

  save = () => {
    console.log('salvar!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />

        <View style={styles.box}>
          <Text style={styles.title}>EDITAR DESPESA</Text>

          <Input style={{}} placeholder="Nome da despesa" />

          <View style={styles.down_inputs}>
            <Input style={{ width: '72%' }} placeholder="Valor da despesa" />
            
            <Picker
              selectedValue={this.state.number}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => 
                this.changePickerValue(itemValue, itemIndex)
              }>

              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
            </Picker>

          </View>

          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => this.cancel()}
              style={[styles.button, styles.btn1]}>

              <Text>CANCELAR</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.save()}
              style={[styles.button, styles.btn2]}>

              <Text>SALVAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

