import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert, Keyboard } from 'react-native';
import Constants from 'expo-constants';
import BackButton from '../icons/backButton';

export default function PantallaEditar({navigation, route}) {

const { id, email, password } = route.params;

const [newEmail, setNewEmail] = React.useState(email);
const [newPassword, setNewPassword] = React.useState(password);

function actualizarUsuario() {
    fetch(`https://645813e70c15cb148217b57d.mockapi.io/crudnuevastec/usuarios/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: newEmail,
            password: newPassword
        })
        })
        .then(
            Alert.alert(
                'Success',
                'Usuario actualizado exitosamente',
                [
                    {
                    text: 'OK',
                    onPress: () => {
                        Keyboard.dismiss();
                    }
                    }
                ]
            )
        )
        .catch(error => console.error(error));
}


return (
        <View style={styles.container}>
            <BackButton onPress={() => navigation.navigate("Usuarios")} />
            <Text style={styles.paragraph}>
                Editar id = {id}
            </Text>
            
            <Text>
                Email actual: {email}
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(value) => setNewEmail(value)}
            />

            <Text>
                Contraseña actual: {password}
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(value) => setNewPassword(value)}
            />

            <TouchableOpacity style={styles.button} onPress={actualizarUsuario}>
                <Text style={styles.buttonText}>Actualizar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
        marginTop: 0,
        paddingTop: 15
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        padding: 10,
        width: 370,
        textAlign: 'center',
        borderRadius: 6,
        fontSize: 15,
        marginBottom: 30,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});