import React from 'react'
import Generic from '../Generic/index.js'
import { residence } from '../copy.js'

export default (props) => {
  const properties = Object.assign({}, residence, props, { next: '/intention' })

  return (
    <main>
      <Generic {...properties}/>
    </main>
  )
}
