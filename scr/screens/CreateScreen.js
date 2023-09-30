import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MemoForm from "../component/MemoForm";
import { Context } from "../context/BlogContext";

const CreateScreen = ({navigation}) => {
    const { addMemo } = useContext(Context);
    return (
        <View style={styles.container}>
            <MemoForm 
            onSubmit ={(title, content, playlistName) => {
                addMemo(title, content, playlistName);
                navigation.navigate('Index');
            }} 
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#EFEBE0',
    },
});

export default CreateScreen;