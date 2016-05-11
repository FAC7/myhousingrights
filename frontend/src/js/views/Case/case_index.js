import React from 'react'
import { connect } from 'react-redux'
import CaseSection from '../../components/Case/index.js'

class Case extends React.Component {
  render () {
    return (
      <main className='case'>
        <CaseSection />
      </main>
    )
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(Case)
