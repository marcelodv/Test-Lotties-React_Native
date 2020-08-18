import React from 'react';
import { SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native'
import { StyleSheet, View, Text, TouchableOpacity, Image, StatusBar } from 'react-native'

import pizza from './pizza.json'
import logo from './assets/logo.png'

const TestLottie = () => {
  return <>
    <StatusBar backgroundColor="white" barStyle='dark-content'/>
    <SafeAreaView style={[styles.container]}>
      <Image style={[styles.logo]} resizeMode="contain" autoSize source={logo}/>
      {/* Animação Lottie */}
      <Lottie style={[styles.lottie]} resizeMode="contain" autoSize source={pizza} autoPlay loop />
      {/* Container Buttons */}
      <View style={[styles.buttons]}>
          {/* Botão Login */}
          <TouchableOpacity style={[styles.btnLogin]}>
            <Text style={[styles.loginText]}>ENTRAR</Text>
          </TouchableOpacity>
          {/* Botão Sing Up */}
          <TouchableOpacity style={[styles.btnSingUp]}>
            <Text style={[styles.singupText]}>CADASTRAR</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 50, 
    fontWeight: 'bold',
    color: 'orange',
  },
  lottie: {
    width: 250, 
    height: 250, 
  },
  buttons: {
    padding: 0,
    width: 250,
    height: 170,
    flexDirection: 'column', 
    justifyContent: 'space-evenly',
  },
  btnLogin: { 
    width: "100%",
    height: 60,
    backgroundColor: "#FF9933",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginText: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold'
  },
  btnSingUp: {
    width: "100%",
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#FF9933',
    borderWidth: 3,

  },
  singupText: {
    color: 'orange',
    fontSize: 25,
    fontWeight: 'bold'
  },
  logo: {
    width: 300,
  }
})

export default TestLottie;