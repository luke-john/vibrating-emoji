import React, {Component} from 'react'

import  'style/vibrate.css'
import  'style/emoji.css'

export default ({vibrate, emoji}) => (
  <span
    className={vibrate ? 'emoji vibrate' : 'emoji'}
  >
    {emoji}
  </span>
)
