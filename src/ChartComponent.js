import React from "react";
import axios from "axios";
import Chart from "chart.js/auto";

class ChartComponent extends React.Component {
  state = {
    chartLabels: "",
    chartData: "",
    ctx: "",
    Chart: "",
    startDate: "",
    endDate: "",
    initiate: false,
  };

  async componentDidMount() {
    const importData = await axios.get(
      "http://api.coindesk.com/v1/bpi/historical/close.json"
    );

    let labels = Object.keys(importData.data.bpi);
    let data = Object.values(importData);

    this.setState({
      chartLabels: labels,
      chartData: data,
      initiate: true,
      ctx: document.getElementById("myChart").getContext("2d"),
    });
  }
  catch(err) {
    console.log(err);
  }

  async componentDidUpdate() {}
  render() {
    return <canvas id="myChart"></canvas>;
  }
}

export default ChartComponent;
