/* global $ */
import React from 'react'
import Slider from 'react-slick'
import { Row, Col, Input } from 'react-materialize'
import TextArea from '../Dropdown/index.js'

export default class Questionnaire extends React.Component {
  constructor () {
    super()
    this.state = {
      added: false
    }
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

    console.log('rendering', this.state)

    const questions = this.props.qObjects.map((question, i) => {
      return (
        <div>
          <div className='Qbubble'>
            <div className='Qnumber'>{i + 1}</div>
          </div>
          <p>{question.text}</p>
          <div id='radio-answer'>
            <Input
              name={'answer' + i + 1}
              type='radio'
              value='yes'
              label='Yes'
              defaultChecked={question.answer === 1}
            />
            <Input
              name={'answer' + i + 1}
              type='radio'
              value='no'
              label='No'
              defaultChecked={question.answer === 0}
            />
          </div>
            {question.notes ? <TextArea {...question}/> : null}
        </div>
      )
    })

    return (
      <div className='questionnaire'>
        <Row>
          <Col s={8} offset='s2'>
            <Slider {...settings}>
              {questions}
            </Slider>
          </Col>
        </Row>
      </div>
    )
  }
}
