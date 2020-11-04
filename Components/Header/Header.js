import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';
import menu from '../../assets/menu.png';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.header}>
                <Image style={styles.header_img} source={menu} />
                <Text style={styles.header_txt}>NOVEMBRO/2020</Text>
            </View>
        );
    }
}