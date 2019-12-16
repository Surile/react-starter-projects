import React, { lazy, Suspense } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const Home = lazy(() => import('./views/Home'))
const About = lazy(() => import('./views/About'))
const Dashborad = lazy(() => import('./views/Dashboard'))

export default () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashborad />
        </Route>
      </Switch>
    </Suspense>
  </Router>
)
