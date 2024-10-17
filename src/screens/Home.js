import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [text,setText]=useState("Super Admin")
  const [superAdmin, setSuperAdmin] = useState('');
  const [company, setCompany] = useState('');
  const [user, setUser] = useState();

  const navigation = useNavigation()

useEffect(()=>{
    handleClicked()
},[])

  const handleClicked = () =>{
    navigation.navigate("login",{
        text:text,
    })
  }
  return (
    <View style={{flex: 1,alignItems:"center",marginTop:200}}>
      <View style={styles.box}>
        <Text style={{fontSize:20}}>{text}</Text>
        <TouchableOpacity onPress={() => setOpen(!open)}>
          {open ? (
            <Image
              source={require('../assets/up_arrow.png')}
              style={styles.image}
            />
          ) : (
            <Image
              source={require('../assets/down_arrow.png')}
              style={styles.image}
            />
          )}
        </TouchableOpacity>
      </View>
      {open ? 
      <View style={styles.wrapper}>
        <TouchableOpacity
        onPress={()=>{
            setText("Super Admin")
            setOpen(false)
            handleClicked()
        }}
        style={styles.boxWraperr}>
            <Text>Super Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity  
          onPress={()=>{
            setText("Company")
            setOpen(false)
            handleClicked()
        }}
        style={styles.boxWraperr}>
            <Text>company</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{
            setText("User")
            setOpen(false)
            handleClicked()
        }}
        style={styles.boxWraperr}>
            <Text>User</Text>
        </TouchableOpacity>
      </View>:null}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  box: {
    width: '80%',
    height: 60,
    // backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  image: {
    width: 15,
    height: 15,
  },
  wrapper:{
    width:"80%",
    height:180,
    backgroundColor:"white",
    borderWidth: 1,
    borderColor: 'gray',
  },
  boxWraperr:{
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    height:60,
    borderWidth: 1,
    borderColor: 'gray',
  }
});
