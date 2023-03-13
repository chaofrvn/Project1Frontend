import axios from "axios";
import React, { useEffect, useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);
const bgColor = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
];
const borderColor = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];
export default function Chart() {
  return (
    <>
      <div style={{ display: "inline-block" }}>
        <UserChart />
        <DocChartBySubject />
        <DocChartByType />
        <DocChartBySubjectInOneType type="Tài liệu đại cương" />
        <UserLineByDate />
        <NewUserLineByDate />
        <DocLineByDate />
        <NewDocLineByDate />
      </div>
    </>
  );
}
function UserChart() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4688/overview/user").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <div style={{ width: "300px", display: "inline-block" }}>
        <Pie
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Tỉ lệ người dùng",
              },
            },
          }}
          data={{
            labels: data.map((obj) => obj.role),
            datasets: [
              {
                label: "Tài khoản",
                data: data.map((obj) => obj.number),
                backgroundColor: data.map((obj, index) => bgColor[index]),
                borderColor: data.map((obj, index) => borderColor[index]),
              },
            ],
          }}
        ></Pie>
      </div>
    </>
  );
}
function DocChartBySubjectInOneType({ type }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4688/overview/document", {
        params: { type: "subject", Type: type },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <>
      <div style={{ width: "300px", display: "inline-block" }}>
        <Pie
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Tỉ lệ tài liệu theo môn học của " + type,
              },
            },
          }}
          data={{
            labels: data.map((obj) => obj.subject),
            datasets: [
              {
                label: "Tài liệu",
                data: data.map((obj) => obj.number),
                backgroundColor: data.map((obj, index) => bgColor[index]),
                borderColor: data.map((obj, index) => borderColor[index]),
              },
            ],
          }}
        ></Pie>
      </div>
    </>
  );
}
function DocChartBySubject() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4688/overview/document", {
        params: { type: "subject" },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <>
      <div style={{ width: "300px", display: "inline-block" }}>
        <Pie
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Tỉ lệ tài liệu theo môn học",
              },
            },
          }}
          data={{
            labels: data.map((obj) => obj.subject),
            datasets: [
              {
                label: "Tài liệu",
                data: data.map((obj) => obj.number),
                backgroundColor: data.map((obj, index) => bgColor[index]),
                borderColor: data.map((obj, index) => borderColor[index]),
              },
            ],
          }}
        ></Pie>
      </div>
    </>
  );
}
function DocChartByType() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4688/overview/document", {
        params: { type: "type" },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <>
      <div style={{ width: "300px", display: "inline-block" }}>
        <Pie
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Tỉ lệ tài liệu theo loại",
              },
            },
          }}
          data={{
            labels: data.map((obj) => obj.type),
            datasets: [
              {
                label: "Tài liệu",
                data: data.map((obj) => obj.number),
                backgroundColor: data.map((obj, index) => bgColor[index]),
                borderColor: data.map((obj, index) => borderColor[index]),
              },
            ],
          }}
        ></Pie>
      </div>
    </>
  );
}
function UserLineByDate() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4688/overview/userByDate").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <></>
      <Line
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Số lượng người dùng theo thời gian",
            },
          },
        }}
        data={{
          labels: data.map((obj) => obj.date),
          datasets: [
            {
              label: " người dùng",
              data: data.map((obj) => obj.number),
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        }}
      ></Line>
    </div>
  );
}
function NewUserLineByDate() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4688/overview/userByDate").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <></>
      <Line
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Số lượng người dùng mới",
            },
          },
        }}
        data={{
          labels: data.map((obj) => obj.date),
          datasets: [
            {
              label: " người dùng",
              // data: data.map((obj, index) => {
              //   return obj.number - data[index - 1].number;
              // }),
              data: data.map((obj, index) => {
                if (index == 0) {
                  return obj.number;
                } else {
                  return obj.number - data[index - 1].number;
                }
              }),
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        }}
      ></Line>
    </div>
  );
}
function DocLineByDate() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4688/overview/documentByDate").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <></>
      <Line
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Số lượng tài liệu theo thời gian",
            },
          },
        }}
        data={{
          labels: data.map((obj) => obj.date),
          datasets: [
            {
              label: " tài liệu",
              data: data.map((obj) => obj.number),
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        }}
      ></Line>
    </div>
  );
}
function NewDocLineByDate() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4688/overview/documentByDate").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <></>
      <Line
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Số lượng tài liệu mới",
            },
          },
        }}
        data={{
          labels: data.map((obj) => obj.date),
          datasets: [
            {
              label: " tài liệu",
              // data: data.map((obj, index) => {
              //   return obj.number - data[index - 1].number;
              // }),
              data: data.map((obj, index) => {
                if (index == 0) {
                  return obj.number;
                } else {
                  return obj.number - data[index - 1].number;
                }
              }),
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        }}
      ></Line>
    </div>
  );
}
