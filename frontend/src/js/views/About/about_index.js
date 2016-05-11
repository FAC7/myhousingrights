import React from 'react'
import Webcam from '../../../../../public/minifiedWebcam.js'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      screenshot: null,
      sc2: null,
      tab: 0
    }
    this.screenshot = this.screenshot.bind(this)
    this.screenshot2 = this.screenshot2.bind(this)
  }

  screenshot () {
    const screenshot = this.refs.webcam.getScreenshot()
    this.setState({ screenshot: screenshot })
  }

  screenshot2 () {
    const screenshot = this.refs.webcam.getScreenshot()
    this.setState({ sc2: screenshot })
  }

  render () {
    console.log(this.state)
    return (
      <div>
        <h1>react-webcam</h1>
        <Webcam
          ref='webcam'
        />
        <div>
          <h2>Screenshots</h2>
          <div className='screenshots'>
            <div className='controls'>
              <button onClick={this.screenshot}>capture</button>
              <button onClick={this.screenshot2}>capture</button>
            </div>
            {this.state.screenshot ? <img src={this.state.screenshot} /> : null}
            {this.state.sc2 ? <img src={this.state.sc2} /> : null}
          </div>
        </div>
      </div>
    )
  }
}
