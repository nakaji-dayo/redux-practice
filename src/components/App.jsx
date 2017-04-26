import React from 'react'
import { Link } from 'react-router'

const App = ({ children }) => (
  <div>
    <div className="content-wrapper">
      {children}
    </div>
  </div>
)

export default App
