import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import BlogHome from './Blog/Home/Home'

const MainRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <BlogHome />
        </Route>
      </Switch>
    </Router>
  )
}

export default MainRouter
