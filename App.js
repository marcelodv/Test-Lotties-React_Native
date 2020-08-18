import React from 'react';
import { SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native'
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native'

import pizza from './pizza.json'

const TestLottie = () => {
  return <SafeAreaView style={[styles.container]}>

    <Lottie style={[styles.lottie]} resizeMode="contain" autoSize source={pizza} autoPlay loop />

    <View style={[styles.buttons]}>

        <TouchableOpacity style={[styles.btnLogin]}>
          <Text style={[styles.loginText]}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btnSingUp]}>
          <Text style={[styles.singupText]}>Sing Up</Text>
        </TouchableOpacity>

    </View>

  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    flexDirection: 'column',
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
    height: 200,
    flexDirection: 'column', 
    justifyContent: 'space-evenly',
  },
  btnLogin: { 
    width: "100%",
    height: 60,
    backgroundColor: "orange",
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
    borderColor: 'orange',
    borderWidth: 4,

  },
  singupText: {
    color: 'orange',
    fontSize: 25,
    fontWeight: 'bold'
  }
})

export default TestLottie;