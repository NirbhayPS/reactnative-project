import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, TextInput } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import {icons, SIZES} from '../../../constants'

const Welcome = () => {
  const router = useRouter();
  
  return (
    <View>
      <View style= {styles.container}>
        <Text style={styles.userName}>Hello Nirbhay</Text>
        <Text style={styles.welcomeMessage}>Find Jobs</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
          style={styles.searchInput}
          />
        </View>

      </View>
    </View>
  )
}

export default Welcome