import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert, ScrollView } from 'react-native';
import Picker from '@react-native-community/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'shortid';


const Formulario = ({reserva, setReserva, guardarMostrarForm, guardarReservaStorage}) => {
    //Variables
    const [cliente, guardarCliente] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');
    const [cantidad, guardarCantidad] = useState('');
    const [seccion, guardarSeccion] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    //  Funciones para Fecha
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const confirmarFecha = date => {
        const opciones = {year: 'numeric', month: 'long', day: '2-digit'};
        guardarFecha(date.toLocaleDateString('es-ES', opciones));
        hideDatePicker();
    };

    //  Funciones para Hora
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmarHora = hora => {
        const opciones = {hour: 'numeric', minute: '2-digit', hour12: false};
        guardarHora(hora.tolocaleString('es-ES', opciones));
    }

    //  Crear nueva reserva
    const crearNuevaReserva = () => {
        if(cliente.trim() === '' || fecha.trim() === '' || hora.trim() === '' || cantidad.trim() === '' || seccion.trim() === '')
        {
            mostrarAlerta();
            return;
        }

        const reserva = {cliente, fecha, hora, cantidad, seccion};

        reserva.id = shortid.generate();

        const reservaNueva = [...reservas, reserva];
        setReserva(reservaNueva);

        guardarReservaStorage(JSON.stringify(reservaNueva));

        guardarMostrarForm(false);

        guardarCliente('');
        guardarFecha('');
        guardarHora('');
        guardarCantidad('');
        guardarSeccion('');
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',            //  Titulo
            'Todos los campos son obligatorios',    //  Mensaje
            [{
                text: 'OK'      //  Botón
            }]
        )
    }

    return (
        <>
            <ScrollView style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Cliente</Text>
                    <TextInput style={styles.input} onChangeText={texto => guardarCliente(texto)} />
                </View>

                <View>
                    <Text style={styles.label}>Fecha</Text>
                    <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                        headerTextIOS="Elige la fecha"
                        cantelTextIOS="Cancelar"
                        confirmTextIOS="Confirmar"
                    />
                    <Text>{fecha}</Text>
                </View>

                <View>
                    <Text style={styles.label}>Hora:</Text>
                    <Button title="Seleccionar Hora" onPress={showTimePicker}/>
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmarHora}
                        onCancel={hideTimePicker}
                        locale='es_ES'
                        headerTextIOS="Elige una hora"
                        cancelTextIOS="Cancelar"
                        confirmTextIOS="Confirmar"
                    />
                    <Text>{hora}</Text>
                </View>

                <View>
                    <Text style={styles.label}>Cantidad de personas:</Text>
                    <TextInput 
                        keyboardType='numeric'
                        style={styles.input}
                        onChangeText={texto => guardarCantidad(texto)}
                    />
                </View>

                <View>
                    <Picker
                        selectedValue={seccion}
                        onValueChange={(itemValue, itemIndex) => guardarSeccion(itemValue)}    
                    >
                        <Picker.Item label="No Fumadores" value="noFumadores" />
                        <Picker.Item label="Fumadores" value="fumadores" />
                    </Picker>
                </View>

                <View>
                    <TouchableHighlight onPress={() => crearNuevaReserva()} style={styles.btnSubmit}>
                        <Text style={styles.textoSubmit}>Crear Reserva</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </>
    );
} 

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1
    },

    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },

    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    },

    btnSubmit: {
        padding: 10,
        backgroundColor: 'lightblue',
        marginVertical: 10
    },
    
    textoSubmit: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Formulario;