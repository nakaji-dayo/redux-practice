import { connect } from 'react-redux'
import Home from '../components/Home.jsx'
import _ from 'lodash'

const mapStateToProps = (state, props) => {
  return { }
}

const container = connect(
  mapStateToProps,
  {}
)(Home)

export default container
