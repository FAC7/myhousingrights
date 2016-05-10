import React from 'react'
import { Navbar, NavItem } from 'react-materialize'

export default class Header extends React.Component {
  render () {
    return (
      <div>
        <Navbar brand='centrepoint' right>
          <NavItem href='/homeless'>Get Started</NavItem>
        </Navbar>
      </div>
    )
  }
}
