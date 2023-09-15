import { Pressable, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import Texto from "../src/components/texto";
import { router } from "expo-router";

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function Home (){
    return(
        <View style={styles.container}>
        <View style={styles.menu}>
          <View style={styles.menuIcons}>
            <View style={styles.icone}>
              <FontAwesomeIcon icon="user" />
            </View>
          </View>
          <Texto style={styles.title}>Fast Snack</Texto>
        </View>
  
        <View style={styles.botoesContainer}>
          <View style={styles.botoesEsquerdo}>
            <TouchableOpacity style={styles.botaoDoce}>
              <Image source={require('../src/images/imagem_doce1.jpeg')} style={styles.botaoDoceImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoDoce}>
              <Image source={require('../src/images/imagem_doce2.jpeg')} style={styles.botaoDoceImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoDoce}>
              <Image source={require('../src/images/imagem_doce3.jpeg')} style={styles.botaoDoceImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.botoesDireito}>
            <TouchableOpacity style={styles.botaoDoce}>
              <Image source={require('../src/images/imagem_doce4.jpeg')} style={styles.botaoDoceImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoDoce}>
              <Image source={require('../src/images/imagem_doce5.jpeg')} style={styles.botaoDoceImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoDoce}>
              <Image source={require('../src/images/imagem_doce6.jpeg')} style={styles.botaoDoceImage} />
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={styles.rodape}>
          <View style={styles.icone} >
            <TouchableOpacity onPress={() => router.push("/")}>
                <FontAwesomeIcon icon="home" size={24} color="black"/>
                <Texto style={styles.nome}>Início</Texto>
            </TouchableOpacity>
          </View>
          <View style={styles.icone}>
          <TouchableOpacity>
                <FontAwesomeIcon icon="shopping-cart" size={24} color="black"/>
                <Texto style={styles.nome}>Carrinho</Texto>
            </TouchableOpacity>
          </View>
          <View style={styles.icone}>
            <TouchableOpacity>
                <FontAwesomeIcon icon="wallet" size={24} color="black"/>
                <Texto style={styles.nome}>Carteira</Texto>
            </TouchableOpacity>
          </View>
          <View style={styles.icone}>
          <TouchableOpacity>
                <FontAwesomeIcon icon="bell" size={24} color="black" />
                 <Texto style={styles.nome}>Notificações</Texto>
            </TouchableOpacity>
          </View>
        </View>
      </View>);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#201b2c',
      paddingTop: 24,
    },
    menu: {
      backgroundColor: '#ff9b04',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      padding: 10,
      alignItems: 'center',
    },
    menuIcons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icone: {
      color: 'black',
      fontSize: 24,
      textAlign: 'center',
      marginRight: 10,

    },
    title: {
      margin: 0,
      fontSize: 30,
      color: 'black',
      fontWeight: 'bold'
    },
    botoesContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    botoesEsquerdo: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    botoesDireito: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    botaoDoce: {
      backgroundColor: '#ff9b04',
      borderRadius: 10,
      width: 130,
      height: 130,
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    botaoDoceImage: {
      maxWidth: 80,
      maxHeight: 80,
    },
    rodape: {
      backgroundColor: '#ff9b04',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    nome: {
      color: 'black',
      fontSize: 14,
      textAlign: 'center',
      fontWeight:'bold',
    },
  });