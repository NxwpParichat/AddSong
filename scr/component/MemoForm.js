import React, { useState} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const MemoForm = ({onSubmit, initValues}) => {
    const [title, setTitle] = useState(initValues.title);
    const [content, setContent] = useState(initValues.content);
    const [playlistName, setPlaylistName] = useState(initValues.playlistName);
    return (
        <View>
            <Text style={style.label}>Song :</Text>
            <TextInput 
                style={style.input}
                numberOfLines={3}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />

            <Text style={style.label}>Singer :</Text>
            <TextInput 
                style={style.input}
                multiline
                numberOfLines={3}
                value={content}
                onChangeText={(text) => setContent(text)}
            />

            <Text style={style.label}>Playlist Name :</Text>
            <TextInput 
                style={style.input}
                multiline
                numberOfLines={3}
                value={playlistName}
                onChangeText={(text) => setPlaylistName(text)}
            />
            <Button color={'#104210'} title="Submit" onPress={() => {
                onSubmit(title, content, playlistName);
            }} />
        </View>
    )
}

MemoForm.defaultProps = {
    initValues: { title: '', content: '' , playlistName: ''}
}

const style= 
StyleSheet.create({
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
        fontWeight: "bold"
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 5,
        paddingLeft: 10,
        margin: 10,
        marginBottom: 15,
        backgroundColor: '#F6A21E'
    }
});

export default MemoForm;