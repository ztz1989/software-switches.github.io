var xc = [3.24, 5.01, 7.23, 9.25, 10.86, 11.83, 12.24, 12.37, 11.95];
var ip = [2.82, 4.17, 5.68, 7.02, 8.15, 8.86, 9.09, 8.84, 9.04];
var mix = [1.53, 2.21, 3.34, 4.46, 5.90, 6.72, 7.21, 7.41, 7.5];


var xc_ipp = [1663.479000,1076.935000,773.832500,622.618800,548.090100,512.015900,494.027100,485.029900,489.400600]
var mix_ipp = [3830.083000,2735.082000,1837.811000,1485.687000,1185.448000,1089.762000,1042.083000,1018.840000,1017.401000]
var ip_ipp = [2106.531000,1430.595000,1114.516000,924.567900,830.653600,785.088900,762.312500,750.791900,754.254700]

var xc_mpi = [0.02970,0.05010,0.07150,0.05360,0.03920,0.02900,0.01860,0.01830,0.01230]
var ip_mpi = [0.18910,0.23040,0.23070,0.18380,0.15520,0.15910,0.12820,0.08390,0.05910]
var mix_mpi = [0.09200,0.08290,0.09240,0.07580,0.05430,0.04630,0.03360,0.02510,0.01840]


var xc_ipc = [1.711,1.707,1.766,1.820,1.874,1.907,1.909,1.889,1.845]
var ip_ipc = [1.721,1.740,1.833,1.879,1.968,1.987,2.001,1.930,1.964]
var mix_ipc = [1.701,1.718,1.750,1.874,2.024,2.113,2.183,2.183,2.236]

xc_fwdmax = Math.max(...xc)
ip_fwdmax = Math.max(...ip)
mix_fwdmax = Math.max(...mix)

xc_ippmax = Math.max(...xc_ipp)
ip_ippmax = Math.max(...ip_ipp)
mix_ippmax = Math.max(...mix_ipp)

xc_mpimax = Math.max(...xc_mpi)
ip_mpimax = Math.max(...ip_mpi)
mix_mpimax = Math.max(...mix_mpi)

xc_ipcmax = Math.max(...xc_ipc)
ip_ipcmax = Math.max(...ip_ipc)
mix_ipcmax = Math.max(...mix_ipc)


console.log("pippo" + xc_fwdmax)


var data = {
      labels: ["FWD RATE","Instruction per clock cycle","Instruction per packet","L1 miss rate"],
      datasets: [{
        borderColor: "#882222",
        data: [xc[4]/xc_fwdmax, xc_ipc[4]/xc_ipcmax, xc_ipp[4]/xc_ippmax, xc_mpi[4]/xc_mpimax],
        label: 'XC'
      }, {
        borderColor: "#555511",
        data: [ip[4]/ip_fwdmax, ip_ipc[4]/ip_ipcmax, ip_ipp[4]/ip_ippmax, ip_mpi[4]/ip_mpimax],
        label: 'IP',
        fill: '-1'
      }, {
        borderColor: "#551199",
        data: [mix[4]/mix_fwdmax, mix_ipc[4]/mix_ipcmax, mix_ipp[4]/mix_ippmax, mix_mpi[4]/mix_mpimax],
        label: 'MIX',
        fill: 1
      }]
    };

    var options = {
      maintainAspectRatio: true,
      spanGaps: false,
      elements: {
        line: {
          tension: 0.000001
        }
      }
    };

var ctx = document.getElementById("radar");
var chart = new Chart(ctx, {
      type: 'radar',
      data: data,
      options: options
    });


function updateVal(){

    var value = $( 'input[name=vlibsize]:checked' ).val();
    console.log(value);

  chart.data.datasets[0].data = [xc[value]/xc_fwdmax, xc_ipc[value]/xc_ipcmax, xc_ipp[value]/xc_ippmax, xc_mpi[value]/xc_mpimax];
  chart.data.datasets[1].data= [ip[value]/ip_fwdmax, ip_ipc[value]/ip_ipcmax, ip_ipp[value]/ip_ippmax, ip_mpi[value]/ip_mpimax];
  chart.data.datasets[2].data= [mix[value]/mix_fwdmax, mix_ipc[value]/mix_ipcmax, mix_ipp[value]/mix_ippmax, mix_mpi[value]/mix_mpimax];
  chart.update();
}


//myBarChart.datasets[0].bars[2].value = 50;
//myBarChart.update();




/*
var initBarData = {
            labels: ['Pippo', 'Pippo2'],
            datasets: [{
                label: 'Dataset 1',
                data: [
                    xc[4], xc_ipc[4]
                ]
            }]
        };


var ctx = document.getElementById("bar1");
var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: initBarData,
    options: {
                    // Elements options apply to all of the options unless overridden in a dataset
                    // In this case, we are setting the border of each horizontal bar to be 2px wide
                    elements: {
                        rectangle: {
                            borderWidth: 1,
                        }
                    },
                    responsive: true,
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Horizontal Bar Chart'
                    }
                }
    });
*/



    

/*
Highcharts.chart('container', {

    chart: {
        polar: true
    },

    title: {
        text: 'Highcharts Polar Chart'
    },

    pane: {
        startAngle: 45,
        endAngle: 405
    },

    xAxis: {
        tickInterval: 45,
        min: 0,
        max: 360,
        labels: {
            formatter: function () {
                return this.value + '°';
            }
        }
    },

    yAxis: {
        min: 0
    },

    plotOptions: {
        series: {
            pointStart: 0,
            pointInterval: 45
        },
        column: {
            pointPadding: 0,
            groupPadding: 0
        }
    },

    series: [{
        type: 'area',
        name: 'Area',
        data: [xc[4], xc_ipc[4], xc_ipp[4], xc_mpi[4]]
    }]

});

*/

/*

  var
    colors = Highcharts.getOptions().colors,
    each = Highcharts.each,
    series = [{
      yAxis: 0,
      data: [10, 20, 30]
    }, {
      yAxis: 1,
      data: [1, 2, 3]
    }, {
      yAxis: 2,
      data: [4, 2, 1]
    }, {
      yAxis: 3,
      data: [5, 1, 3]
    }, {
      yAxis: 4,
      data: [2, 3, 4]
    }],
    yAxis = [],
    panes = [],
    startAngle = 0;

  each(series, function(serie, i) {
    yAxis.push({
      pane: i,
      showLastLabel: true,
      gridLineWidth: i === 0 ? true : false,
      labels: {
        useHTML: true,
        formatter: function() {
          return '<span style="color:' + colors[i] + '">' + this.value + '</span>';
        }
      }
    });

    panes.push({
      startAngle: startAngle
    });

    startAngle += 72;
  });

  // Parse the data from an inline table using the Highcharts Data plugin
  $('#container').highcharts({
    chart: {
      polar: true,
      type: 'line'
    },

    title: {
      text: 'Wind rose for South Shore Met Station, Oregon'
    },

    subtitle: {
      text: 'Source: or.water.usgs.gov'
    },

    pane: panes,

    legend: {
      align: 'right',
      verticalAlign: 'top',
      y: 100,
      layout: 'vertical'
    },

    xAxis: {
      tickmarkPlacement: 'on'
    },

    yAxis: yAxis,

    series: series
  });

  */