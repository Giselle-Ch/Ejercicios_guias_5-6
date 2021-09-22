import React, { useState } from "react";
import {View, StyleSheet, Image, ScrollView, Text, Modal, Button, TouchableHighlight} from 'react-native';

const App = () => {
  const [modalVisibleHabitacion1, setModalVisibleHabitacion1] = useState(false);
  const [modalVisibleHabitacion2, setModalVisibleHabitacion2] = useState(false);
  const [modalVisibleHabitacion3, setModalVisibleHabitacion3] = useState(false);

  return(
    <>
      <ScrollView style={styles.body}>
        
        <Modal transparent={true} animationType="slide" visible={modalVisibleHabitacion1} onRequestClose={() => { alert('Modal has been closed'); }}>
            <View style={styles.vistaModal}>
              <View style={styles.Modal}>
                <Text style={styles.subtitulo}>Habitación individual</Text>
                <Text>Tendrás el espacio suficiente que necesitas descansar durante tus viajes profesionales o de ocio.</Text>
                <Button title="Cerrar" onPress={() => {setModalVisibleHabitacion1(!modalVisibleHabitacion1)}}></Button>
              </View>
            </View>
        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalVisibleHabitacion2} onRequestClose={() => { alert('Modal has been closed'); }}>
            <View style={styles.vistaModal}>
              <View style={styles.Modal}>
                <Text style={styles.subtitulo}>Habitación familiar</Text>
                <Text>Para un viaje en familia como un viaje individual pero con necesidad de una habitación más grande, esta habitación está equipada para incluir cama doble o solo una cama matrimonial, que incluye espacio para un escritorio y un lugar para guardar las maletas.</Text>
                <Button title="Cerrar" onPress={() => {setModalVisibleHabitacion2(!modalVisibleHabitacion2)}}></Button>
              </View>
            </View>
        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalVisibleHabitacion3} onRequestClose={() => { alert('Modal has been closed'); }}>
            <View style={styles.vistaModal}>
              <View style={styles.Modal}>
                <Text style={styles.subtitulo}>Suit</Text>
                <Text>Suites con vista espectacular de la ciudad, espacio amplio con equipamiento y servicios añadidos en los que no te faltará de nada, incluso jacuzzi y otros lujos.</Text>
                <Button title="Cerrar" onPress={() => {setModalVisibleHabitacion3(!modalVisibleHabitacion3)}}></Button>
              </View>
            </View>
        </Modal>

        <View style={{flexDirection: 'row'}}>
            <Image 
              style={styles.banner}
              source={require('./src/img/vistaHotel.jpg')} />
        </View>

        <Text style={styles.tituloHotel}>Hotel</Text>
        <Text style={styles.textoIntro}>Bienvenido a nuestro hotel! Estamos situados en la capital de Japon, con muchos lugares atractivos por su historia y diseño. </Text>
        <Text style={styles.textoIntro}>Contamos con servicios que sean de comodidad a cada húesped tales como conexión Wi-Fi, servicio de habitión (incluso se dispone de máquina en cada habitición para la preparación de todo tipo de bebidas calientes), una tienda de regalos, entre otros. Hay diferentes lugares de recreación como un gimnasio, bar y restaurante y hasta salas de conferencia para las empresas.</Text>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Tipos de habitaciones</Text>
          <ScrollView horizontal>
            <View>
            <TouchableHighlight onPress={() => {setModalVisibleHabitacion1(!modalVisibleHabitacion1)}}>
              <Image
                style={styles.habitacion}
                source={require('./src/img/habitacion1.jpg')} />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight onPress={() => {setModalVisibleHabitacion2(!modalVisibleHabitacion2)}}>
                <Image
                  style={styles.habitacion}
                  source={require('./src/img/habitacion2.jpg')} />
                </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight onPress={() => {setModalVisibleHabitacion3(!modalVisibleHabitacion3)}}>
                <Image
                  style={styles.habitacion}
                  source={require('./src/img/habitacion3.jpg')} />
                </TouchableHighlight>
            </View>
          </ScrollView>
        </View>

        <View style={styles.seccionServicios}>
          <Text style={styles.titulo}>Nuestros servicios</Text>
          <View style={styles.listado}>
            <View style={styles.listaItem}>
              <View>
                  <Image
                    style={styles.mejores}
                    source={require('./src/img/servicio1.jpg')} />
                  <Text style={styles.textoServicio}>Servicio de habitación</Text>
              </View>
            </View>
            <View style={styles.listaItem}>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/servicio2.png')} />
                <Text style={styles.textoServicio}>Servicio de internet</Text>
            </View>
            <View style={styles.listaItem}>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/servicio3.png')} />
                <Text style={styles.textoServicio}>Gimnasio, restaurante, bar, entre otros.</Text>
            </View>
            <View style={styles.listaItem}>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/servicio4.jpg')} />
                <Text style={styles.textoServicio}>Tienda de recuerdos</Text>
            </View>
          </View>
        </View>

        <Text style={styles.titulo}>Lugares a visitar</Text>
        <View>
          <View>
            <View style={styles.card}>
              <Image
                style={styles.mejores}
                source={require('./src/img/lugar1.png')} />
              <Text style={styles.lugar}>Parque Ueno</Text>
              <Text style={styles.texto}>Un oasis paradisíaco de verde en el corazón de la concurrida ciudad y una de las más conocidas Atracciones Turísticas de Tokio, el Parque Ueno es el mayor espacio verde de la ciudad y una de sus atracciones turísticas más populares. Además de sus preciosos jardines, el parque también cuenta con un zoológico, acuario, y numerosos templos y museos para explorar.</Text>
            </View>
          </View>
          <View>
            <View style={styles.card}>
              <Image
                style={styles.mejores}
                source={require('./src/img/lugar2.png')} />
              <Text style={styles.lugar}>Palacio Imperial</Text>
              <Text style={styles.texto}>La atracción principal del distrito de Marunouchi y una de las más visitadas Atracciones Turísticas de Tokio es el Palacio Imperial con sus bellos parques del siglo 17 rodeado por muros y fosos. Todavía en uso por la familia Imperial, el Palacio Imperial se encuentra en el lugar donde, en 1457, el Señor Feudal Ota Dokan construyó la primera fortaleza, el punto focal de la que la ciudad de Tokio o Edo, como se llamaba entonces, se extendió gradualmente . Tan famoso como el palacio es el Puente Nijubashi que conduce a su interior, una estructura que fue nombrada “doble puente” gracias a su reflejo en el agua.</Text>
            </View>
          </View>
          <View>
            <View style={styles.card}>
              <Image
                style={styles.mejores}
                source={require('./src/img/lugar3.png')} />
              <Text style={styles.lugar}>Distrito Ginza</Text>
              <Text style={styles.texto}>Ginza es la zona comercial más importante de Tokio y es tan icónico como Times Square en Nueva York. Ha sido el centro comercial del país desde hace siglos, y es donde cinco antiguos caminos que conectan las principales ciudades de Japón se unen. Bordeada por tiendas exclusivas e imponentes tiendas palaciegas, el distrito de Ginza también es divertido para simplemente pasear, o mejor aún, sentarse en una de sus numerosas tiendas y restaurantes de té y café viendo pasar la vida.</Text>
              <Text style={styles.texto}>Los fines de semana, cuando todo está abierto, es el paraíso de las compras; se prohibió el tráfico vehicular, por lo que es una de las zonas peatonales más grandes del mundo; al caer la noche, gigantescos paneles publicitarios en sus numerosos edificios bañan Ginza en luz de neón brillante.</Text>
            </View>
          </View>
          <View>
            <View style={styles.card}>
              <Image
                style={styles.mejores}
                source={require('./src/img/lugar4.png')} />
              <Text style={styles.lugar}>Museo Nacional de Ciencias Naturales</Text>
              <Text style={styles.texto}>En el parque de Ueno, en Tokio, el excelente Museo Nacional de Ciencias Naturales (Kokuritsu Kagaku Hakubutsukan) se abrió en 1871 y es uno de los museos más antiguos del país y de las Atracciones Turísticas de Tokio más interesantes. Completamente renovado y modernizado, el museo alberga una vasta colección de materiales relacionados con la historia y las ciencias naturales, incluyendo fascinantes exhibiciones interactivas sobre el desarrollo espacial, la energía nuclear y el transporte, lo que permite a los visitantes tener una visión única de los últimos avances científicos y tecnológicos.</Text>
            </View>
          </View>
        </View>

        
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#e8eddf'
  },

  banner: {
    height: 250,
    flex: 1
  },

  tituloHotel: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#6e1423',
    color: 'white'

  },

  textoIntro: {
    textAlign: 'justify',
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 10
  },

  titulo: {
    fontSize: 24,
    marginVertical: 10,
    marginLeft: 7,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },

  contenedor: {
    marginHorizontal: 10
  },

  mejores: {
    width: '100%'    ,
    height: 200,
    marginVertical: 5
  },

  listaItem: {
    flexBasis: '49%'
  },

  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1
  },

  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1
  },

  habitacion: {
    width: 250,
    height: 300,
    marginRight: 10
  },

  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center'
  },

  card: {
    padding: 10,
    margin: 5,
    backgroundColor: '#cfdbd5',
    borderRadius: 5
  },

  lugar: {
    fontSize: 24,
    margin: 2,
    fontWeight: 'bold',
    color: '#25494b'
  },

  texto: {
    textAlign: 'justify',
    fontSize: 18
  },

  seccionServicios: {
    backgroundColor: '#f5cb5c',
    padding: 6,
    marginTop: 20
  },

  textoServicio: {
    fontSize: 18
  }
});

export default App;