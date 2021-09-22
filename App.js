import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';

import Reserva from "./src/components/Reserva";
import Formulario from "./src/components/Formulario";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [reservas, setReservas] = useState([]);
  const [mostrarform, guardarMostrarForm] = useState(false);

  useEffect(() => {
    const obtenerReservasStorage = async () => {
      try{
        const reservasStorage = await AsyncStorage.getItem('reservas');
        if(reservasStorage){
          setReservas(JSON.parse(reservasStorage))
        }
      }catch(error){
        console.log(error);
      }
    }
    obtenerReservasStorage();
  }, []);

  const eliminarPaciente = id => {
    const reservasFiltradas = reservas.filter(reserva => reserva.id !== id);
    setReservas(reservasFiltradas);
    guardarReservasStorage(JSON.stringify(reservasFiltradas));
  }

  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarform);
  }

  const cerrarTeclado = () => {
    Keyboard.dismiss();
  }

  const guardarReservasStorage = async(reservasJSON) => {
    try{
      await AsyncStorage.setItem('reservas', reservasJSON);
    } catch(error){
      console.log(error);
    }
  }

  return(
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
      <View style={styles.contenido}>
        <Text style={styles.titulo}>Administrador de Citas</Text>
        <View>
          <TouchableHighlight onPress={() => mostrarFormulario()} style={styles.btnMostrarForm}>
            <Text style={styles.textoMostrarForm}>{mostrarform ? 'Cancelar Crear Reserva' : 'Crear Nueva Reserva'}</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.contenido}>
          {mostrarform ? (
            <>
              <Text style={styles.titulo}>Crear Nueva Reserva</Text>
              <Formulario
                reservas={reserva}
                setReserva={setReserva}
                guardarMostrarForm={guardarMostrarForm}
                guardarReservasStorage={guardarReservasStorage}
              />
            </>
          ) : (
            <>
              <Text style={styles.titulo}>{reservas.length > 0 ? 'Administrar tus reservas' : 'No hay reservas, agregar una'}</Text>
              <FlatList 
                style={styles.listado}
                data={reservas}
                renderItem={({item}) => <Reserva item={item}
                eliminarPaciente={eliminarCliente} />}
                keyExtractor={reserva => reserva.id}
              />
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'lightblue',
    flex: 1
  },

  titulo: {
    color: '#fff',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  contenido: {
    flex: 1,
    marginHorizontal: '2.5%'
  },

  listado: {
    flex: 1
  },

  btnMostrarForm: {
    padding: 10,
    backgroundColor: 'lightblue',
    marginVertical: 10
  },

  textoMostrarForm: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;