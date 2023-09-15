import { StatusBar } from 'expo-status-bar';
import { SafeAreaView} from 'react-native';
import { useFonts,NotoSans_400Regular, NotoSans_800ExtraBold } from '@expo-google-fonts/noto-sans';
import AppLoading from 'expo-app-loading';

import React, { useState } from "react";
import {Pressable, TextInput, View} from 'react-native';
import Texto from "../src/components/texto";
import { auth } from "../src/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";
import {styles} from "../src/components/styles";

export default function App() {
  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');
  const router = useRouter(); 

  const [fonteCarregada] = useFonts({
    "NotoSansRegular": NotoSans_400Regular,
    "NotoSansBold": NotoSans_800ExtraBold,
  });

  if (!fonteCarregada){
    return <AppLoading />
  }
  function replacePass() {
    router.replace('/replacePass');
  }

  function newUser(){
    router.replace('/newUser')
  }
  
  function userLogin(){
    
      signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
          const user = userCredential.user;
          router.replace('/home');
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
      })
  }
      return <>
      
      <View style = {styles.container}>
      <Texto style = {styles.formTitle}> Fast Snack </Texto>
      <TextInput style= {styles.formInput} 
          placeholder ="E-mail"
          placeholderTextColor = "#201b2c"
          keyboardType = "email-address"
          autoCapitalize = "none"
          autoComplete = "email"
          value = {userMail}
          onChangeText={setUserMail}
      />

      <TextInput style= {styles.formInput}
         placeholder="Senha"
         placeholderTextColor = "#201b2c"
         autoCapitalize="none"
         secureTextEntry 
         value = {userPass}
         onChangeText={setUserPass}
      />

      <Pressable style = {styles.formButton} onPress = {userLogin}>
          <Texto style = {styles.textButton}>Entrar</Texto>
      </Pressable>
      <Pressable style = {styles.formButton} onPress={replacePass}> 
          <Texto style = {styles.textButton}> Esqueci a Senha </Texto>
      </Pressable>
          <View>
              <Pressable onPress={newUser}>
                  <Texto style = {styles.textButtonAll} >Criar Conta </Texto>
              </Pressable>
           </View>
      </View>
      </>
}

