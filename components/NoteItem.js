import React from 'react'
import { Text, StyleSheet } from 'react-native'

function NoteItem ({item}) {
   return (
       <Text style={styles.item}> {item.body} </Text>
   )
}

const styles = StyleSheet.create({
   item: {
      borderColor: 'rgba(139,95,60,0.62)',
      borderRadius: 5,
      borderWidth: 1,
      textAlign: 'center',
      paddingVertical: 10,
      marginVertical: 10
   }
})

export default NoteItem
