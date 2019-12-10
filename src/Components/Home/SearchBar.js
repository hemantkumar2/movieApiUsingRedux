import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchMovie, fetchMovies } from '../../Actions/searchAction'


export class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.props.searchMovie(e.target.value)
  }
  onSubmit(e) {
    e.preventDefault()
    this.props.fetchMovies(this.props.text)
  }
  render() {
    return (
      <div className='jumbotron jumbotron-fluid mt-5 text-center'>
        <div className="container">
          <h1 className='display-4 mb-3'>
            <i className='fa fa-search' /> Search for a movie
          </h1>
          <form id='searchForm' onSubmit={this.onSubmit}>
            <input
              className='form-control'
              type="text"
              name='searchText'
              placeholder='Search Movies, Tv series ...'
              onChange={this.onChange}
            />
            <button type='submit' className='btn btn-primary btn-bg mt-3'> Search</button>
          </form>
        </div>

      </div>
    )
  }
}
const mapStatesToProps = state => ({
  text: state.movies.text
})
export default connect(
  mapStatesToProps,
  { searchMovie, fetchMovies }
)(SearchBar)
