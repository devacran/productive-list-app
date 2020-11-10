import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { filterList } from "../utils/filterList";
import { parseTimer } from "../utils/timer";
import Chart from "chart.js";
const Statistics = props => {
  const { list } = props;
  //To generate labels for the chart
  const generateLabels = period => {
    const todayDate = new Date();
    const generateWeek = () => {
      let labels = [];
      for (let i = 0; i < 7; i++) {
        let d;
        if (i === 0) {
          //The first loop uses the current date
          d = todayDate.setDate(todayDate.getDate());
        } else {
          //Then rest a day to the date
          d = todayDate.setDate(todayDate.getDate() - 1);
        } //Convert the date to local string
        const label = new Date(d).toLocaleDateString("es-MX", {
          day: "numeric",
          month: "short"
        });
        labels.push(label);
      }
      return labels;
    };
    switch (period) {
      case "week":
        return generateWeek();
        break;
      default:
        return [];
    }
  };
  //Function to generate data for the chart depending to the labels
  const generateValues = (options = {}) => {
    const { period, list, labels } = options;
    const generateWeek = () => {
      let values = [];
      const v = list
        .map(task => {
          //creates a list with completitionTime and task end date
          const v = { time: task.completitionTime, date: task.endDate };
          return v;
        })
        .forEach(task => {
          //then group the elements by date
          const taskDate = new Date(task.date).toLocaleDateString("es-MX", {
            day: "numeric",
            month: "short"
          });
          if (values[taskDate]) {
            values[taskDate] += task.time;
          } else {
            values[taskDate] = task.time;
          }
        });
      let generatedValues = [];

      //To create a list for each day of the week and assign the time values
      labels.forEach((label, i) => {
        if (values[label]) {
          //if a label matches with values index asign the value
          generatedValues[i] = Math.floor(values[label] / 60); //to set value minutes
        } else {
          generatedValues[i] = 0;
        }
      });
      return generatedValues;
    };
    switch (period) {
      case "week":
        return generateWeek();
        break;
      default:
        return [];
    }
  };

  const graph = useRef(null);
  //See https://www.chartjs.org/docs/latest/charts/line.html for more info

  const config = {
    type: "line",
    data: {
      labels: generateLabels("week"), //To generateLabes for the week days
      datasets: [
        {
          label: "Minutos Invertidos",
          data: generateValues({
            list,
            period: "week",
            group: "minutes",
            labels: generateLabels("week")
          }),
          fill: false,
          pointRadius: 3,
          borderColor: "#05a1ab",
          pointBorderColor: "#05a1ab",
          pointBackgroundColor: "#05a1ab",
          pointHoverBackgroundColor: "#05a1ab",
          pointHoverBorderColor: "#05a1ab",
          pointBorderWidth: 7,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 1,
          borderWidth: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: "Mi resumen semanal"
      },
      tooltips: {
        mode: "index",
        intersect: false
      },
      hover: {
        mode: "nearest",
        intersect: true
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: new Date().toLocaleDateString("es-MX", {
                month: "long"
              })
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Tiempo Invertido"
            }
          }
        ]
      }
    }
  };
  useEffect(() => {
    const filteredList = filterList.byPeriod({ list, period: "week" });
    const ctx = graph.current.getContext("2d");

    const myLineChart = new Chart(ctx, config);
  }, []);
  return (
    <div>
      <h1>Resumen Semanal</h1>
      <div className="stats-graph">
        <canvas ref={graph}></canvas>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  list: state.list.data.tasks
});
export default connect(mapStateToProps, null)(Statistics);
