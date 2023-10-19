import {View, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";
import Texto from "../src/components/texto";
import { useRouter } from "expo-router";
import {auth} from "../src/firebase.config";
import { signOut } from "firebase/auth";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function Home (){
    const currentUser = auth.currentUser;
    const router = useRouter ();

    if(currentUser != null){
      //Logado
    } else {
      alert('É necessário fazer o login para utilizar este recurso !')
      router.replace('/');
    }

    function logout(){
        signOut(auth)
        .then(() => {
          alert('Você desconectou-se do sistema!')
          router.replace('/');
        })
        .catch (() => {
            const errorMessage = error.errorMessage;
            alert(errorMessage);
        })
    }

    function home(){
      router.replace('/home');
    }

    function cart(){
        router.replace('/cart');
      }

    return(

      
        <View style={styles.container}> 
        <View style={styles.menu}>
          <View style={styles.iconeTop} >
            <View style={styles.dist}>
            <TouchableOpacity onPress={logout}  >
              <MaterialIcons name = "logout" size = {30} color={'black'}/>  
            </TouchableOpacity>  
            <Texto style={styles.title}>Fast Snack</Texto>       
            </View>  
                
          </View>          
        </View>
  
       
     {/* meio */}

      <ScrollView>
        <View style={styles.botoesContainer}>
          <View style={styles.botoesEsquerdo}>

          <Image source={require('../src/images/coxinha.png')} style={styles.image} />
            <TouchableOpacity style={styles.botaoDoce }>
              <Entypo name="plus" size={26} color="black" />
            </TouchableOpacity>

            <Image source={require('../src/images/empada.png')} style={styles.image} />
            <TouchableOpacity style={styles.botaoDoce} >
            <Entypo name="plus" size={26} color="black" />
            </TouchableOpacity>
            
            <Image source={require('../src/images/pastelForma.png')} style={styles.image} />
            <TouchableOpacity style={styles.botaoDoce} >
            <Entypo name="plus" size={26} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.botoesDireito}>
          <Image source={require('../src/images/pizza.png')} style={styles.image} />
            <TouchableOpacity style={styles.botaoDoce}>
            <Entypo name="plus" size={26} color="black" />
            </TouchableOpacity>
            <Image source={require('../src/images/salsichao.jpg')} style={styles.image} />
            <TouchableOpacity style={styles.botaoDoce}>
            <Entypo name="plus" size={26} color="black" />
            </TouchableOpacity>
            <Image source={require('../src/images/kibe.jpg')} style={styles.image} />
            <TouchableOpacity style={styles.botaoDoce}>
            <Entypo name="plus" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>



      {/* rodapé */}
        <View style={styles.rodape}>
          <View>
            <TouchableOpacity style={styles.icone} onPress={home}>
                <Entypo name="home" size={32} color="black" />
                <Texto style={styles.nome}>Início</Texto>
            </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity style={styles.icone} onPress={cart}>
                <Entypo name="shopping-cart" size={32} color="black" />
                <Texto style={styles.nome}>Carrinho</Texto>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.icone}>
                <Entypo name="wallet" size={32} color="black" />
                <Texto style={styles.nome}>Carteira</Texto>
            </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity style={styles.icone}>
                <Entypo name="bell" size={32} color="black" />
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
      
    },
    menuIcons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icone: {
      color: 'black',
      fontSize: 24,
      textAlign: 'left',
      marginRight: 10,
      justifyContent:'center',
      alignItems:'center',
    },

    title: {
      margin: 0,
      fontSize: 30,
      color: 'black',
      fontWeight: 'bold',
      
      
    },
    botoesContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    botoesEsquerdo: {
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    botoesDireito: {
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    botaoDoce: {
      backgroundColor: '#02C412',
      borderRadius: 20,
      width: 55,
      height: 55,
      margin: 0,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: -40
    },
    image: {
      maxWidth: 150,
      maxHeight: 150,
      borderRadius: 10,
      width: 130,
      height: 130,
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
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
      fontSize: 16,
      textAlign: 'center',
      fontWeight:'bold',
    },

    iconeTop: {
      justifyContent: 'space-between',
        position:'relative',
        width: '100%',
       
        
    },
    dist:{
      flexDirection:'row-reverse',
      alignItems:'center',
      marginRight: 10, 
      gap:90
    }
   
    
  });