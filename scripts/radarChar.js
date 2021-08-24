Chart.defaults.scale.ticks.color = '#fff';
Chart.defaults.borderColor = '#fff';
Chart.defaults.color = '#fff';

new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
        labels: ["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012"],
        datasets: [
            {
                label: "Rossi",
                fill: true,
                backgroundColor: "rgba(252,234,13,0.2)",
                borderColor: "rgba(252,234,13,1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(252,234,13,1)",
                data: [66, 174, 198, 208, 249, 325, 295, 237, 163]
        }, {
                label: "Marquez",
                fill: true,
                backgroundColor: "rgba(216,136,42,0.2)",
                borderColor: "rgba(216,136,42,1)",
                pointBorderColor: "#000",
                pointBackgroundColor: "rgba(216,136,42,1)",
                data: [0, 420, 321, 298, 298, 242, 362, 334]
        }, {
                label: "Dovizioso",
                fill: true,
                backgroundColor: "rgba(121,22,23,0.4)",
                borderColor: "rgba(121,22,23,1)",
                pointBorderColor: "#000",
                pointBackgroundColor: "rgba(121,22,23,1)",
                data: [135, 269, 245, 261, 171, 162, 187, 140, 218

]
        }, {
                label: "Pedrosa",
                fill: true,
                backgroundColor: "rgba(43,48,115,0.4)",
                borderColor: "rgba(43,48,115,1)",
                pointBorderColor: "#000",
                pointBackgroundColor: "rgba(43,48,115,1)",
                data: [, , 117, 210, 155, 206, 246, 300, 332
]
        }, {
                label: "Lorenzo",
                fill: true,
                backgroundColor: "rgba(129,53,138,0.4)",
                borderColor: "rgba(129,53,138,1)",
                pointBorderColor: "#000",
                pointBackgroundColor: "rgba(129,53,138,1)",
                data: [, 28, 134, 137, 233, 330, 263, 330, 350]
        }
      ]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    color: 'white',
                    font: {
                        size: 14,
                        family: 'Poppins'
                    }
                }
            }
        },

        title: {
            display: true,
            text: 'Crashes from 2012 till 2020'
        }
    }
});


new Chart(document.getElementById("radar-chart2"), {
    type: 'radar',
    data: {
        labels: ["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012"],
        datasets: [
            {
                label: "Rossi",
                fill: true,
                backgroundColor: "rgba(252,234,13,0.2)",
                borderColor: "rgba(252,234,13,1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(252,234,13,1)",
                borderDash: [5],
                data: [6, 8, 8, 4, 4, 2, 5, 4, 6
]
        }, {
                label: "Marquez",
                fill: true,
                backgroundColor: "rgba(216,136,42,0.2)",
                borderColor: "rgba(216,136,42,1)",
                pointBorderColor: "#000",
                pointBackgroundColor: "rgba(216,136,42,1)",
                borderDash: [5],
                data: [2, 14, 23, 27, 17, 13, 11, 15
]
        }, {
                label: "Dovizioso",
                fill: true,
                backgroundColor: "rgba(121,22,23,0.4)",
                borderColor: "rgba(121,22,23,1)",
                pointBorderColor: "#000",
                pointBackgroundColor: "rgba(121,22,23,1)",
                borderDash: [5],
                data: [4, 4, 5, 6, 6, 6, 4, 3, 5


]
        }, {
                label: "Pedrosa",
                fill: true,
                backgroundColor: "rgba(43,48,115,0.4)",
                borderColor: "rgba(43,48,115,1)",
                pointBorderColor: "#000",
                pointBackgroundColor: "rgba(43,48,115,1)",
                borderDash: [5],
                data: [, , 9, 9, 10, 3, 6, 6, 6

]
        }, {
                label: "Lorenzo",
                fill: true,
                backgroundColor: "rgba(129,53,138,0.4)",
                borderColor: "rgba(129,53,138,1)",
                pointBorderColor: "#000",
                pointBackgroundColor: "rgba(129,53,138,1)",
                borderDash: [5],
                data: [, , 6, 9, 11, 3, 2, 3, 5
]
        }
      ]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    color: 'white',
                    font: {
                        size: 14,
                        family: 'Poppins'
                    }
                }
            }
        },

        title: {
            display: true,
            text: 'Championship points 2010 till 2020'
        }
    }
});
let smooth = false;
let propagate = false;

const actions = [
  {
    name: 'Randomize',
    handler(chart) {
      inputs.from = [];
      chart.data.datasets.forEach(dataset => {
        dataset.data = generateData();
      });
      chart.update();
    }
  },
  {
    name: 'Propagate',
    handler(chart) {
      propagate = !propagate;
      chart.options.plugins.filler.propagate = propagate;
      chart.update();

    }
  },
  {
    name: 'Smooth',
    handler(chart) {
      smooth = !smooth;
      chart.options.elements.line.tension = smooth ? 0.4 : 0;
      chart.update();
    }
  }
];