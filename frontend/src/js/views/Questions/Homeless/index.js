import React from 'react'
import Generic from '../Generic/index.js'
import { homeless } from '../copy.js'

export default (props) => {
  const properties = Object.assign({}, homeless, props, { next: '/priority' })

  return (
    <main>
      <Generic {...properties}/>
    </main>
  )
}
