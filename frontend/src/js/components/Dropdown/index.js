import React from 'react'

import '../../../scss/_menu.scss'

export default class Dropdown extends React.Component {
  render () {
    return (
      <textarea rows='4' cols='50' placeholder={this.props.placeholder}>
      </textarea>
    )
  }
}
