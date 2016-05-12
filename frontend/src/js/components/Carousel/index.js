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

  componentDidMount () {
    console.log($('input[name=answer1]:checked'))
  }

  render () {
    var settings = {
      dots: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      adaptiveHeight: true,
    }

    const questions = this.props.qObjects.map((question, i) => {
      const qnum = i + 1
      return (
        <div key={i}>
          <div className='Qbubble'>
            <div className='Qnumber'>{qnum}</div>
          </div>
          <p>{question.text}</p>
          <div id='radio-answer'>
            <Input
              name={'answer' + qnum}
              type='radio'
              value='yes'
              label='Yes'
              defaultChecked={!!question.answer}
            />
            <Input
              name={'answer' + qnum}
              type='radio'
              value='no'
              label='No'
              defaultChecked={!question.answer}
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
