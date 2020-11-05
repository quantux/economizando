import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Header from '../../Components/Header/Header';
import Input from '../../Components/Input/Input';

import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      valor: '',
      data: this.getDate(),
      quantidade: "1",
    }

    this.itemId = this.props.route.params.itemId;

    // bindings para passar o contexto this via props...
    this.changeNome = this.changeNome.bind(this);
    this.changeValor = this.changeValor.bind(this);
  }

  // método para formatar a data como dia / mês
  getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');

    return dd + '/' + mm;
  }

  // Altera a quantidade no state
  changePickerValue = (value, index) => {
    this.setState({ quantidade: value });
  }

  // Volta
  cancel = () => {
    this.props.navigation.navigate('Home');
  }

  // Altera o nome no state
  changeNome = text => {
    this.setState({ nome: text });
  }

  // Altera o valor no state
  changeValor = text => {
    this.setState({ valor: text });
  }

  // se clicar em update, atualiza o item...
  async update() {
    const { nome, valor } = this.state;

    // Verifica se adicionou nome e valor.
    if( nome == '' || valor == '' ) {
      Alert.alert('Adicione o nome e o valor.', 'Você precisa adicionar pelo menos um nome e um valor para continuar.');
      return;
    }

    try {

      // tenta salvar no internal storage.
      await AsyncStorage.setItem(this.itemId, JSON.stringify(this.state));

      // atualiza a Home através de uma função passada via routes.
      this.props.route.params.populateItems();

      // go home
      this.props.navigation.navigate('Home');

    } catch (e) {

      // se erro, mostrar uma mensagem.
      Alert.alert('Ocorreu um erro.', 'Tente novamente mais tarde.');

      // mostrar erro no console ( Remover em produção? Mas é claro que não! )
      // ;)
      console.log('Error! ', e);

    }
  }

  changePickerValue = (value, index) => {
    this.setState({ number: value });
    console.log('new picker value, index: ', value, index);
  }

  async componentDidMount() {
    try{

      // pega o item através do id passado via roteamento.
      let item = await AsyncStorage.getItem( this.itemId );
      item = JSON.parse(item);

      this.item = item;

      this.setState({
        nome: item['nome'],
        valor: item['valor'],
        quantidade: item['quantidade']
      });

    } catch(e) {

      // Error
      console.log('Error: ', e);

    }
  }

  render() {
    const { nome, valor, quantidade } = this.state;

    return (
      <View style={styles.container}>
        <Header />

        <View style={styles.box}>
          <Text style={styles.title}>EDITAR DESPESA</Text>

          <Input
            style={{}}
            value={nome}
            onChangeText={this.changeNome}
            placeholder="Nome da despesa" />

          <View style={styles.down_inputs}>
            <Input
              value={valor}
              style={{ width: '72%' }}
              onChangeText={this.changeValor}
              placeholder="Valor da despesa" />
            
            <Picker
              selectedValue={quantidade}
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
              onPress={() => this.update()}
              style={[styles.button, styles.btn2]}>

              <Text>SALVAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

