import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addEvidence } from '../../actions/addEvidence.js'
var Dropzone = require('react-dropzone')


class Home extends React.Component {

  onDropFunc (files) {
    this.props.addEvidence(files, 'this.props.name')
  }

  render () {
    console.log(this.props)

    const onDropFunc = (files) => {
      this.props.addEvidence(files, 'this.props.name')
    }

    return (
      <Grid className='home'>
        <Row>
          <Col xs={4}/>
          <Col xs={4}>
            <Dropzone onDrop={onDropFunc}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            {this.props.files.data ? <img src={this.props.files.data.preview} /> : ''}
          </Col>
          <Col xs={4}/>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({ ...state })

const actions = {addEvidence}

export default connect(mapStateToProps, actions)(Home)
