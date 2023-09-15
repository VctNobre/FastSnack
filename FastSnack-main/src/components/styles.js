
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#201b2c",
    },
    subContainer:{
        alignItems: 'flex-start',
        justifyContent:'flex-start',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 2,
      },
    formTitle:{
        fontSize: 46,
        fontWeight: 'bold',
        color: '#ff9b04' ,
        margin: 10,
    },
    formInput: {
        backgroundColor: '#514869',
        color: '#f0ffffde',
        borderRadius: 10,
        border: 'none',
        fontSize: 20,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        width: '80%',
    },
    formButton: {
        width: '80%',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#ff9b04',
    },
    textButton:{
        textTransform: "uppercase",
        fontWeight: 'bold',
        fontSize: 17,
        color: '#2b134b',
        letterSpacing: 3,
        
    },
    textButtonAll:{
        color: '#ff9b04',
        fontWeight: 'bold',

    }

  });