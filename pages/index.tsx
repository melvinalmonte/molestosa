import React from "react";
import type { NextPage } from "next";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { Box, Container, Flex, HStack, IconButton } from "@chakra-ui/react";
import {
  RiBarChartHorizontalLine,
  RiLineChartLine,
  RiBarChartLine,
} from "react-icons/ri";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Crenshaw Harassing Frequency.",
    },
  },
};

export const barOptions = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Crenshaw Harassing Frequency.",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const data = {
  labels,
  datasets: [
    {
      label: "2021",
      data: [2, 1, 1, 0, 2, 1, 0, 0, 2, 1, 0, 1],
      borderColor: "rgb(133, 11, 39)",
      backgroundColor: "rgba(133, 11, 39, 0.5)",
    },
  ],
};

const LINECHART = "LINECHART";
const BARCHART = "BARCHART";
const VBARCHART = "VBARCHART";
const Home: NextPage = () => {
  const [chartType, setChartType] = React.useState(LINECHART);
  return (
    <Container padding={4}>
      <Flex direction={"column"}>
        <HStack>
          <IconButton
            aria-label="line-chart"
            icon={<RiLineChartLine />}
            onClick={() => setChartType(LINECHART)}
          />
          <IconButton
            aria-label="bar-chart"
            icon={<RiBarChartHorizontalLine />}
            onClick={() => setChartType(BARCHART)}
          />
          <IconButton
            aria-label="bar-chart"
            icon={<RiBarChartLine />}
            onClick={() => setChartType(VBARCHART)}
          />
        </HStack>
        <Box>
          {chartType === LINECHART && <Line options={options} data={data} />}
          {chartType === BARCHART && <Bar options={barOptions} data={data} />}
          {chartType === VBARCHART && <Bar options={options} data={data} />}
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;
