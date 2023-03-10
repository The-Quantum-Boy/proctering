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
          "#F94144", 
          "#F8961E", 
          "#F9C74F", 
          "#43AA8B", 
          "#90BE6D", 
          "#4D908E", 
          "#277DA1", 
          "#577590", 
          "#9D4EDD", 
        ],
        borderColor: [
          "#D62828", 
          "#CA6C1D", 
          "#BF9E24", 
          "#2C7A7B", 
          "#6B8E23", 
          "#2B7A78", 
          "#0B4F6C", 
          "#2C3E50", 
          "#6C3483", 
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
