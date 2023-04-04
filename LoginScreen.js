import React, { useEffect, useState } from 'react'
import {KeyboardAvoidingView, TouchableOpacity, StyleSheet,Text,TextInput,View} from 'react-native'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"
import {signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { useNavigation } from '@react-navigation/core';
const LoginScreen=()=>{
    const navigation=useNavigation()
   useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
                navigation.navigate("Home");
      } else {
        // User is signed out
        // ...
      }
      return unsubscribe;

    }
    );
   })
    const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   
   const handleLogin = () => {
    //const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
     console.log("reg first ",user.email);

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
     
  }
  const handleafterlogin=()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("loged in with ",user.email);
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  
    return (
        <>
        <View style={styles.container}>
           
                 <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleafterlogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text
         style={styles.buttonText}
       
        >register</Text>
      </TouchableOpacity>
    </View>
    </View>
               
            
            </>
    )
}
export default LoginScreen

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginVertical: 10,
        width: 200,
        borderRadius: 5,
      },
      button: {
        marginTop:10,
        backgroundColor: 'blue',
        width:100,
        padding: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
    
})