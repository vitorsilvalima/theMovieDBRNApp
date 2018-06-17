import React from 'react';
import { StyleSheet, View, Dimensions, FlatList, Modal } from 'react-native';
import { Constants } from 'expo';
import { Movie, MovieDetail } from './components'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.fetcthItems()
  }
  state = {
    results: [
    ],
    modalVisible: false,
    movieId: 19404,
  };

  fetcthItems = () => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=b573d051ec65413c949e68169923f7ff')
      .then(response => response.json())
      .then(({results}) => this.setState({
        results
      }))
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  goToDetail = (id) => {
    this.setState({modalVisible: true, movieId: id});
  }

  renderMovie = ({ item: movie }) => {
    return (<Movie movie={movie} onPress={(id) => this.goToDetail(id)}/>)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => `${item.id}`}
          data={this.state.results}
          renderItem={this.renderMovie}
          horizontal
        />

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
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
  },
});