import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ chartData }) => {
  const {
    tab_change,
    key_press,
    speakCount,
    mobileCount,
    downCount,
    leftCount,
    rightCount,
    screenCount,
    faceNotVisible,
  } = chartData;

  const data = {
    labels: [
      "Tab",
      "Key",
      "Speak",
      "Mobile",
      "Down",
      "Left",
      "Right",
      "Screen",
      "Face Not Visible",
    ],
    datasets: [
      {
        label: "Count",
        data: [
          tab_change,
          key_press,
          speakCount,
          mobileCount,
          downCount,
          leftCount,
          rightCount,
          screenCount,
          faceNotVisible,
        ],
        backgroundColor: [
          "#F94144", //tab_change
          "#F8961E", //key_press
          "#F9C74F", //speakCount
          "#43AA8B", //mobileCount
          "#90BE6D", //downCount
          "#4D908E", //leftCount
          "#277DA1", //rightCount
          "#577590", //screenCount
          "#9D4EDD", //faceNotVisible
        ],
        borderColor: [
          "#D62828", //tab_change
          "#CA6C1D", //key_press
          "#BF9E24", //speakCount
          "#2C7A7B", //mobileCount
          "#6B8E23", //downCount
          "#2B7A78", //leftCount
          "#0B4F6C", //rightCount
          "#2C3E50", //screenCount
          "#6C3483", //faceNotVisible
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ height: "400px", width: "400px" }}>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
