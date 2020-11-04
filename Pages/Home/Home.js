import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import Header from '../../Components/Header/Header';

import styles from './styles';

import add from '../../assets/add.png';
import menu from '../../assets/menu.png';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    goTo = ( page ) => {
        this.props.navigation.navigate( page );
    }

    render() {
        return (
            <ScrollView>
              <View style={styles.container}>
                <Header />
        
                <View style={styles.total}>
                  <Text style={styles.total_str}>Total de gastos</Text>
                  <Text style={styles.total_value}>R$ 323,43</Text>
                </View>
        
                <TouchableOpacity
                  style={styles.add_despesa}
                  onPress={() => this.goTo('New')}>
                  
                  <Image source={add} style={{ width: 30, height: 30 }} />
                  <Text style={styles.add_despesa_txt}>Adicionar Despesa</Text>
                </TouchableOpacity>
        
                <View style={styles.detalhes}>
                  <Text style={styles.detalhes_txt}>DETALHES</Text>
        
                  <View style={styles.row_container}>
        
                    <View style={styles.row}>
                      <Text>Nome do item</Text>
                      <Text>04/11</Text>
                      <Text>R$ 32,42</Text>

                      <TouchableOpacity onPress={() => this.goTo('Edit')}>
                        <Text style={styles.edit}>Editar</Text>
                      </TouchableOpacity>
                    </View>
        
                    <View style={styles.row}>
                      <Text>Nome do item</Text>
                      <Text>04/11</Text>
                      <Text>R$ 32,42</Text>

                      <TouchableOpacity onPress={() => this.goTo('Edit')}>
                        <Text style={styles.edit}>Editar</Text>
                      </TouchableOpacity>
                    </View>
        
                  </View>
                </View>
              </View>
            </ScrollView>
        );
    }
}
