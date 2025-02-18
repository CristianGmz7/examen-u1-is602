import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'

interface Props {
    onPress: () => void;
    currentColor: string;
}

const ButtonColor = ({onPress, currentColor}: Props) => {
  return (
    <Pressable 
        style={{
            ...globalStyles.colorButton,
            backgroundColor: currentColor
        }}
        onPress={onPress}
    >
        <Text style={globalStyles.colorText}>
            Cambiar Color
        </Text>
    </Pressable>
  )
}

export default ButtonColor