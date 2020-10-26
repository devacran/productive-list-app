import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { filterList } from "../utils/filterList";
import Chart from "chart.js";
const Statistics = props => {
  const { list } = props;
  const generateLabels = period => {
    const todayDate = new Date();
    const generateWeek = () => {
      let labels = [];
      for (let i = 0; i < 7; i++) {
        // const d = todayDate.setDate(todayDate.getDate() - 1);
        let d;
        if (i === 0) {
          d = todayDate.setDate(todayDate.getDate());
        } else {
          d = todayDate.setDate(todayDate.getDate() - 1);
        }
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
  const generateValues = (options = {}) => {
    const { period, list, labels } = options;
    const generateWeek = () => {
      let values = [];
      const v = list
        .map(task => {
          const v = { time: task.completitionTime, date: task.endDate };
          return v;
        })
        .forEach(task => {
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
      labels.forEach((label, i) => {
        if (values[label]) {
          generatedValues[i] = values[label];
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
          label: "Tiempo Invertido",
          data: generateValues({
            list,
            period: "week",
            labels: generateLabels("week")
          }),
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
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
    console.log("lista filtrada en grafica", filteredList);
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
