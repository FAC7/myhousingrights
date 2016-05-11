import React from 'react'
import { Button } from 'react-materialize'
import { browserHistory } from 'react-router'
import Carousel from '../../../components/Carousel/index.js'

export default class Generic extends React.Component {
  constructor () {
    super()
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    browserHistory.push(this.props.next)
  }

  render () {
    return (
      <div className='questions-container'>
        <h4>{this.props.title}</h4>
        <p>{this.props.intro}</p>
        <strong>{this.props.link}</strong>
        <Carousel qObjects={this.props.questions}/>
        <div className='btn-wrap'>
          <Button waves='light' className='btn-next' onClick={this.onClick}>
            Move on
          </Button>
          <Button waves='light' className='btn-next'>
            Stuck? Call us!
          </Button>
        </div>

      </div>
    )
  }
}

Generic.defaultProps = {
  title: React.PropTypes.string.isRequired
}
