import React from 'react'
import { connect } from 'react-redux'
import CaseSection from '../../components/Case/index.js'
import { ControlledTabs, Tab } from 'react-bootstrap'

class Case extends React.Component {
  render () {
    return (
      <div>
        <CaseSection />
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(Case)
