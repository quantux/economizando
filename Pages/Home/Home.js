import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Header from '../../Components/Header/Header';
import add from '../../assets/add.png';

import styles from './styles';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
          items: [],
          total: 0.00,
        }

        this.populateItems = this.populateItems.bind(this);
    }

    // Método que navega para outras páginas...
    goTo = ( page, itemId = false ) => {

      if(!itemId)
        this.props.navigation.navigate( page, { 'populateItems': this.populateItems } );
      else
        this.props.navigation.navigate( page, { 'itemId': itemId, 'populateItems': this.populateItems } );

    }

    async componentDidMount() {
      this.populateItems();
    }
    
    populateItems() {
      try {

        let total = 0;

        /* Iteração através de todos os itens */
        AsyncStorage.getAllKeys()
          .then(keys=> AsyncStorage.multiGet(keys)
          .then(items => { 

            // armazena os itens no state para mostrar na tela...
            this.setState({ items });

            // depois faz a iteração para calcular o total...
            items.forEach(item => {

              console.log('ITEM: ', item);

              // pega somente a posição do vetor que contém os detalhes do item.
              let _item = JSON.parse(item[1]);

              // soma o total.
              total += parseFloat(_item['valor']);

              // armazena no state para atualizar.
              this.setState({ total });
            });
          
          }));

      } catch(e) {

        // erro, mostrar mensagem.
        Alert.alert('Ocorreu um erro.', 'Tente novamente mais tarde.');

        // mensagem no console.
        console.log('Error: ', e);
      }
    }

    render() {
      console.log('update render');

      return (
          <ScrollView>
            <View style={styles.container}>
              <Header />
      
              {/* Box de Total de Gastos */}
              <View style={styles.total}>
                <Text style={styles.total_str}>Total de gastos</Text>
                <Text style={styles.total_value}>R$ {this.state.total}</Text>
              </View>

              {/* Botão de adicionar nova despesa */}
              <TouchableOpacity
                style={styles.add_despesa}
                onPress={() => this.goTo('New')}>
                
                <Image source={add} style={{ width: 30, height: 30 }} />
                <Text style={styles.add_despesa_txt}>Adicionar Despesa</Text>
              </TouchableOpacity>
      
              {/* BOX DE DETALHES */}
              <View style={styles.detalhes}>
                <Text style={styles.detalhes_txt}>DETALHES</Text>
      
                {/* Cada row representa uma linha de item */}
                <View style={styles.row_container}>

                  {
                    this.state.items.map(item => {
                      let details = JSON.parse(item[1]);

                      return (
                        <View key={ item[0] } style={styles.row}>
                          <Text>{ details['nome'] }</Text>
                          <Text>{ details['data'] }</Text>
                          <Text>R$ { details['valor'] }</Text>

                          <TouchableOpacity onPress={() => this.goTo('Edit', item[0])}>
                            <Text style={styles.edit}>Editar</Text>
                          </TouchableOpacity>
                        </View>
                      )
                    })
                  }
      
                </View>
              </View>

            </View>
          </ScrollView>
      );
    }
}
