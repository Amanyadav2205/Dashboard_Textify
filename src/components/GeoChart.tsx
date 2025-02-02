import { Chart } from "react-google-charts";

const data = [
    ["State", "Population"], // Header row
    ["Uttar Pradesh", 241000000],
    ["Maharashtra", 124000000],
    ["Bihar", 130000000],
    ["West Bengal", 100000000],
    ["Madhya Pradesh", 85000000],
    ["Tamil Nadu", 80000000],
    ["Rajasthan", 77000000],
];

const options = {
    region: "IN", // Focus on India
    displayMode: "regions",
    resolution: "provinces",
    colorAxis: {
      colors: ["#4A4D78", "#979AC2"], // Applying the gradient colors
    },
    backgroundColor: "#FFFFFF",
    datalessRegionColor: "#FFFFFF",
    defaultColor: "#FFFFFF",
  };

const GeoChart = () => {
  return (
    <div>
        <h1 className="font-aclonica">Map</h1>
    <div className="flex justify-center items-center">
        
      <Chart
        chartType="GeoChart"
        width="100%"
        height="170px"
        data={data}
        options={options}
      />
    </div>
    </div>
  );
};

export default GeoChart;
