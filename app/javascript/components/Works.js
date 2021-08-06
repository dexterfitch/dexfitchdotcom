import React from 'react'
import axios from 'axios'
import WorkCard from './WorkCard'

class Works extends React.Component {
  state = {
    works: []
  }

  componentDidMount() {
    axios.get('/api/works')
    .then(response => {
      this.setState({ works: response.data.works });
    })
  }

  sortAndRenderEachWork = (workType) => {
    return(
      <div className="container">
        <h2 className="mb-4">{workType}</h2>
        <div className="row mb-5">
          {this.state.works.map(work => {
            if (work.client_type == workType) {
              return (
                <div className="col-4">
                  <WorkCard key={work.id} work={work} />
                </div>
              )
            }
          })}
        </div>
        <hr />
      </div>
    )
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <h1 class="page-title mt-4">Work</h1>
          </div>
        </div>
        {this.sortAndRenderEachWork("Startup")}
        {this.sortAndRenderEachWork("Corporate")}
        {this.sortAndRenderEachWork("Freelance")}
        {this.sortAndRenderEachWork("Education")}
        {this.sortAndRenderEachWork("Personal")}
      </>
    )
  }
}

export default Works