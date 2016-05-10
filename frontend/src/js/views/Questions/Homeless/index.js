import React from 'react'
import Generic from '../Generic/index.js'
import { homeless } from '../copy.js'

export default (props) => {
  const properties = {
    title: homeless.title,
    intro: homeless.intro,
    ...props }
  return (
    <main>
      <Generic {...properties}/>
    </main>
  )
}
