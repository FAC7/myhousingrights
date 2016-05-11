import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App.js'
import Home from './views/Home/home_index.js'
import Homeless from './views/Questions/Homeless/index.js'
import Residence from './views/Questions/Residence/index.js'
import Priority from './views/Questions/Priority/index.js'
import Intention from './views/Questions/Intention/index.js'
import Case from './views/Case/case_index.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='homeless' component={Homeless} />
    <Route path='priority' component={Priority} />
    <Route path='residence' component={Residence} />
    <Route path='intention' component={Intention} />
    <Route path='case' component={Case} />
  </Route>
)
