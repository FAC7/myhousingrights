import React from 'react'
import { browserHistory } from 'react-router'
import { Button } from 'react-materialize'

export default class App extends React.Component {
  render () {
    return (
      <main style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '2em' }}>
          Welcome to the fact-finding mission
        </h3>
        <h5 style={{ marginBottom: '2em' }}>
          We’re going to ask you questions about your situation
        </h5>
        <h5 style={{ marginBottom: '2em' }}>
          This is to prepare you to speak to your council about your homelessness
        </h5>
        <Button onClick={() => { browserHistory.push('/homeless') }}>Get started</Button>
      </main>
    )
  }
}
