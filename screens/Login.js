import { StyleSheet, Text, View, Button, Image, TextInput, Dimensions, TouchableOpacity,ImageBackground, Alert } from 'react-native';
import React, { useState } from 'react';
import Users from '../default/users.js';
const w = Dimensions.get('window').width-80;
const Login = ({navigation})=> {
    const validateInputs = () => {
        const checkUser = Users.filter(item => {
            return (userName.toLowerCase() == item.username || item.email) && password == item.password;
        });
        if(userName.trim().length == 0 || password.length == 0){
            Alert.alert('username/password cannot be empty');
            return;
        }
        else if(checkUser.length == 0){
            Alert.alert('invalid username/password');
            return;
        }else{
            navigation.navigate('home',{user: userName.toUpperCase()});
            return;
        }
    };

    const [userName,onChangeText] = React.useState('');
    const [password,onChangeText2] = React.useState('');
    const navigateReset = () => {};
    const navigateRegister = () => {navigation.navigate("register")};
  return (
    <ImageBackground source={require('../assets/back.jpg')} style={styles.container}>
        <View style={styles.appinfo}>
            <Image 
              source={require('../assets/logo.jpg')}
              style={styles.logo}
            />
            <Text style={{fontSize: 30,  fontWeight: 'bold', color: '#660033'}}>
                MyBooks
            </Text>
        </View>
        <Text style={styles.welcomeText}>
          Welcome to MyBooks App. Please Enter your Login credentials to continue.
        </Text>
       <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={userName}
            placeholder="e-mail/username"
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangeText2}
            value={password}
            placeholder="password"
            secureTextEntry={true}
       />
        <Button
          title="Log in"
          color = '#009933'
          onPress={() => validateInputs()}
        />
        <View style={styles.forgotPass}> 
        <Text>
          Forgot Password?
        </Text>
        <TouchableOpacity 
        style={styles.resetPass}
        onPress={navigateReset}
        >
        <Text style={{color: 'blue'}}>
          Reset password
        </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.register}>
        <Text style={{color: 'white'}}>
          Don't have an account?
        </Text>
        <TouchableOpacity
        style={styles.regBtn}
        onPress={navigateRegister}
        >
        <Text style={{color: 'white', fontWeight: 'bold'}}>
        Register
        </Text>
        </TouchableOpacity>
        </View>
    </ImageBackground>
  );
}
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2d9e5',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    bakcgroundImage: ""
  },
  appinfo: {
   flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 50,
    marginBottom: 70,
    alignItems: 'center',
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 15,
    marginRight: 20
  },
  input: {
    borderWidth: 1,
    padding: 10,
    height: 40,
    width: w,
    marginBottom: 20,
    borderRadius: 15
    
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 20,
    color: 'rgba(166, 166, 166, .7)',
    
  },
  forgotPass: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15
  },
  resetPass: {
    height: 20,
    marginLeft: 10
  },
  register: {
    flex: 0.4,
    backgroundColor: '#660033',
    width: Dimensions.get('window').width,
    alignItems: "center",
    justifyContent: 'center',
    color: 'white',

  },
});