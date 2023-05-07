import * as React from 'react';
import { View, StyleSheet, RefreshControl, ScrollView, Alert } from 'react-native';
import Constants from 'expo-constants';
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function PantallaUsuarios({navigation}) {

    const [usuarios, setUsuarios] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    React.useEffect(() => {
        fetch('https://645813e70c15cb148217b57d.mockapi.io/crudnuevastec/usuarios')
            .then(response => response.json())
            .then(data => setUsuarios(data))
            .catch(error => console.error(error));
    }, []);

    const handleDeleteUsuario = (id) => {
        Alert.alert(
            "Eliminar usuario",
            "¿Estás seguro que deseas eliminar este usuario?",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Eliminar",
                    onPress: () => {
                        fetch(`https://645813e70c15cb148217b57d.mockapi.io/crudnuevastec/usuarios/${id}`, {
                            method: 'DELETE',
                        })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            // Remove the deleted user from the state
                            setUsuarios(prevUsuarios => prevUsuarios.filter(usuario => usuario.id !== id));
                        })
                        .catch(error => console.error(error));
                    }
                }
            ]
        );
    };

    const handleRefresh = () => {
        setRefreshing(true);
        fetch('https://645813e70c15cb148217b57d.mockapi.io/crudnuevastec/usuarios')
            .then(response => response.json())
            .then(data => setUsuarios(data))
            .catch(error => console.error(error))
            .finally(() => setRefreshing(false));
    };

    return (
        <View style={styles.container}>
            <View style={styles.refreshButtonContainer}>
                <Icon name="refresh" style={styles.refreshIcon} onPress={handleRefresh} />
            </View>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
                {
                    usuarios.map(({ id, email, password }) => 
                        (
                            <ListItem
                                key={id}
                                title={email}
                                trailing={
                                    <View style={styles.iconContainer}>
                                        <Icon name="pencil" style={styles.icon} onPress={() => navigation.navigate("Editar", {id, email, password})}/>
                                        <Icon name="delete" style={styles.icon} onPress={() => handleDeleteUsuario(id)}/>
                                    </View>
                                }
                            />
                        )
                    )
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 5,
    },
    refreshButtonContainer: {
        alignItems: 'center',
        marginBottom: 30
    },
    refreshIcon: {
        fontSize: 30,
        color: '#007AFF'
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',

        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 10,
        width: 40
    },
});
