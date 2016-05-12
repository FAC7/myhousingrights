import React from 'react'
import { connect } from 'react-redux'
import CaseSection from '../../components/Case/index.js'
import { Tabs, Tab } from 'react-bootstrap'

class Case extends React.Component {
  constructor () {
    super()
    this.state = { key: 1 }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect (key) {
    this.setState({ key })
  }

  render () {
    return (
      <main>
        <Tabs style={tabStyle} activeKey={this.state.key} onSelect={this.handleSelect} id='controlled-tab-example'>
          <Tab eventKey={1} title='Status'>
            <CaseSection section='homeless' />
          </Tab>
          <Tab eventKey={2} title='Priority'>
            <CaseSection section='vulnerability' />
          </Tab>
          <Tab eventKey={3} title='On Purpose'>
            <CaseSection section='intention' />
          </Tab>
          <Tab eventKey={4} title='Location'>
            <CaseSection section='locationData' />
          </Tab>
        </Tabs>
      </main>
    )
  }
}

const tabStyle = {
  marginTop: '2em',
  marginBottom: '5em'
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(Case)
