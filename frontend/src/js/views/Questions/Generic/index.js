import React from 'react'
import { Button } from 'react-materialize'
import { Link } from 'react-router'
import Carousel from '../../../components/Carousel/index.js'

export default class Generic extends React.Component {
  render () {
    return (
      <div className='questions-container'>
        <h4>{this.props.title}</h4>
        <p>{this.props.intro}</p>
        <strong>{this.props.link}</strong>
        <Carousel qObjects={this.props.questions}/>
        <div className='btn-wrap'>
          <Link to={this.props.next}>
            <Button waves='light' className='btn-next'>
              Move on
            </Button>
          </Link>
          <a href='tel://00441632960889'>
            <Button waves='light' className='btn-next'>
              Stuck? Call us!
            </Button>
          </a>
        </div>

      </div>
    )
  }
}

Generic.defaultProps = {
  title: React.PropTypes.string.isRequired
}
