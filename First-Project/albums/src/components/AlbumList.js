// Import Libraries for making a component
import React, {Component} from 'react';
import { View} from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios'
// Why use axios-- It is used to make http request to fetch data
// Make  a Component
class AlbumList extends Component{
  state= {
    albums: []
  };
 componentWillMount(){
   axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums: response.data}));
   //console.log("I told ya componentWillMount !!")
 }

 renderAlbums(){
  return(
    this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />)
  )
 }

  render(){

    return(
      <View>
      {this.renderAlbums()}
      </View>
    )
  }
}
// Make the component available to other parts of App
export default AlbumList;
