// Import Libraries for making a component
import React, {Component} from 'react';
import {Text, View} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
// Make  a Component
const AlbumDetail= (props)=>{
  return(
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
      
    </Card>
  )
}

// Make the component available to other parts of App
export default AlbumDetail;
