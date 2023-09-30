import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native"

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={require('../img/newp.png')} />
            <Text style={styles.welcome}>🪩 WELCOME 🎶</Text>
            <View style={styles.separator} />
            <TouchableOpacity
                onPress={() => navigation.navigate('Index')}>
                <Text style={styles.button}>Go to your playlist 🎉 </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6A21E',
        justifyContent: "center",
    },
    icon: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        marginBottom: 10,
        
    },
    welcome: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 15,
    },
    button: {
        width: 250,
        textAlign: "center",
        borderWidth: 2,
        borderColor: "#104210",
        padding: 5,
        fontSize: 18,
        backgroundColor: "#7A871E",
        borderRadius: 10,
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    separator: {
        height: 20,
    },

})

export default HomeScreen;
