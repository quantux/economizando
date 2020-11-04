import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TextInput } from 'react-native';

import styles from './styles';

export default class Input extends Component {
    constructor(props) {
        super(props);
    }

    onChangeText = () => {
        console.log('Text changed!');
    }

    render() {
        return(
            <TextInput
                style={[styles.input, this.props.style]}
                onChangeText={text => onChangeText(text)}
                placeholder={this.props.placeholder} />
        );
    }
}