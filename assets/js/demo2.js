//FWD RATE
/*
4           3.24495                3.14682  3.29219  2.82661  2.67933  2.88456  1.52853  1.4396   1.58049
8           5.01196                4.78616  5.06734  4.17372  4.03499  4.28639  2.21312  1.6241   2.37832
16          7.23228                6.9019   7.31302  5.67736  5.46201  5.7714   3.34953  2.51962  3.51801
32          9.24816                8.95462  9.35858  7.02191  6.55901  7.19177  4.45765  3.2605   4.82417
64          10.8663                10.7254  10.9288  8.15868  7.88315  8.33741  5.9033   5.68906  6.0357
128         11.8343                11.5804  11.9212  8.847    8.70941  8.91207  6.72634  6.40685  6.89803
256         12.2389                11.7613  12.3482  9.09093  8.78208  9.27999  7.21139  6.96276  7.35334
512         12.3715                12.088   12.4768  8.84517  8.12873  9.35297  7.41631  6.98604  7.67054
768         11.9525                11.6299  12.0415  9.04423  8.7268   9.16982  7.63206  7.29354  7.73944
*/


var vlibsize = [4,8,16,32,64,128,256,512,768];
// For drawing the lines
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



var ctx = document.getElementById("fwdRate");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: vlibsize,
    datasets: [
      { 
        data: xc,
	label: "XC",
	borderColor: "#111199",
      },
      { 
        data: ip,
	label: "IP",
	borderColor: "#991111",
      },
      { 
        data: mix,
	label: "MIX",
	borderColor: "#339933",
      }
    ]
  },
  options: {
     legend: {
            display: true,
            labels: {
                fontSize: 32
            },
            position: 'right'
        },
     scales: {
        yAxes: [{
            ticks: {
                fontSize: 40
            },
            scaleLabel: {
              display: true,
              labelString: 'Forwarding Rate [MPPS]',
	      fontSize: 32
            }
        }],
        xAxes: [{
            ticks: {
                fontSize: 40
            },
            scaleLabel: {
              display: true,
              labelString: 'Maximum Vector Size [packets]',
	      fontSize: 32
            }
        }]
    }
  }

});




var ctx2 = document.getElementById("ipp");
var myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: vlibsize,
    datasets: [
      { 
        data: xc_ipp,
  label: "XC",
  borderColor: "#111199",
      },
      { 
        data: ip_ipp,
  label: "IP",
  borderColor: "#991111",
      },
      { 
        data: mix_ipp,
  label: "MIX",
  borderColor: "#339933",
      }
    ]
  },
  options: {
     legend: {
            display: true,
            labels: {
                fontSize: 32
            },
            position: 'right'
        },
     scales: {
        yAxes: [{
            ticks: {
                fontSize: 40
            },
            scaleLabel: {
              display: true,
              labelString: 'Instructions per packet',
        fontSize: 32
            }
        }],
        xAxes: [{
            ticks: {
                fontSize: 40
            },
            scaleLabel: {
              display: true,
              labelString: 'Maximum Vector Size [packets]',
        fontSize: 32
            }
        }]
    }
  }

});


var ctx3 = document.getElementById("icache");
var myChart3 = new Chart(ctx3, {
  type: 'line',
  data: {
    labels: vlibsize,
    datasets: [
      { 
        data: xc_mpi,
  label: "XC",
  borderColor: "#111199",
      },
      { 
        data: ip_mpi,
  label: "IP",
  borderColor: "#991111",
      },
      { 
        data: mix_mpi,
  label: "MIX",
  borderColor: "#339933",
      }
    ]
  },
  options: {
     legend: {
            display: true,
            labels: {
                fontSize: 32
            },
            position: 'right'
        },
     scales: {
        yAxes: [{
            ticks: {
                fontSize: 40
            },
            scaleLabel: {
              display: true,
              labelString: 'Instruction cache miss rate [%]',
        fontSize: 32
            }
        }],
        xAxes: [{
            ticks: {
                fontSize: 40
            },
            scaleLabel: {
              display: true,
              labelString: 'Maximum Vector Size [packets]',
        fontSize: 32
            }
        }]
    }
  }

});

var ctx4 = document.getElementById("ipc");
var myChart4 = new Chart(ctx4, {
  type: 'line',
  data: {
    labels: vlibsize,
    datasets: [
      { 
        data: xc_ipc,
  label: "XC",
  borderColor: "#111199",
      },
      { 
        data: ip_ipc,
  label: "IP",
  borderColor: "#991111",
      },
      { 
        data: mix_ipc,
  label: "MIX",
  borderColor: "#339933",
      }
    ]
  },
  options: {
     legend: {
            display: true,
            labels: {
                fontSize: 32
            },
            position: 'right'
        },
     scales: {
        yAxes: [{
            ticks: {
                fontSize: 40
            },
            scaleLabel: {
              display: true,
              labelString: 'Instructions per clock cycle',
        fontSize: 32
            }
        }],
        xAxes: [{
            ticks: {
                fontSize: 40
            },
            scaleLabel: {
              display: true,
              labelString: 'Maximum Vector Size [packets]',
        fontSize: 32
            }
        }]
    }
  }

});