import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import Spinner from '../Layouts/Spinner'
import MoviesContainer from './MoviesContainer'

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchBar />
        {loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);
