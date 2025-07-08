import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up Screen</Text>
      <Text style={styles.subheading}>Sign up here</Text> 
     <TextInput style={styles.input}
        placeholder='Enter Username '

      />
      <TextInput style={styles.input}
        placeholder='Email '

      />
      <TextInput style={styles.input}
        placeholder='Password '

      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Sign up
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95a5a6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  subheading: {
    marginTop: 15,
    marginBottom: 30,
    borderBottomWidth: 1,
  },
  input: {
    height: 38,
    width: '80%',
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'fff', 
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#21618c',
    paddingVertical: 9,
    borderRadius: 8,
    width: '70%',
    alignItems: 'center',

  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#f0f3f4'
  }
});
