import React, { Component } from "react";
import "../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries,
  MarkSeries
} from "react-vis";

export default class Chart extends Component {
  render() {
    const data = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 }
    ];
    return (
      <div className="Chart row">
        <div className="col-3 justify-content-center mt-3">
          Weekly Basis Expense
          <XYPlot height={300} width={300}>
            <VerticalBarSeries data={data} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis label="data" />
            <YAxis />
          </XYPlot>
          <XYPlot height={300} width={300}>
            <LineSeries data={data} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis label="data" />
            <YAxis />
          </XYPlot>
        </div>
        <div className="col-3 justify-content-center mt-3">
          Monthly Basis Report
          <XYPlot height={300} width={300}>
            <VerticalBarSeries data={data} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis label="data" />
            <YAxis />
          </XYPlot>
          <XYPlot height={300} width={300}>
            <LineSeries data={data} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis label="data" />
            <YAxis />
          </XYPlot>
        </div>
        <div className="col-3 justify-content-center mt-3">
          Weekly Basis Earning
          <XYPlot height={300} width={300}>
            <VerticalBarSeries data={data} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis label="data" />
            <YAxis />
          </XYPlot>
          <XYPlot height={300} width={300}>
            <LineSeries data={data} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis label="data" />
            <YAxis />
          </XYPlot>
        </div>
        <div className="col-3 justify-content-center mt-3">
          Weekly Basis Expense
          <XYPlot height={300} width={300}>
            <MarkSeries data={data} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis label="data" />
            <YAxis />
          </XYPlot>
          <XYPlot height={300} width={300}>
            <MarkSeries data={data} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis label="data" />
            <YAxis />
          </XYPlot>
        </div>
      </div>
    );
  }
}
