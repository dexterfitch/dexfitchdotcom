import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Works from './Works'

class App extends React.Component {
  render () {
    return (
      <div className="container-fluid full-height">
        <div className="row full-height">
          <div className="col position-relative full-height">
            <Route exact path="/" component={Home} />
            <Route exact path="/works" component={Works} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </div>
          <div className="col-sm-2 full-height">
            <Nav />
          </div>
        </div>
      </div>
    )
  }
}

export default App