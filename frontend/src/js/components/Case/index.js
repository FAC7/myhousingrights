import React from 'react'
import { connect } from 'react-redux'
import Question from './question.js'

class CaseSection extends React.Component {
  render () {
    const questions = Object.keys(this.props.homeless).map((question) => {
      return (
        <Question Notes={this.props.homeless[question].notes} questionNumber={question} Evidence={this.props.homeless[question].evidence.preview}/>
      )
    })
    console.log('cases', this.props)
    return (
      <main>
        <h2 className='caseTitle'>{this.props.title}</h2>
        {questions}
      </main>
    )
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(CaseSection)
