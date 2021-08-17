  // SETUP BLOCK

  //maybe delete this part
  const dataValue2008 = [83, 53, 48, 30, 76, 38, 50, 54, , 37, 26, 33, , , 61, 37, , , , 61, 9, 61, 75, 45, , , , , , ];
  const dataValue2009 = [40, 96, 25, 21, 43, 24, 38, 63, , 20, 41, 37, , , 42, 13, , , , 45, 14, 31, 49, , , , , , , ];
  const dataValue2010 = [21, 42, 46, 36, 46, 45, 38, 58, , 43, 40, 49, , 43, 37, 31, , 42, , 70, 8, 130, , , , , , , , ];
  const dataValue2011 = [69, 47, 54, 38, 50, 71, 45, 51, , 25, 71, 54, , 31, 78, 37, , 49, , 45, 11, 68, , , , , , , , ];
  const dataValue2012 = [54, 93, 35, 70, 49, 59, 55, 42, , 50, 49, 55, , 68, 48, 32, , 47, , 45, 14, 40, , , , , , , , ];
  const dataValue2013 = [50, 68, 55, 66, 55, 53, 38, 61, , 42, 53, 52, , 40, 52, 34, 46, 50, , 37, 11, , , , , , , , , ];
  const dataValue2014 = [44, 51, 52, 109, 71, 45, 71, 64, , 33, 67, 46, , 59, 38, 49, 56, 42, 36, 48, , , , , , , , , , ];
  const dataValue2015 = [52, 78, 51, 60, 47, 59, 71, 65, , 44, 47, 59, , 44, 39, 39, 71, 79, 25, 46, , , , , , , , , , ];
  const dataValue2016 = [49, 68, 53, 55, 90, 63, 84, 81, , 34, 69, 51, 34, 47, 79, 48, 44, 68, 45, , , , , , , , , , , ];
  const dataValue2017 = [71, 94, 42, 140, 86, 62, 87, 44, , 28, 64, 64, 50, 37, 91, 42, 62, 32, 30, , , , , , , , , , , ];
  const dataValue2018 = [155, 109, 100, 75, 69, 56, 53, 52, 51, 47, 46, 44, 39, 36, 34, 31, 30, 30, 20, , , , , , , , , , , ];
  const dataValue2019 = [57, 90, 73, 69, 73, 57, 49, 41, 45, 40, 50, 49, 34, 15, 55, 51, 42, 36, 45, , , , , , , , , , , ];
  const dataValue2020 = [47, 100, 64, 55, , 42, , , , , , 46, 36, 40, , 27, , , , , , , , , 32, 61, 61, 40, 36, 35];

  //actual Data part
  const Valencia = [83, 40, 21, 69, 54, 50, 44, 52, 49, 71, 155, 57, 47];
  const LeMans = [53, 96, 42, 47, 93, 68, 51, 78, 68, 94, 109, 90, 100];
  const Barcelona = [48, 25, 46, 54, 35, 55, 52, 51, 53, 42, 100, 73, 64];
  const Misano = [30, 21, 36, 38, 70, 66, 109, 60, 55, 140, 75, 69, 55];
  const PhillipIsland = [76, 43, 46, 50, 49, 55, 71, 47, 90, 86, 69, 73, ];
  const Jerez = [38, 24, 45, 71, 59, 53, 45, 59, 63, 62, 56, 57, 42];
  const Motegi = [50, 38, 38, 45, 55, 38, 71, 71, 84, 87, 53, 49, ];
  const Sachsenring = [54, 63, 58, 51, 42, 61, 64, 65, 81, 44, 52, 41, ];
  const BuriramThailand = [, , , , , , , , , , , 51, 45, ];
  const Mugello = [, 37, 20, 43, 25, 50, 42, 33, 44, 34, 28, 47, 40, ];
  const Sepang = [, 26, 41, 40, 71, 49, 53, 67, 47, 69, 64, 46, 50, ];
  const Brno = [, 33, 37, 49, 54, 55, 52, 46, 59, 51, 64, 44, 49, 46];
  const Spielberg = [, , , , , , , , , 34, 50, 39, 34, 36];
  const Aragon = [, , , 43, 31, 68, 40, 59, 44, 47, 37, 36, 15, 40];
  const Assen = [, 61, 42, 37, 78, 48, 52, 38, 39, 79, 91, 34, 55, ];
  const Quatar = [, 37, 13, 31, 37, 32, 34, 49, 39, 48, 42, 31, 51, 27];
  const Texas = [, , , , , , 46, 56, 71, 44, 62, 30, 42, ];
  const Silverstone = [, , , 42, 49, 47, 50, 42, 79, 68, 32, 30, 36, ];
  const TermasdeRíoHondoArgentinia = [, , , , , , , 36, 25, 45, 30, 20, 45, ];
  const Indianapolis = [, 61, 45, 70, 45, 45, 37, 48, 46, , , , , ];
  const LagunaSeca = [, 9, 14, 8, 11, 14, 11, , , , , , , ];
  const Estoril = [, 61, 31, 130, 68, 40, , , , , , , , ];
  const DoningtonPark = [, 75, 49, , , , , , , , , , , ];
  const Shanghai = [, 45, , , , , , , , , , , , ];
  const AlgarvePortugal = [, , , , , , , , , , , , , 32];
  const CircuitRicardoTormo = [, , , , , , , , , , , , , 61];
  const Misano2 = [, , , , , , , , , , , , , 61];
  const Jerez2 = [, , , , , , , , , , , , , 40];
  const Aragon2 = [, , , , , , , , , , , , , 36];
  const Spielberg2 = [, , , , , , , , , , , , , 35];



  const years = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]


