import React from 'react'
import Header from './Header/header_index.js'
import Footer from './Footer/footer_index.js'

import '../../scss/style.scss'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header fluid />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
