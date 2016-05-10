import React from 'react'
import Slider from 'react-slick'
import { Row, Col, Button } from 'react-materialize'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import TextArea from '../Dropdown/index.js'

const qObjects = [
  {
    section: 'Homeless',
    q: 'q1',
    name: 'I plan and use my time efficiently',
    factor: 'Time Management'
  },
  {
    section: 'Homeless',
    q: 'q2',
    name: 'I am successful in social situations',
    factor: 'Social Competence'
  },
  {
    section: 'Homeless',
    q: 'q3',
    name: 'When working on a project, I do my best to get the details right',
    factor: 'Achievement Motivation'
  },
  {
    section: 'Homeless',
    q: 'q4',
    name: 'I change my thinking or opinions easily if there is a better idea',
    factor: 'Intellectual Flexibility'
  },
  {
    section: 'Location',
    q: 'q1',
    name: 'I can get people to work for me',
    factor: 'Task Leadership'
  },
  {
    section: 'Location',
    q: 'q2',
    name: 'I can stay calm in stressful situations',
    factor: 'Emotional Control'
  },
  {
    section: 'Location',
    q: 'q3',
    name: 'I like to be busy and actively involved in things',
    factor: 'Active Initiative'
  },
  {
    section: 'Location',
    q: 'q4',
    name: 'I know I have the ability to do anything I want to do',
    factor: 'Self-Confidence'
  },
  {
    section: 'Vulnerability',
    q: 'q1',
    name: 'I do not waste time',
    factor: 'Time Management'
  },
  {
    section: 'Vulnerability',
    q: 'q2',
    name: 'I am competent in social situations',
    factor: 'Social Competence'
  },
  {
    section: 'Vulnerability',
    q: 'q3',
    name: 'I try to get the best results when I do things',
    factor: 'Achievement Motivation'
  },
  {
    section: 'Vulnerability',
    q: 'q4',
    name: 'I am open to new ideas',
    factor: 'Intellectual Flexibility'
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
            {this.state.added ? <TextArea {...question}/> : null}
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
