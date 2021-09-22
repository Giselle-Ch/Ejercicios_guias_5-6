import React, { useState } from "react";
import {View, StyleSheet, Image, ScrollView, Text, Modal, Button, TouchableHighlight} from 'react-native';

const App = () => {
  const [modalVisibleHotel, setModalVisibleHotel] = useState(false);

  return(
    <>
      <ScrollView>
      <Modal transparent={true} animationType="slide" visible={modalVisibleHotel} onRequestClose={() => { alert('Modal has been closed'); }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Hotel</Text>
              <Text>El salvador cuenta con hermosas playas a nivel Centroamérica</Text>
              <Button title="Cerrar" onPress={() => {setModalVisibleHotel(!modalVisibleHotel)}}></Button>
            </View>
          </View>
        </Modal>

        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight onPress={() => {setModalVisibleHotel(!modalVisibleHotel)}}>
            <Image 
              style={styles.banner}
              source={require('./src/img/vistaHotel.jpg')} />
          </TouchableHighlight>
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Algunos de nuestros servicios</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.servicio}
                source={require('./src/img/servicio1.jpg')} />
            </View>
            <View>
              <Image
                style={styles.servicio}
                source={require('./src/img/servicio2.PNG')} />
            </View>
            <View>
              <Image
                style={styles.servicio}
                source={require('./src/img/servicio3.PNG')} />
            </View>
          </ScrollView>
        </View>

        <Text style={styles.titulo}>Lugares Turísticos</Text>
        <View style={styles.listado}>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require('./src/img/lugar1.pgn')} />
          </View>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require('./src/img/lugar2.PNG')} />
          </View>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require('./src/img/lugar3.PNG')} />
          </View>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require('./src/img/lugar4.PNG')} />
          </View>
        </View>
      </ScrollView>
    </>
  )
}