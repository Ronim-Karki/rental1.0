import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const MyMessages = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Hello I am Message.</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput style={styles.box} placeholder="Message" />
          <Button style={{ height: 20, width: 300 }} title="Send" />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignContent: 'flex-end',
  },
  box: {
    marginTop: 330,
    backgroundColor: 'white',
    alignContent: 'flex-end',
    height: 100,
    width: 300,
    flex: 1,
  },
});
export default MyMessages;
