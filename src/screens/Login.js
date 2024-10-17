import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = ({route}) => {
    const {text} = route.params;

    const navigation = useNavigation()
    console.log(text)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleLogin = () =>{
    if(text == "Super Admin"){
        navigation.navigate("SuperAdmin")
    }else if (text == "Company"){
        navigation.navigate("Company")
    }else{
        navigation.navigate("User")
    }
    
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
       style={styles.input} 
       placeholder='Email'
       onChangeText={(text)=>setEmail(text)}
       />
       <TextInput
       style={styles.input} 
       placeholder='Email'
       onChangeText={(text)=>setPassword(text)}
       />
       <TouchableOpacity
       onPress={handleLogin}
       style={styles.button}>
        <Text style={styles.btnText}>login</Text>
       </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    paddingLeft:10,
    marginTop:20
  },
  button:{
    width:"80%",
    height:50,
    backgroundColor:"blue",
    marginTop:20,
    justifyContent:"center",
    alignItems:"center"
  },
  btnText:{
    fontSize:20,
    color:"white"
  }
});
