import React from 'react'
import Table from './Table'

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
        fetch('https://v2-api.sheety.co/7f01a568513886dcd760b17376d01421/testing/premMeritsByWins')
        .then(response => response.json())
        .then(data => {
                  this.setState({
                      isLoaded: true,
                      result: data.premMeritsByWins,
                    })
                  })
                    .catch(err => console.error(err)
                  )
                }

    render() {
      let { isLoaded, result, playerPos, playerName, playerTeam, playerMatches, playerWins, playerLosses, playerPerc, playerWalkover } = this.state;
        return (
        <>
          <section class="container">
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
          </section>
        </>
        )
    }
  }

export default FetchData;
