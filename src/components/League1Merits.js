import React from 'react'
import Table from './MeritTable'

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
        fetch('https://api.sheety.co/424f603eeb31fd31a4f6870f89f727cb/leagueMerits/league1MeritsByWins')
        .then(response => response.json())
        .then(data => {
                  this.setState({
                      isLoaded: true,
                      result: data.league1MeritsByWins,
                    })
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
                <th>Name</th>
                <th>Team</th>
                <th>Played</th>
                <th>Won</th>
                <th>Lost</th>
                <th>Win %</th>
                <th>8 Balls</th>
              </tr>
            </thead>
                <Table table={this.state.result} />
          </table>
          </section>
        </>
        )
    }
  }
}

export default FetchData;
