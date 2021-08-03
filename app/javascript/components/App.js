import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import WorkList from './WorkList'

class App extends React.Component {
  render () {
    return (
      <div class="container-fluid full-height">
        <div class="row full-height">
          <div class="col position-relative full-height">
            <Route exact path="/" component={Home} />
            <Route exact path="/works" component={WorkList} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </div>
          <div className="position-relative nav-col col-sm-2 full-height">
            <Nav />
          </div>
        </div>
      </div>
    )
  }
}

export default App