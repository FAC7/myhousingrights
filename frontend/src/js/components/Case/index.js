import React from 'react'
import { connect } from 'react-redux'
import Question from './question.js'

class CaseSection extends React.Component {
  render () {
    const section = 'homeless'
    const questions = Object.keys(this.props[section]).map((question) => {
      return (
        <Question Notes={this.props[section][question].notes} questionNumber={question} />
      )
    })
    console.log('cases', this.props)
    return (
      <div>
        <h2 className='caseTitle'>{this.props.title}</h2>
        {questions}
        <h5 className='caseTitle'>Evidence</h5>
        {this.props[section]['Question 1'].evidence ?
          <img className='letter' src={this.props[section]['Question 1'].evidence} />
          : null}
        {this.props[section]['Question 2'].evidence ?
          <img className='letter' src={this.props[section]['Question 2'].evidence} />
          : null}
        {this.props[section]['Question 3'].evidence ?
          <img className='letter' src={this.props[section]['Question 3'].evidence} />
          : null}
        {this.props[section]['Question 4'].evidence ?
          <img className='letter' src={this.props[section]['Question 4'].evidence} />
          : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(CaseSection)
