import React, { Component } from 'react';
import { Platform, StyleSheet, TextInput, Text, View } from 'react-native';

const styles = StyleSheet.create({
    search: {
        backgroundColor: 'black'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20,
        color: 'white',
    },
    input: {
        borderRadius: 36,
        color: 'white',
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        width: '75%',
        alignSelf: "center"
    }
});


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render() {
        return (
            <View style={styles.search}>
                <View>
                    <Text style={styles.title}>Instant Username Search</Text>
                </View>
                <TextInput style={styles.input}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <Text>{this.state.text}</Text>
            </View>
        );
    }
}
