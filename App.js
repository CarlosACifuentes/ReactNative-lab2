import { assertVariableDeclaration } from "@babel/types";
import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function HelloWorldApp () {

  const [value, onChangeText] = React.useState('Placeholder text');

  return (
    <View style = {styles.container} >
      <TextInput style = {styles.edit} 
        onChangeText = {text=>onChangeText(text)}
        value = {value} clearTextOnFocus = 'true'
      />
      <TextInput style = {styles.edit} 
        
        value = {'text'} clearTextOnFocus = 'true'
      />
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
      padding:100,
    },
    edit:{
      borderColor: 'black',
      borderWidth:1,
      padding:10,
      width:'90%',
    },
    text:{
      padding:5,
      color:'#0b6396',
      fontSize: 20,
      
    }
  }

)




/*
export default function HelloWorldApp() {

const [value, onChangeText] = React.useState('e.g. Pepito Perez');


  return (
  <View style = {styles.container}>
    <View style={styles.header}>
      <Text style={styles.bigBlue}>Line 1</Text>
    </View>
    <View style = {styles.body}>
      <TextInput style = {styles.edit}
      //keyboardType = 'numeric'
        onChangeText = {text=>onChangeText(text)}
        value={value} //clearTextOnFocus = 'true'
        />
        <Button title='Clear' onPress={()=>onChangeText('')} color='green'/>
        <Text>{value}</Text>
    </View>
   </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    },
    bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  edit:{
    borderColor: 'black',
    borderWidth:1,
    width:200,
    margin: 10,
    padding: 8,
    },
    header: {
      backgroundColor: 'pink',
      padding: 20,
    },
    body: {
      backgroundColor: 'red',
      padding: 20,
    },
  text:{}
  }
);
*/
