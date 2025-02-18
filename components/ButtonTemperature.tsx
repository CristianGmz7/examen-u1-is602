import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'

interface Props {
    sign: string,
    onPress: () => void;
}

const ButtonTemperature = ({sign, onPress}: Props) => {
  return (
    <Pressable 
        style={globalStyles.temperatureButton}
        onPress={onPress}
    >
        <Text style={globalStyles.temperatureText}>
            {sign}
        </Text>
    </Pressable>
  )
}

export default ButtonTemperature