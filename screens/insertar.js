import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert, Keyboard } from 'react-native';
import Constants from 'expo-constants';

export default function PantallaInsertar() {
  
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function agregarUsuario() {
      fetch('https://645813e70c15cb148217b57d.mockapi.io/crudnuevastec/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(
        Alert.alert(
          'Success',
          'Usuario insertado exitosamente',
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
        <Text style={styles.paragraph}>Insertar usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />

        <TouchableOpacity style={styles.button} onPress={agregarUsuario}>
          <Text style={styles.buttonText}>Agregar</Text>
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