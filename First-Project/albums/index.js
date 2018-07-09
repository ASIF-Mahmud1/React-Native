// Import a library to help create a component
import React from 'react';
import {AppRegistry,View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';



// Create a component
// A Component is a React function that renders some JSX to the screen
// JSX is nothing but some function calls of javascript in disguise of html
const App=()=>{
  return(
  <View>
  <Header headerText= {'Albums !!'}/>
  <AlbumList />
  </View>
  );
};

//Render it to the device
AppRegistry.registerComponent('albums', ()=> App);
