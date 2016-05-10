import React from 'react'
import { addHomeless } from '../../actions/addHomeless.js'
import { connect } from 'react-redux'

class Dropdown extends React.Component {
  render () {
    const changeHandler = (event) => {
      this.props.dispatcher(event.target.value, 'changed notes', 1)
    }
    console.log(this.props)
    return (
      <textarea onChange={changeHandler} rows='4' cols='50' placeholder={this.props.placeholder} />
    )
  }
}

const mapStateToProps = state => ({...state})
const mapDispatchToProps = dispatch => {
  return {
    dispatcher: (data, changed, index) => {
      dispatch(addHomeless(data, changed, index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)
