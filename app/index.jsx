import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import Logo from '../assets/img/megumin.jpg'

const Home = () => {
  return (
    <View style={styles.wrapper}>
        <Image source={Logo} style={{ width: 100, height: 100 }} />

      <Text style={[styles.title, {color: 'purple'}]}>ZzzScape</Text>
      <Text style={{marginTop: 10, marginBottom: 30}}>Sleeping app</Text>
      <Link href="/about" style={{ marginVertical: 10, borderBottomWidth: 1}}>About</Link>
      <Link href="/contact" style={{marginVertical: 10, borderBottomWidth: 1}}>Contact Us</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

})