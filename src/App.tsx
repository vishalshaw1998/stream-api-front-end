import React from "react";
import { Link } from "react-router-dom";
import { TemperatureChart } from "./pages/temprature-chart/TemperatureChart.tsx";
import { Upload } from "./pages/upload/Upload.tsx";

/**
 * This is the homepage of the application.
 * When the user lands on the page, he sees two buttons, After clicking one, it should land on the upload page.
 * After clicking the other, it should land on the temperature chart page.
 */

const App = () => {
  return (
    <div>
      <TemperatureChart />
      <Upload />
    </div>
  );
};

export default App;
