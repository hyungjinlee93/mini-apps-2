import React from 'react';
import ReactDOM from 'react-dom';
import BTCChart from './BTCChart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disclaimer: ''
    };
  }
  componentDidMount() {
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({bpi: data.bpi})
      })
      .catch(err => console.error(err));
  }
  renderBTCChart() {
    if(this.state.bpi !== undefined) {
      return (<BTCChart data={this.state.bpi}/>)
    }
  }
  render() {
    return (
      <div>
        {this.renderBTCChart()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('CryptoChart'));