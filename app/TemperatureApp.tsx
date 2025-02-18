import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import { useTemperature } from '@/hooks/useTemperature'
import ButtonTemperature from '@/components/ButtonTemperature'


const TemperatureApp = () => {

    const { temperature, currentColor, incrementTemperature, decrementTemperature } = useTemperature();

  return (
    <View>
        <View>

        <Text style={globalStyles.temperaturePrincipalText}>TemperatureApp</Text>

        <Text 
            style={{
                ...globalStyles.currentTemperatureText,
                color: currentColor
            }}
        >
            {temperature}
        </Text>

        </View>

        <View style={globalStyles.containerButtonsTemperature}>
            <ButtonTemperature sign='-' onPress={decrementTemperature} />
            <ButtonTemperature sign='+' onPress={incrementTemperature}/>
        </View>

    </View>
  )
}

export default TemperatureApp