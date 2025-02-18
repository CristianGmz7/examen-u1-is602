import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import { Colors } from '@/constants/Colors'
import { useFonts } from 'expo-font'
import TemperatureApp from './TemperatureApp'
import ColorApp from './ColorApp'


    // const [  ] = useFonts({
    //     NombreFuente: require('../assets/fonts/fuentedeGoogle.ttf'),
    // })

    /* Ejemplo de uso fontFamily: NombreFuente  */

const App = () => {
  return (
    <View>
      {/* <TemperatureApp /> */}
      <ColorApp />
    </View>
  )
}

export default App