import React from 'react'

export default class Dropdown extends React.Component {
  render () {
    return (
      <textarea rows='4' cols='50' placeholder={this.props.placeholder}>
      </textarea>
    )
  }
}
