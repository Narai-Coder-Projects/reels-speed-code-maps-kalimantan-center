import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Button from './src/components/Button';
import Search from './src/components/Search'

const App = () => {
  return (
    <>
      <View style={styles.flex}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.flex}
          region={{
            latitude: -1.2195364,
            longitude: 113.321844,
            latitudeDelta: 2,
            longitudeDelta: 2
          }}
        ></MapView>
      </View>
      <View style={styles.search}>
        <Search />
      </View>
      <View style={styles.button}>
        <Button />
        <Button secondary={'IconMin'} />
      </View>
    </>
  )
}
export default App;

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  search: {
    height: 45,
    width: '100%',
    position: 'absolute',
    top: 8,
    right: 2,
    zIndex: 10,
    flexDirection: 'row'
  },
  button: {
    position: 'absolute',
    right: 14,
    top: 70,
    zIndex: 10
  }
})
