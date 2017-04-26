/* @flow */
import type { Dispatch } from '../actions'
import { connect } from 'react-redux'
import Home from '../components/Home.jsx'
import _ from 'lodash'

const mapStateToProps = (state, props) => {
  const { home: { count } } = state
  return { count }
}

const mapDispatchToProps = (dispatch: Dispatch, props) => ({
  countUp: () => {
    dispatch({type: "COUNT_UP", value: 1})
  },
  countDown: () => {
    dispatch({type: "COUNT_DOWN", price: 1})
  }
})

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default container
