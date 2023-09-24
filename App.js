import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Welcome to {"Facebook"} unofficial presentation demo app</Text>
      <Image
        style={{ width: 148, height: 148 }}
        source={{ uri: 'https://img.icons8.com/fluency/240/facebook.png' }}
        alt="facebook"
      />
      <Text style={styles.subText}>Facebook is an online social media and social networking service owned by American technology giant Meta Platforms. Created in 2004 by Mark Zuckerberg with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#93B6F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    color: '#1c1e21',
    fontFamily: 'SFProDisplay-Regular, Helvetica, Arial, sans-serif',
    fontWeight: 'bold'
  },
  subText: {
    color: '#1c1e21',
    fontFamily: 'SFProDisplay-Regular, Helvetica, Arial, sans-serif',
  }
});
