import React from 'react'
import Slider from 'react-slick'
import { Row, Col, Button } from 'react-materialize'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import TextArea from '../Dropdown/index.js'

const qObjects = [
  {
    name: 'I plan and use my time efficiently',
    factor: 'Time Management'
  },
  {
    name: 'I am successful in social situations',
    factor: 'Social Competence'
  },
  {
    name: 'When working on a project, I do my best to get the details right',
    factor: 'Achievement Motivation'
  },
  {
    name: 'I change my thinking or opinions easily if there is a better idea',
    factor: 'Intellectual Flexibility'
  },
  {
    name: 'I can get people to work for me',
    factor: 'Task Leadership'
  },
  {
    name: 'I can stay calm in stressful situations',
    factor: 'Emotional Control'
  },
  {
    name: 'I like to be busy and actively involved in things',
    factor: 'Active Initiative'
  },
  {
    name: 'I know I have the ability to do anything I want to do',
    factor: 'Self-Confidence'
  },
  {
    name: 'I do not waste time',
    factor: 'Time Management'
  },
  {
    name: 'I am competent in social situations',
    factor: 'Social Competence'
  },
  {
    name: 'I try to get the best results when I do things',
    factor: 'Achievement Motivation'
  },
  {
    name: 'I am open to new ideas',
    factor: 'Intellectual Flexibility'
  },
  {
    name: 'I am a good leader when a task needs to be done',
    factor: 'Task Leadership'
  }
]

export default class Questionnaire extends React.Component {
  constructor () {
    super()
    this.state = {
      added: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({ added: !this.state.added })
  }

  render () {
    var settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false
    }

    const questions = qObjects.map((question, i) => {
      return (
        <div>
          <div className='Qbubble'>
            <div className='Qnumber'>{i + 1}</div>
          </div>
          <h5>{question.name}</h5>
          <Button onClick={this.handleClick}>Yes</Button>
          <Button onClick={this.handleClick}>No</Button>
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
              <div><Button> Submit Questionnaire</Button></div>
            </Slider>
          </Col>
        </Row>
      </div>
    )
  }
}
