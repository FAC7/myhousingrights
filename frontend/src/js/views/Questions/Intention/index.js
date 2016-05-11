import React from 'react'
import Generic from '../Generic/index.js'
import { intention } from '../copy.js'

export default (props) => {
  const properties = Object.assign({}, intention, props, { next: '/evidence' })

  return (
    <main>
      <Generic {...properties}/>
    </main>
  )
}
