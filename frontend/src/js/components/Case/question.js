import React from 'react'
import { connect } from 'react-redux'

class Question extends React.Component {
  render () {
    return (
      <div className='qDiv'>
        <h5 className='qNumber'>{this.props.questionNumber}</h5>
        <p className='qNotes'>{'You answered...' + this.props.Notes}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(Question)
