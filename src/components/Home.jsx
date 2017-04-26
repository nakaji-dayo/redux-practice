import React from 'react'
import { Link } from 'react-router'
import ColorBox from './ColorBox.jsx'

const Home = ({count, countUp, countDown}) => (
  <div>
    <h1>Hello Redux</h1>
    <div>{count}</div>
    <button onClick={countUp}>up</button>
    <button onClick={countDown}>down</button>
    <ColorBox />
  </div>
)

export default Home
