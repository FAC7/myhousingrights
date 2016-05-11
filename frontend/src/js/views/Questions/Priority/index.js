import React from 'react'
import Generic from '../Generic/index.js'
import { priority } from '../copy.js'

export default (props) => {
  const properties = Object.assign({}, priority, props)

  return (
    <main>
      <Generic {...properties}/>
    </main>
  )
}
