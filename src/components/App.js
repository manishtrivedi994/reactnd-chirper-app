import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import authedUser from '../reducers/authedUser'
import LoadingBar from 'react-redux-loading'
import NewTeet from './NewTweet'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <LoadingBar/>
        {this.props.loading === true ? null : <NewTeet />}
        
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser===null
  }
}

export default connect(mapStateToProps)(App)