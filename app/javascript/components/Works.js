import React from 'react'
import axios from 'axios'
import WorkCard from './WorkCard'

class Works extends React.Component {
  state = {
    works: [],
    types: []
  }

  componentDidMount() {
    axios.get('/api/works')
    .then(response => {
      this.setState({ 
        works: response.data.works,
        types: this.getTypes(response)
      })
    })
  }

  getTypes = (response) => {
    let types = response.data.works.map(work => {
      return work.client_type
    }).sort();
    return [...new Set(types)];
  }

  sortAndRenderEachWork = () => {
    return(
      <>
        {this.state.types.map(workType => {
          return (
            <div key={workType}>
              <h2 className="mb-4">{workType}</h2>
              <div className="row pb-5">
                {this.state.works.map(work => {
                  if (work.client_type == workType) {
                    return (
                      <div key={work.id} className="col-4">
                        <WorkCard work={work} />
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          )
        })}
        <div className="work-divider"></div>
      </>
    )
  }

  render() {
    console.log(this.state)
    return (
      <>
        <div className="container">
          <div className="row">
            <h1 className="page-title my-5">Work</h1>
          </div>
          {this.sortAndRenderEachWork()}
        </div>
      </>
    )
  }
}

export default Works