import React from 'react'
import { Button } from 'react-materialize'
import { browserHistory } from 'react-router'
import Questions from '../../../components/Carousel/index.js'

export default class Generic extends React.Component {
  onClick () {
    setTimeout(() => { browserHistory.push('/priority') }, 400)
  }

  render () {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.intro}</p>
        <h4>Please tell us a bit more:</h4>
        <div className='questions'>
          <Questions />
        </div>
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
