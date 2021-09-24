
import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function HelloWorldApp () {

  const [value, onChangeText] = React.useState('Placeholder text');

  return (
    <View style = {styles.container} >
      <TextInput style = {styles.edit} 
        onChangeText = {text=>onChangeText(text)}
        value = {value}
      />
      <Button color = 'red' title='Clear' onPress={()=>onChangeText('')} />
      <Text style = {styles.text}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create (
  {
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding:150,
    },
    edit:{
      borderColor: 'black',
      borderWidth:1,
      padding:5,
      width:'90%',
    },
    text:{
      padding:5,
      color:'#0b6396',
      fontSize: 20,
      
    },
    but:{
      fontSize: 40,

    }
  }

)
