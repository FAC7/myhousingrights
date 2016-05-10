import React from 'react'
import { Navbar, NavItem } from 'react-materialize'
import { Link } from 'react-router'

export default class Header extends React.Component {

  render () {
    return (
      <div>
        <Navbar brand='logo' right>
          <NavItem><Link to='/homeless'>Get Started</Link></NavItem>
        </Navbar>
      </div>
    )
  }
}

Header.defaultProps = {
  menuItems: [ 'about', 'contact' ]
}