//changing default font color of scale to white
  Chart.defaults.scale.ticks.color = '#fff';


  const labels = [
            'Valencia', 'Le Mans', 'Barcelona', 'Misano', 'Phillip Island', 'Jerez', 'Motegi', 'Sachsenring', 'Buriram', 'Mugello', 'Sepang', 'Brno', 'Austria', 'Aragon', 'Assen', 'Quatar', 'Texas', 'Silverstone', 'Termas de Rio Hondo', 'Indianapolis', 'Laguna Seca', 'Estoril', 'Donington Park', 'Shanghai', 'Algarve', 'Ricardo Tormo', 'Misano 2', 'Jerez 2', 'Aragon 2', 'Spielberg 2'
        ];


  const data = {
      labels: years,
      datasets: [{
              label: labels[0],
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: Valencia,
                },
          {
              label: labels[1],
              backgroundColor: 'rgb(25, 25, 132)',
              borderColor: 'rgb(25, 25, 132)',
              data: LeMans,
                },
          {
              label: labels[2],
              backgroundColor: 'rgb(66, 25, 66)',
              borderColor: 'rgb(66, 25, 66)',
              data: Barcelona,
                },
          {
              label: labels[3],
              backgroundColor: 'rgb(25, 250, 132)',
              borderColor: 'rgb(25, 250, 132)',
              data: Misano,
                },
          {
              label: labels[4],
              backgroundColor: 'rgb(25, 25, 1)',
              borderColor: 'rgb(25, 25, 1)',
              data: PhillipIsland,
                },
          {
              label: labels[5],
              backgroundColor: 'rgb(25, 25, 60)',
              borderColor: 'rgb(25, 25, 60)',
              data: Jerez,
                },
          {
              label: labels[6],
              backgroundColor: 'rgb(140, 200, 58)',
              borderColor: 'rgb(140, 200, 58)',
              data: Motegi,
                },
          {
              label: labels[7],
              backgroundColor: 'rgb(30, 25, 58)',
              borderColor: 'rgb(30, 25, 58)',
              data: Sachsenring,
                },
          {
              label: labels[8],
              backgroundColor: 'rgb(5, 130, 110)',
              borderColor: 'rgb(5, 130, 110)',
              data: BuriramThailand,
                },
          {
              label: labels[9],
              backgroundColor: 'rgb(180, 25, 58)',
              borderColor: 'rgb(180, 25, 58)',
              data: Mugello,
                },
          {
              label: labels[10],
              backgroundColor: 'rgb(140, 140, 58)',
              borderColor: 'rgb(140, 140, 58)',
              data: Sepang,
                },
          {
              label: labels[11],
              backgroundColor: 'rgb(140, 25, 140)',
              borderColor: 'rgb(140, 25, 140)',
              data: Brno,
                },
          {
              label: labels[12],
              backgroundColor: 'rgb(9, 88, 58)',
              borderColor: 'rgb(9, 88, 58)',
              data: Spielberg,
                },
          {
              label: labels[13],
              backgroundColor: 'rgb(55, 3, 58)',
              borderColor: 'rgb(55, 3, 58)',
              data: Aragon,
                },
          {
              label: labels[14],
              backgroundColor: 'rgb(60, 55, 66)',
              borderColor: 'rgb(60, 55, 66)',
              data: Assen,
                },
          {
              label: labels[15],
              backgroundColor: 'rgb(33, 140, 58)',
              borderColor: 'rgb(33, 140, 58)',
              data: Quatar,
                },
          {
              label: labels[16],
              backgroundColor: 'rgb(90, 40, 58)',
              borderColor: 'rgb(90, 40, 58)',
              data: Texas,
                },
          {
              label: labels[17],
              backgroundColor: 'rgb(160, 10, 58)',
              borderColor: 'rgb(160, 10, 58)',
              data: Silverstone,
                },
          {
              label: labels[18],
              backgroundColor: 'rgb(60, 40, 90)',
              borderColor: 'rgb(60, 40, 90)',
              data: TermasdeRíoHondoArgentinia,
                },
          {
              label: labels[19],
              backgroundColor: 'rgb(18, 66, 58)',
              borderColor: 'rgb(18, 66, 58)',
              data: Indianapolis,
                },
          {
              label: labels[20],
              backgroundColor: 'rgb(60, 140, 180)',
              borderColor: 'rgb(60, 140, 180)',
              data: LagunaSeca,
                },
          {
              label: labels[21],
              backgroundColor: 'rgb(60, 4, 18)',
              borderColor: 'rgb(60, 4, 18)',
              data: Estoril,
                },
          {
              label: labels[22],
              backgroundColor: 'rgb(60, 140, 58)',
              borderColor: 'rgb(60, 140, 58)',
              data: DoningtonPark,
                },
          {
              label: labels[23],
              backgroundColor: 'rgb(60, 240, 58)',
              borderColor: 'rgb(60, 240, 58)',
              data: Shanghai,
                },
          {
              label: labels[24],
              backgroundColor: 'rgb(160, 140, 58)',
              borderColor: 'rgb(160, 140, 58)',
              data: AlgarvePortugal,
                },
          {
              label: labels[25],
              backgroundColor: 'rgb(60, 11, 158)',
              borderColor: 'rgb(60, 11, 158)',
              data: CircuitRicardoTormo,
                },
          {
              label: labels[26],
              backgroundColor: 'rgb(60, 11, 58)',
              borderColor: 'rgb(60, 11, 58)',
              data: Misano2,
                },
          {
              label: labels[27],
              backgroundColor: 'rgb(22, 140, 58)',
              borderColor: 'rgb(22, 140, 58)',
              data: Jerez2,
                },
          {
              label: labels[28],
              backgroundColor: 'rgb(60, 88, 58)',
              borderColor: 'rgb(60, 88, 58)',
              data: Aragon2,
                },
          {
              label: labels[29],
              backgroundColor: 'rgb(60, 140, 77)',
              borderColor: 'rgb(60, 140, 77)',
              data: Spielberg2,
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
                  duration: 1000,
                  easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: true
              }
          },
          scales: {

              y: { // defining min and max so hiding the dataset does not change scale range
                  
                  min: 0,
                  max: 200
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

















// test

