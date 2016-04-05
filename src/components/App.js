import React, {Component} from 'react'

import  'style/app.css'

import Emoji from 'component/Emoji'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vibrate: false,
      emoji: '👌'
    }
  }
  _toggleVibration = () => {
    if (!this.state.vibrate) {
      window.navigator.vibrate(9000000)
      this.setState({
        vibrate: true
      })  
    } else {
      window.navigator.vibrate(0)
      this.setState({
        vibrate: false
      })
    }
  }
  _updateEmoji = (e) => {
    const currentValue = e.currentTarget.value
    if (!currentValue) {
      return
    }
    this.setState({
      emoji: currentValue 
    })
  }
  render() {
    return (
      <div>
        <h1>Vibrating Emoji! 😂</h1>
        <Emoji {...this.state} />
        <br />
        <button onClick={this._toggleVibration}>
          toggle vibration
        </button>
        <br />
        <br />
        <form>
          <input defaultValue={this.state.emoji} onChange={this._updateEmoji} />
        </form>
      </div>
    )
  }
}

export default App
