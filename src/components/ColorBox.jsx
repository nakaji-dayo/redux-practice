import React from 'react'
import { Link } from 'react-router'
import * as R from 'recompose'

const ColorBox = R.withState('color', 'setColor', 'ff0')(
  ({color, setColor}) => (
    <div style={{backgroundColor: `#${color}`, width: 80, height: 80}}
         onClick={() => setColor(color.slice(1) + color[0])} >
    </div>
  )
)

export default ColorBox
