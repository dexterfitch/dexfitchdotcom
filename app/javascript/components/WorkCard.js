import React from 'react'

class Work extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.work.name}</h5>
          <p className="card-text">{this.props.work.abstract}</p>
        </div>
        <img src="https://via.placeholder.com/1500x500.png?text=X" className="work-preview-image img-fluid" alt="placeholder" />
      </div>
    )
  }
}

export default Work