import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TextInput } from 'react-native';

import styles from './styles';


/* Componente Input */
export default class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TextInput
                style={[styles.input, this.props.style]}
                onChangeText={text => this.props.onChangeText(text)}
                placeholder={this.props.placeholder}
                value={this.props.value ? this.props.value : ''} />
        );
    }
}