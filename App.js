import React from 'react';
import { StyleSheet, View, FlatList, Modal, Text } from 'react-native';
import { Constants } from 'expo';
import { MovieDetail, Menu, Loading } from './components';
import menuItens from './config/menuItens';
import { MediaList } from './containers';


export default class App extends React.Component {
  constructor(props){
    super(props)
  }

  state = {
    modalVisible: false,
    movieId: 19404,
    tmdbUrl: 'https://api.themoviedb.org/3/movie/now_playing?api_key=b573d051ec65413c949e68169923f7ff',
    selectMediaItem: menuItens[0],
  };

  getMediaList(){
    const {path, title, tmdbUrl} = this.state.selectMediaItem;
    return (tmdbUrl && title) ? (
      <MediaList title={title} key={title} tmdbUrl={tmdbUrl} goToDetail={this.goToDetail} />
    ) 
      : null;
  }

  goToDetail = id => {
    console.log(id)
  }
  render() {
    const { selectMediaItem } = this.state
    return (
      <View style={styles.container}>
        <Menu itens={menuItens} onPress={(item) => {
          console.log('selecting', item)
          this.setState({ selectMediaItem: item })
        }}/>
        {this.getMediaList()}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <MovieDetail id={this.state.movieId} goBack={() => this.setModalVisible(!this.state.modalVisible)}/>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: 150,
    height: 200,
    padding: 4, // needed for shadow
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
  }
});