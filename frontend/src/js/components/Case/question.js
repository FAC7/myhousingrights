import React from 'react'
import { connect } from 'react-redux'

class Question extends React.Component {
  render () {
    const image = this.props.Evidence
    return (
      <div className='qDiv'>
        <h4 className='qNumber'>{this.props.questionNumber}</h4>
        <p className='qNotes'>{this.props.Notes}</p>
        <img src={image} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(Question)
