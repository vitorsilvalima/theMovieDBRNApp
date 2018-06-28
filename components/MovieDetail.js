import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { 
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  WebView,
} from 'react-native';
import MovieMock  from '../mock/MovieDetail.json';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo';

export default class MovieDetail extends PureComponent {
  state = {
    movie: null,
  }

  componentWillMount(){
    const { id: movieId } = this.props;
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b573d051ec65413c949e68169923f7ff&append_to_response=videos`)
      .then(response => response.json())
      .then(movie => this.setState({
        movie,
      }));
  }

  renderYoutubeTrailer(){
    const { videos } = this.state.movie;
    return videos && videos.results.length > 0 && videos.results[0].site === "YouTube"
      ? (
        <WebView
          style={styles.videoPlayer}
          javaScriptEnabled={true}
          source={{uri: `https://www.youtube.com/embed/${videos.results[0].key}?rel=0&autoplay=0&showinfo=0&controls=0`}}
        />
      ) : null
  }

  renderHeader() {
    const { goBack } = this.props;
    const { backdrop_path } = this.state.movie

    return (
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`,
        }}
        style={styles.movieImage}
      >
        <TouchableOpacity
          onPress={goBack}>
          <Ionicons name="ios-arrow-back-outline" size={50} color="white" style={styles.icon} />
        </TouchableOpacity>
      </ImageBackground>
    )
  }

  renderMovie() {
    const {
      title,
      overview,
    } = this.state.movie;

    return (
      <ScrollView style={styles.movieView}>
        {this.renderHeader()}
        <View style={styles.movieContentWrapper}>
          <Text style={styles.movieContentTitle}>{title}</Text>
          <Text
            textBreakStrategy='highQuality'
            style={styles.movieContent}>
            {overview}
          </Text>
          {this.renderYoutubeTrailer()}
        </View>
      </ScrollView>
    )
  }

  render() {
    const { movie } = this.state;

    return movie ? (
      this.renderMovie()
    ) : null
  }
}

MovieDetail.propTypes = {
  id: PropTypes.number.isRequired,
  goBack: PropTypes.func,
};

MovieDetail.defaultProps = {
  goBack: () => null,
}

const styles = StyleSheet.create({
  movieContent: {
    textAlign: 'justify',
  },
  movieContentWrapper: { padding: 15 },
  movieContentTitle: {
    fontSize: 30,
    textAlign: 'center',
  },
  videoPlayer: {
    flex: 1,
    height: 200
  },
  movieView: {
    flex:1,
    backgroundColor: '#F1FFF4',
    marginTop: 50,
    flexDirection: 'column',
  },
  movieImage: {
    height: 200,
    flex: 1,
    paddingLeft: 15,
    paddingTop: 10,
  }
});