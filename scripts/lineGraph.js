  // SETUP BLOCK

  //changing default font color of scale to white
  Chart.defaults.scale.ticks.color = '#fff';



  //actual Data part
  const Valencia = [21, 69, 54, 50, 44, 52, 49, 71, 155, 57, 47];
  const LeMans = [42, 47, 93, 68, 51, 78, 68, 94, 109, 90, 100];
  const Barcelona = [46, 54, 35, 55, 52, 51, 53, 42, 100, 73, 64];
  const Misano = [36, 38, 70, 66, 109, 60, 55, 140, 75, 69, 55];
  const PhillipIsland = [46, 50, 49, 55, 71, 47, 90, 86, 69, 73, ];
  const Jerez = [45, 71, 59, 53, 45, 59, 63, 62, 56, 57, 42];
  const Motegi = [38, 45, 55, 38, 71, 71, 84, 87, 53, 49, ];
  const Sachsenring = [58, 51, 42, 61, 64, 65, 81, 44, 52, 41, ];
  const BuriramThailand = [, , , , , , , , 51, 45, ];
  const Mugello = [43, 25, 50, 42, 33, 44, 34, 28, 47, 40, ];
  const Sepang = [40, 71, 49, 53, 67, 47, 69, 64, 46, 50, ];
  const Brno = [49, 54, 55, 52, 46, 59, 51, 64, 44, 49, 46];
  const Spielberg = [, , , , , , 34, 50, 39, 34, 36];
  const Aragon = [43, 31, 68, 40, 59, 44, 47, 37, 36, 15, 40];
  const Assen = [37, 78, 48, 52, 38, 39, 79, 91, 34, 55, ];
  const Quatar = [31, 37, 32, 34, 49, 39, 48, 42, 31, 51, 27];
  const Texas = [, , , 46, 56, 71, 44, 62, 30, 42, ];
  const Silverstone = [42, 49, 47, 50, 42, 79, 68, 32, 30, 36, ];
  const TermasdeRíoHondoArgentinia = [, , , , 36, 25, 45, 30, 20, 45, ];
  const Indianapolis = [70, 45, 45, 37, 48, 46, , , , , ];
  const LagunaSeca = [8, 11, 14, 11, , , , , , , ];
  const Estoril = [130, 68, 40, , , , , , , , ];
  const AlgarvePortugal = [, , , , , , , , , , 32];
  const CircuitRicardoTormo = [, , , , , , , , , , 61];
  const Misano2 = [, , , , , , , , , , 61];
  const Jerez2 = [, , , , , , , , , , 40];
  const Aragon2 = [, , , , , , , , , , 36];
  const Spielberg2 = [, , , , , , , , , , 35];



  const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]


  const labels = [
            'Valencia', 'Le Mans', 'Barcelona', 'Misano', 'Phillip Island', 'Jerez', 'Motegi', 'Sachsenring', 'Buriram', 'Mugello', 'Sepang', 'Brno', 'Austria', 'Aragon', 'Assen', 'Quatar', 'Texas', 'Silverstone', 'Termas de Rio Hondo', 'Indianapolis', 'Laguna Seca', 'Estoril', 'Algarve', 'Ricardo Tormo', 'Misano 2', 'Jerez 2', 'Aragon 2', 'Spielberg 2'
        ];


  const data = {
      labels: years,
      datasets: [{
              label: labels[0],
              backgroundColor: '#ff14ff',
              borderColor: '#ff14ff',
              data: Valencia,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[1],
              backgroundColor: 'rgb(25, 25, 132)',
              borderColor: 'rgb(25, 25, 132)',
              data: LeMans,
              borderWidth: '2',
              pointHoverRadius: '8',
          },
          {
              label: labels[2],
              backgroundColor: 'rgb(66, 25, 66)',
              borderColor: 'rgb(66, 25, 66)',
              data: Barcelona,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[3],
              backgroundColor: 'rgb(25, 250, 132)',
              borderColor: 'rgb(25, 250, 132)',
              data: Misano,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[4],
              backgroundColor: '#edff14',
              borderColor: '#edff14',
              data: PhillipIsland,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[5],
              backgroundColor: 'rgb(25, 25, 60)',
              borderColor: 'rgb(25, 25, 60)',
              data: Jerez,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[6],
              backgroundColor: '#F38BA0',
              borderColor: '#F38BA0',
              data: Motegi,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[7],
              backgroundColor: '#B5EAEA',
              borderColor: '#B5EAEA',
              data: Sachsenring,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[8],
              backgroundColor: 'rgb(5, 130, 110)',
              borderColor: 'rgb(5, 130, 110)',
              data: BuriramThailand,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[9],
              backgroundColor: 'rgb(180, 25, 58)',
              borderColor: 'rgb(180, 25, 58)',
              data: Mugello,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[10],
              backgroundColor: '#ff148f',
              borderColor: '#ff148f',
              data: Sepang,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[11],
              backgroundColor: 'rgb(140, 25, 140)',
              borderColor: 'rgb(140, 25, 140)',
              data: Brno,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[12],
              backgroundColor: 'rgb(9, 88, 58)',
              borderColor: 'rgb(9, 88, 58)',
              data: Spielberg,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[13],
              backgroundColor: 'rgb(55, 3, 58)',
              borderColor: 'rgb(55, 3, 58)',
              data: Aragon,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[14],
              backgroundColor: '#14dbff',
              borderColor: '#14dbff',
              data: Assen,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[15],
              backgroundColor: '#39ff14',
              borderColor: '#39ff14',
              data: Quatar,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[16],
              backgroundColor: '#ff7214',
              borderColor: '#ff7214',
              data: Texas,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[17],
              backgroundColor: 'rgb(160, 10, 58)',
              borderColor: 'rgb(160, 10, 58)',
              data: Silverstone,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[18],
              backgroundColor: 'rgb(60, 40, 90)',
              borderColor: 'rgb(60, 40, 90)',
              data: TermasdeRíoHondoArgentinia,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[19],
              backgroundColor: 'rgb(18, 66, 58)',
              borderColor: 'rgb(18, 66, 58)',
              data: Indianapolis,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[20],
              backgroundColor: 'rgb(60, 140, 180)',
              borderColor: 'rgb(60, 140, 180)',
              data: LagunaSeca,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[21],
              backgroundColor: '#caffbf',
              borderColor: '#caffbf',
              data: Estoril,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[22],
              backgroundColor: 'rgb(160, 140, 58)',
              borderColor: 'rgb(160, 140, 58)',
              data: AlgarvePortugal,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[23],
              backgroundColor: 'rgb(60, 11, 158)',
              borderColor: 'rgb(60, 11, 158)',
              data: CircuitRicardoTormo,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[24],
              backgroundColor: 'rgb(60, 11, 58)',
              borderColor: 'rgb(60, 11, 58)',
              data: Misano2,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[25],
              backgroundColor: 'rgb(22, 140, 58)',
              borderColor: 'rgb(22, 140, 58)',
              data: Jerez2,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[26],
              backgroundColor: 'rgb(60, 88, 58)',
              borderColor: 'rgb(60, 88, 58)',
              data: Aragon2,
              borderWidth: '2',
              pointHoverRadius: '8',
                },
          {
              label: labels[27],
              backgroundColor: 'rgb(60, 140, 77)',
              borderColor: 'rgb(60, 140, 77)',
              data: Spielberg2,
              borderWidth: '2',
              pointHoverRadius: '8',
                }

            ]
  };

  // CONFIG BLOCK for more details and styling
  const config = {
      type: 'line',
      data,
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

          animations: {
              tension: {
                  duration: 5000,
                  easing: 'easeOutBack',
                  from: 0.5,
                  to: 0,
                  loop: true
              }
          },
          scales: {

              y: { // defining min and max so hiding the dataset does not change scale range

                  min: 0,
                  max: 160
              }
          }

      }
  };

  // RENDER BLOCK
  var myChart = new Chart(
      document.getElementById('myChart'),
      config

  );


  //see details in console
  console.log(Chart.defaults.labels);









