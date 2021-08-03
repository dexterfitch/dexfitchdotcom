import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div className="full-height">
        <img src="/assets/burger.png" className="burger img-fluid mx-auto d-block" />
        <img src="/assets/peanut.png" className="peanut img-fluid mx-auto d-block" />
        <img src="/assets/hotdog.png" className="hotdog img-fluid mx-auto d-block" />
      </div>
    )
  }
}

export default Home