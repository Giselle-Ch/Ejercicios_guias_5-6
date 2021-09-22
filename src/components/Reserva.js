import React from "react";
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

const Reserva = ({item, eliminarCliente}) => {
    const dialogoEliminar = id => {
        console.log('eliminando...', id);
        eliminarCliente(id);
    }

    return(
        <View style={styles.reserva}>
            <View>
                <Text style={styles.label}>Cliente: </Text>
                <Text style={styles.texto}>{item.cliente}</Text>
            </View>

            <View>
                <Text style={styles.label}>Fecha y Hora: </Text>
                <Text style={styles.texto}>{item.hora}</Text>
            </View>

            <View>
                <Text style={styles.label}>Cantidad de personas: </Text>
                <Text style={styles.texto}>{item.cantidad}</Text>
            </View>

            <View>
                <Text style={styles.label}>Sección: </Text>
                <Text style={styles.texto}>{item.seccion}</Text>
            </View>

            <View>
                <TouchableHighlight onPress={() => dialogoEliminar(item.id)} style={styles.btnEliminar}>
                    <Text style={styles.textoEliminar}>Eliminar &times;</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    reserva: {
        backgroundColor: '#fff',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },

    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },

    texto: {
        fontSize: 18
    },

    btnEliminar: {
        padding: 20,
        backgroundColor: '#c44536',
        borderRadius: 5,
        marginVertical: 10
    },

    textoEliminar: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    }
})

export default Reserva;