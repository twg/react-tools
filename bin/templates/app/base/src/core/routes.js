import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './About'
import Users from './Users'
import Home from './Home'
import Nav from './Nav'

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Home} />
      <Nav />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
    </div>
  </BrowserRouter>
)

export default Routes
