import React from 'react'
import { Button } from 'react-materialize'
import { browserHistory } from 'react-router'
import Carousel from '../../../components/Carousel/index.js'

export default class Generic extends React.Component {
  onClick () {
    setTimeout(() => { browserHistory.push('/priority') }, 400)
  }

  render () {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <p>{this.props.intro}</p>
        <h5>{this.props.link}</h5>
        <Carousel qObjects={this.props.questions}/>
        <Button waves='light' className='btn-next' onClick={this.onClick}>
          Move on
        </Button>
      </div>
    )
  }
}

Generic.defaultProps = {
  title: React.PropTypes.string.isRequired
}
