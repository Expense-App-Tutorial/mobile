import { View, StyleSheet, Image } from 'react-native';

// create a component
const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/splash.png')} style={{ width: 120, height: 120 }} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Splash;
