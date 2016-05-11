import React from 'react'
import Slider from 'react-slick'
import { Row, Col, Button } from 'react-materialize'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { browserHistory } from 'react-router'
import TextArea from '../Dropdown/index.js'

export default class Questionnaire extends React.Component {
  constructor () {
    super()
    this.state = {
      added: false,
      answers: [],
    }
  }

  handleClick (answer, hasNotes) {
    const aObj = hasNotes ? { answer } : { answer }

    const answers = this.state.answers.concat([ aObj ])
    this.setState({ added: !this.state.added })
  }

  render () {
    var settings = {
      dots: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
    }

    const questions = this.props.qObjects.map((question, i) => {
      return (
        <div>
          <div className='Qbubble'>
            <div className='Qnumber'>{i + 1}</div>
          </div>
          <p>{question.text}</p>
          <Button onClick={this.handleClick.bind(this, 1, question.notesOn)}>Yes</Button>
          <Button onClick={this.handleClick.bind(this, 0, !question.notesOn)}>No</Button>
          <ReactCSSTransitionReplace
            {...this.props}
            transitionName='roll-up'
            transitionEnterTimeout={800}
            transitionLeaveTimeout={800}
            transitionLeave
          >
            {this.state.added ? <TextArea /> : null}
          </ReactCSSTransitionReplace>
        </div>
      )
    })

    return (
      <div className='questionnaire'>
        <Row>
          <Col s={8} offset='s2'>
            <Slider {...settings}>
              {questions}
              <div><Button>Submit Questionnaire</Button></div>
            </Slider>
          </Col>
        </Row>
      </div>
    )
  }
}
