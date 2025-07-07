import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={styles.wrapper}>
        <Link href="/" style={{color: 'blue', marginVertical: 10, borderBottomWidth: 1}}>Back to Home</Link>
      <Text style={styles.title}>About</Text>
    </View>
  )
}

export default About

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