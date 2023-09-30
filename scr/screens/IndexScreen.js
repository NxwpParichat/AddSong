import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, Alert } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import { MaterialIcons } from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {
  const {state, addMemo, delMemo} = useContext(Context);

  const ConfirmDelete = (id) => {
    return Alert.alert(
      'Delete?',
      'Confirm Delete?',
      [
        {
          text: 'Cancle',
          onPress:()=>console.log('Cancle to delete'),
          style: 'cancel'
        },
        {
          text: 'Confirm',
          onPress:()=>delMemo(id),
        },
      ],
      { cancelable:false}
    )
  }
  return(
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(memo) => memo.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Show", {id: item.id})}>
            <View style={styles.buttonContainer}>
            <Text style={styles.message}>{item.title} - {item.content} - {item.playlistName} </Text>
            <TouchableOpacity onPress={() => ConfirmDelete(item.id) }>
              <MaterialIcons name="delete" size={24} color="black" />
            </TouchableOpacity>
            </View>
            </TouchableOpacity>
          );
        }}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEBE0',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical : 5,
    borderBottomWidth : 1,
    borderBottomColor: '#bdbdbd',
  },
  message: {
    fontSize: 18,
  },
});

export default IndexScreen;

  