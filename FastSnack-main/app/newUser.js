import Texto from "../src/components/texto";
import {styles} from "../src/components/styles";
import { Pressable, View } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { createUserWithEmailAndPassword, auth } from "firebase/auth";
import { router } from "expo-router";


export default function NewUser(){
    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userRePass, setUserRePass] = useState('');

    function newUser(){

        if (userMail === '' || userPass === '' || userRePass === ''){
            alert ('Todos os campos devem ser preenchidos');
            return
        }
        if (userPass !== userRePass){
            alert ('As senhas não são iguais');
            return
        } else {
            createUserWithEmailAndPassword (auth, userMail, userPass)
            .then((UserCredencial) => {
                const user = UserCredencial.user;
                alert('O usuário ' + userMail + 'foi criado. Faça o login')
                router.replace('/');
            })
            .catch ((error) => {
                const errorMessage = error.message;
                alert (errorMessage);
                router.replace ('/');
            })
        }
    
        
    }

    return(
        <View style = {styles.container}>
            <Texto style = {styles.formTitle}> Criar Conta </Texto>

            <TextInput 
            style = { styles.formInput}
            placeholder="E-mail"
            keyboardType="email-adress"
            autoCapitalize="none"
            autoComplete="email"
            value={userMail}
            onChangeText={setUserMail}
            />

            <TextInput 
            style = { styles.formInput}
            placeholder="Senha"
            autoCapitalize="none"
            secureTextEntry
            value={userPass}
            onChangeText={setUserPass}
            />

            <TextInput 
            style = { styles.formInput}
            placeholder="Repita a Senha"
            autoCapitalize="none"
            secureTextEntry
            value={userRePass}
            onChangeText={setUserRePass}
            />

            <Pressable style = { styles.formButton} onPress={newUser}>
                <Texto style = {styles.textButton}> Cadastrar </Texto>
            </Pressable>

            <View style={styles.subContainer}>
        <Pressable  onPress={() => router.push("/")} >
                <Texto style={styles.textButtonAll}>Voltar</Texto>
        </Pressable>

            </View>

        </View>
    )
}

