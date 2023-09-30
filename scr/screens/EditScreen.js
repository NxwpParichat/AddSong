import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import MemoForm from "../component/MemoForm";

const EditScreen = ({ route, navigation }) => {
    const { state, editMemo } = useContext(Context);
    const id = route.params.id;

    const memo = state.find(memo => memo.id == route.params.id)
    return(
        <View style={styles.container}>
            <Text>[ID : {id}]</Text>
            <MemoForm initValues={{title: memo.title, content: memo.content, playlistName: memo.playlistName}}
            onSubmit={(title, content, playlistName) => {
                editMemo(id, title,content, playlistName)
                navigation.pop();
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#EFEBE0',
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
    },
    content: {
        fontSize: 16,
    },
});

export default EditScreen;