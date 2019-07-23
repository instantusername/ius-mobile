import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

export interface Props {
  onSearch: (text: string)=>void;
}

export const Search:React.SFC<Props> = ({ onSearch }) => {
      return (
        <View style={styles.search}>
          <View>
            <Text style={styles.title}>Instant Username Search</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              onChangeText={onSearch}
              placeholder="Search username"
            />
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: 'black',
    paddingTop: 40,
    paddingBottom: 20
  },
  title: {
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    borderRadius: 36,
    height: 30,
    borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 3,
    paddingTop: 0,
    textAlign: 'center'
  },
  inputView: {
    borderRadius: 36,
    backgroundColor: 'white',
    width: '75%',
    alignSelf: 'center',
  }
});