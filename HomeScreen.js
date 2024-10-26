import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "./assets/logo.png";

export default function HomeScreen(){
    return (
        <View style={styles.container}>
                <Text> Essa é a tela de HomeScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFF',
    },
    image: {
        width: 140,
        height: 138,
        resizeMode: "cover",
    },
})