import React from 'react'
import * as importedActions from '../../actions/changeAnswers.js'
import { connect } from 'react-redux'

class Dropdown extends React.Component {
  render () {
    const changeHandler = (e) => {
      const functionToCall = 'change' + this.props.section
      this.props[functionToCall](this.props.q, 'notes', e.target.value)
    }
    return (
      <textarea onChange={changeHandler} rows='4' cols='50' placeholder='tell us more!' />
    )
  }
}

const mapStateToProps = state => ({ ...state })
const actions = { ...importedActions }

export default connect(mapStateToProps, actions)(Dropdown)
