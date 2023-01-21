import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app now...!</Text>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.h1}>This is my first Application</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    backgroundColor: 'blue',
    padding: 8
  },

  h1: {
    paddingTop: 5,
    backgroundColor: 'yellow',
    padding: 8,
   

  }
});
