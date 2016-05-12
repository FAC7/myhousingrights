import React from 'react'
import { Navbar, NavItem } from 'react-materialize'

export default class Header extends React.Component {
  render () {
    return (
      <div>
        <Navbar brand='CoachPoint' right>
          <NavItem href='/'>Home</NavItem>
          <NavItem href='/homeless'>Homeless status</NavItem>
          <NavItem href='/priority'>Priority status</NavItem>
          <NavItem href='/residence'>Residence status</NavItem>
          <NavItem href='/intention'>On Purpose?</NavItem>
          <NavItem href='/evidence'>Upload evidence</NavItem>
          <NavItem href='/case'>See my case</NavItem>
        </Navbar>
      </div>
    )
  }
}
