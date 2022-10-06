import { StyleSheet, Text, View, Button, Image, TextInput, Dimensions, TouchableOpacity,ImageBackground, Alert } from 'react-native';
import React, { useState } from 'react';

const w = Dimensions.get('window').width-80;
const Register = ({navigation})=> {navigation.navigate("register")};
  /*  const [inputs, setData] = React.useState(
        {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    );
    const setUserName = (val) => {
        setData({
            ...inputs,
            username: val,
        })
    };
    function setEmail (val) {
        setData({
            ...inputs,
            email: val,
        })
    };
    const setPassword = (val) => {
        setData({
            ...inputs,
            password: val,
        })
    };
    const setConfirmmPassword = (val) => {
        setData({
            ...inputs,
            confirmPassword: val,
        })
    };*/
    
    const [username,onChangeText] = React.useState(null);
    const [email,onChangeText2] = React.useState(null);
    const [password,onChangeText3] = React.useState(null);
    const [rePassword,onChangeText4] = React.useState(null);
    const navigateReset = () => {};
    const navigateLogin = () => {navigation.navigate("login")};
  return (
    <ImageBackground source={require('../assets/back.jpg')} style={styles.container}>
        <View style={styles.appinfo}>
            <Image 
              source={require('../assets/logo.jpg')}
              style={styles.logo}
            />
            <Text style={{fontSize: 30,  fontWeight: 'bold', color: '#660033', margin: 20}}>
                MyBooks
            </Text>
        </View>
        <Text style={styles.welcomeText}>
          Fill yor details to get registered
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={username}
            placeholder="username"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText2}
            value={email}
            placeholder="e-mail"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText3}
            value={password}
            placeholder="password"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText4}
            value={rePassword}
            placeholder="re-password"
            secureTextEntry={true}
          />
          <TouchableOpacity
          onPress={() => Alert.alert('Registered')}
          style = {styles.btn}
          >
            <Text style={{color: 'white'}}> REGISTER </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.register}>
          <Text style={{color: 'white'}}>
            Already have an account?
          </Text>
          <TouchableOpacity
          style={styles.regBtn}
          onPress={navigateLogin}
          >
          <Text style={{color: 'white', fontWeight: 'bold', alignSelf: 'center'}}>
          Login
          </Text>
          </TouchableOpacity>
        </View>
    </ImageBackground>
  );
}
export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2d9e5',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  appinfo: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: '10%',
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    paddingTop: 50,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 15,
    marginRight: 20
  },
  input: {
    borderBottomWidth: 1,
    padding: 10,
    height: 40,
    width: w,
    marginBottom: 20,
    borderColor: 'rgba(255,255,255,.5)',
    backgroundColor: 'rgba(255,255,255,.01)',
    borderRadius: 20
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 40,
    color: 'rgba(166, 166, 166, .5)',
    fontWeight: 'bold'
  },
  register: {
    flex: 0.4,
    backgroundColor: '#660033',
    width: Dimensions.get('window').width,
    alignItems: "center",
    justifyContent: 'center',
    color: 'white'
  },
  form: {
    flex: 2,
    alignItems: 'center'
  },
  btn: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'rgba(255,100,200,0.1)',
    borderColor: 'rgba(0,0,0,.2)',
    width: 125,
    marginTop: 30,
    padding: 10,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  }
});