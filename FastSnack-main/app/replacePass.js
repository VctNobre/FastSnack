import { Pressable, View, StyleSheet } from "react-native";
import Texto from "../src/components/texto";
import { styles } from "../src/components/styles";
import { TextInput } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../src/firebase.config";

export default function ReplacePass(){

    const [userMail, setUserMail] = useState('');
    const router = useRouter();

    function replacePass(){
        if (userMail !== ''){
            sendPasswordResetEmail (auth, userMail)
            .then(() => {
                alert("Foi enviado um email para: " + userMail + "Verifique sua caixa de email.")
                router.replace = ('/')
            })
            .catch((error) => {
                const errorMessage = error.errorMessage
                alert('Ops! Alguma coisa não deu certo. ' + errorMessage + ' Tente novamente ou pressione voltar')
                return
            })
        } else{
            alert("É preciso informar um e-mail válido para efetuar a redefinição de senha")
            return
        }
    }

    return( 
    <View style = {styles.container}>
        <Texto style = {style2.replacePass}> Redefinição de Senha </Texto>
        <TextInput
        style = {styles.formInput}
        placeholder="Informe o email"
        keyboardType="email-adress"
        autoCapitalize="none"
        autoComplete="email"
        value={userMail}
        onChange={setUserMail}

        />
    <Pressable style = {styles.formButton} onPress={replacePass}> 
    
    <Texto style = {styles.textButton}> Enviar </Texto>
    
    </Pressable>
    <View style={styles.subContainer}>
        <Pressable  onPress={() => router.push("/")} >
                <Texto style={styles.textButtonAll}>Voltar</Texto>
        </Pressable>

    </View>
    </View>

)}

const style2 = StyleSheet.create({
    replacePass: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ff9b04' ,
        margin: 10,
        textAlign: 'center',
    }
})