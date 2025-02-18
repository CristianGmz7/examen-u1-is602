import { View, Text } from 'react-native'
import React from 'react'
import ButtonColor from '@/components/ButtonColor'
import { globalStyles } from '@/styles/global-styles'
import { Colors } from '@/constants/Colors'
import { useColor } from '@/hooks/useColor'

const ColorApp = () => {

  const { currentColor, generateNewColor } = useColor();

  return (
    <View 
      style={{
          ...globalStyles.colorContainer,
          // backgroundColor: Colors.red
      }}
    >
      <ButtonColor onPress={generateNewColor} currentColor={currentColor}/>
    </View>
  )
}

export default ColorApp