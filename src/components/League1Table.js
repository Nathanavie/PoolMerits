import React from 'react'
import Table from './LeagueTable'

class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      isLoaded: false,
    };
  }

    componentDidMount = () => {
      this.fetchData();
    }

    fetchData = () => {
        fetch('https://v2-api.sheety.co/7f01a568513886dcd760b17376d01421/testing/nathanL1Table')
        .then(response => response.json())
        .then(data => {
                  this.setState({
                      isLoaded: true,
                      result: data,
                    })
                    console.log(this.state.result)
                  })
                    .catch(err => console.error(err)
                  )
                }

    render() {
      const { isLoaded } = this.state;
      if (!isLoaded) {
        return <h1>Loading the table...</h1>;
      } else {
        return (
        <>
          <section class="container">
          <table>
            <thead>
              <tr>
                <th>Position</th>
                <th>Team</th>
                <th>Played</th>
                <th>Won</th>
                <th>Drawn</th>
                <th>Lost</th>
                <th>Points</th>
                <th>Frames Won</th>
                <th>Frames Lost</th>
                <th>Frames Difference</th>
              </tr>
            </thead>
            <Table table={this.state.result.nathanL1Table} league="L1" />
          </table>
          </section>
        </>
        )
    }
  }
}

export default FetchData;
