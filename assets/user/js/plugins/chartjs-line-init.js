/*======== 16. ANALYTICS - ACTIVITY CHART ========*/
var activity = document.getElementById("activity");
if (activity !== null) {
  var activityData = [
    {
      first: [35, 65, 52, 115, 98, 185, 125, 35, 65, 52, 115, 140],
      second: [40, 105, 92, 155, 138, 205, 165, 35, 65, 52, 115, 110],
    },
    // {
    //     first: [0, 65, 77, 33, 49, 100, 100],
    //     second: [20, 85, 97, 53, 69, 120, 120],
    // },
    // {
    //     first: [0, 40, 77, 55, 33, 116, 50],
    //     second: [30, 70, 107, 85, 73, 146, 80],
    // },
    // {
    //     first: [0, 44, 22, 77, 33, 151, 99],
    //     second: [60, 32, 120, 55, 19, 134, 88],
    // },
  ];

  activity.height = 100;

  var config = {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Income",
          backgroundColor: "rgba(22, 82, 240, 0.75)",
          borderColor: "transparent",
          data: activityData[0].first,
          lineTension: 0,
          pointRadius: 0,
          borderWidth: 2,
        },
        {
          label: "Expenses",
          backgroundColor: "rgba(22, 82, 240, 0.5)",
          borderColor: "transparent",
          data: activityData[0].second,
          lineTension: 0,
          // borderDash: [10, 5],
          borderWidth: 1,
          pointRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            stacked: true,
            barPercentage: 0.45,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              fontColor: "#8a909d",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "#eee",
            },
            ticks: {
              stepSize: 50,
              fontColor: "#8a909d",
            },
          },
        ],
      },
      tooltips: {
        mode: "index",
        intersect: false,
        titleFontColor: "#888",
        bodyFontColor: "#555",
        titleFontSize: 12,
        bodyFontSize: 15,
        backgroundColor: "rgba(256,256,256,0.95)",
        displayColors: true,
        xPadding: 10,
        yPadding: 7,
        borderColor: "rgba(220, 220, 220, 0.9)",
        borderWidth: 2,
        caretSize: 6,
        caretPadding: 5,
      },
    },
  };

  var ctx = document.getElementById("activity").getContext("2d");
  var myLine = new Chart(ctx, config);

  var items = document.querySelectorAll("#user-activity .btn");
  items.forEach(function (item, index) {
    item.addEventListener("click", function () {
      config.data.datasets[0].data = activityData[index].first;
      config.data.datasets[1].data = activityData[index].second;
      myLine.update();
    });
  });
}
