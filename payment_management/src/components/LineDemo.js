import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [5000, 10000, 20000, 40000, 50000, 60000, 70000]
    }
  ]
};

export default class LineDemo extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div>
            <h2>MONTHLEY CHART</h2>
            <Line ref="chart" data={data} />
          </div>
        </div>
        <div className="row">
          <div>
            <h2>WEEKLY CHART</h2>
            <Bar ref="chart" data={data} />
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets[0].data);
  }
}
