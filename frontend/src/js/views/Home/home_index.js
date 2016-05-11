import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { changeHomeless } from '../../actions/changeAnswers.js'
var Dropzone = require('react-dropzone')


class Home extends React.Component {

  onDropFunc (files) {
    this.props.changeHomeless('q1', 'evidence', files)
  }

  render () {
    console.log(this.props)

    const onDropFunc = (files) => {
      this.props.changeHomeless('q1', 'evidence', files[0])
    }

    return (
      <Grid className='home'>
        <Row>
          <Col xs={4}/>
          <Col xs={4}>
            <Dropzone onDrop={onDropFunc}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            
          </Col>
          <Col xs={4}/>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({ ...state })

const actions = { changeHomeless }

export default connect(mapStateToProps, actions)(Home)
