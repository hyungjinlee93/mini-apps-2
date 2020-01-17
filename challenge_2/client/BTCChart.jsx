import React from 'react';
import Chart from 'chart.js';

class BTCChart extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
      debugger;
      let data = {
        labels: [],
        datasets: [{
          label: 'BTC Price in USD',
          data: []
        }]
      }
      data.labels = Object.keys(this.props.data).sort((a, b) => {
        return Date.parse(a) - Date.parse(b);
      }).slice();
      for (let i = 0; i < data.labels.length; i++) {
        data.datasets[0].data.push(this.props.data[data.labels[i]]);
      }
      const ctx = document.getElementById('myChart');
      new Chart(ctx, {
        type: 'line',
        data: data,
        // options: options
      });
  }
  render() {
    return (
      <canvas
        id="myChart"
      />
    )
  }
}
export default BTCChart;