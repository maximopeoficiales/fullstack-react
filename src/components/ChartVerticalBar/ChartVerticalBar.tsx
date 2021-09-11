import { Bar } from "react-chartjs-2";

interface MyProps {
  dataSet: any;
}
const ChartVerticalBar = (props: MyProps) => {
  const { dataSet } = props;
  if (!dataSet) return <h2>No hay data que mostrar</h2>;

  const data = {
    labels: Object.keys(dataSet),
    datasets: [
      {
        label: "# of Clients",
        data: Object.values(dataSet),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
      <div className="header">
        <h3 className="title">Number of clients with a certain letter</h3>
      </div>
      <Bar data={data} options={options} />
    </>
  );
};

export default ChartVerticalBar;
