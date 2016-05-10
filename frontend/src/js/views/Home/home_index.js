import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getUserDetails } from '../../actions/actions_index.js'
var Dropzone = require('react-dropzone');

export default class Home extends React.Component {

  constructor () {
    super()
    this.state = {
      data_uri: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }

  onDrop (files) {
    console.log('Received files: ', files, files[0].preview)
    this.setState({
      data_uri: files[0].preview
    })
  }

  handleSubmit (e) {
    e.preventDefault()
  }

  handleFile (e) {
    var reader = new FileReader()
    var file = e.target.files[0]

    reader.onload = (upload) => {
      this.setState({
        data_uri: upload.target.result,
      })
    }

    reader.readAsDataURL(file)
  }

  render () {
    console.log(this.state)
    return (
      <Grid className='home'>
        <Row>
          <Col xs={12}>
          <input type="file" accept="image/*" capture="camera" />
            <Dropzone onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            {this.state.data_uri
              ? <img src={this.state.data_uri} />
              : null}
          </Col>
        </Row>
      </Grid>
    )
  }
}
//              <input type='file' onChange={this.handleFile} />
