import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Slot } from 'expo-router'
import { globalStyles } from '@/styles/global-styles'

const _layout = () => {
  return (
    <View style={globalStyles.container}>
      <Slot></Slot>
      <StatusBar style='light'/>
    </View>
  )
}

export default _layout