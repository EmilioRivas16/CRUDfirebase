import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

export default function PantallaInicio() {

return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                ¡¡Bienvenido!!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        padding: 8,
        marginTop: 220
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});