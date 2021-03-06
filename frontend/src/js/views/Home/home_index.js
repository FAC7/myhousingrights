import React from 'react'
import { Row, Button } from 'react-materialize'
import { connect } from 'react-redux'
import { changeHomeless } from '../../actions/changeAnswers.js'
import { Link } from 'react-router'
var Dropzone = require('react-dropzone')


class Home extends React.Component {

  onDropFunc (files) {
    this.props.changeHomeless('q1', 'evidence', files)
  }

  render () {
    const onDropFunc = (files) => {
      this.props.changeHomeless('q1', 'evidence', files[0])
    }

    return (
      <main>
        <h4>Providing evidence</h4>
        <p>
          If you can, please provide the evidence you said you have.
        </p>
        <p>You told us you will have nowhere to stay in 28 days time. Can you provide evidence of this?</p>
        <Dropzone style={dropStyle} onDrop={onDropFunc}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <p>You told us you have mental health needs. Can you provide evidence of this?</p>
        <Dropzone style={dropStyle} onDrop={onDropFunc}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <p>You told us you have taken steps to prevent your homelessness. Can you provide evidence of this?</p>
        <Dropzone style={dropStyle} onDrop={onDropFunc}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <p>You told us you can prove a connection to your local area. Can you provide evidence of this?</p>
        <Dropzone style={dropStyle} onDrop={onDropFunc}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <Row style={{ textAlign: 'center', marginBottom: '10em' }}>
          <Link to={'/case'}>
            <Button>Case Summary</Button>
          </Link>
        </Row>
      </main>
    )
  }
}

const dropStyle = {
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '2em',
  height: '5em',
  border: '2px dashed black',
  borderRadius: '5px',
  padding: '1em'
}

const mapStateToProps = state => ({ ...state })

const actions = { changeHomeless }

export default connect(mapStateToProps, actions)(Home)
