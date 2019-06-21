var chain_length = [1,2,3,4,5]
var names =["BESS", "FastClick", "VPP", "OVS-DPDK", "Snabb", "Netmap", "t4p4s"]

var bess_uni = [4.56, 2.49, 1.69, 0.0, 0.0]
var fastclick_uni = [2.76, 1.53, 1.14, 0.81, 0.65]
var vpp_uni = [3.13, 1.65, 1.13, 0.84, 0.70]
var ovs_uni = [2.37, 1.37, 0.83, 0.60, 0.46]
var snabb_uni = [2.91, 1.711, 1.19, 0.17, 0.17]
var netmap_uni = [4.09, 3.86, 3.06, 2.88, 2.29]
var t4p4s_uni = [2.06, 1.18, 0.82, 0.65, 0.50]

var bess_bi = [4.22, 2.34, 1.66, 0.0, 0.0]
var fastclick_bi = [3.19, 1.69, 1.10, 0.83, 0.66]
var vpp_bi = [2.85, 1.64, 1.12, 0.86, 0.69]
var ovs_bi = [1.92, 1.10, 0.76, 0.58, 0.47]
var snabb_bi = [2.94, 1.20, 0.28, 0.19, 0.07]
var netmap_bi = [2.43, 2.19, 1.61, 1.36, 1.10]
var t4p4s_bi = [2.06, 1.19, 0.82, 0.66, 0.47]

var p2p_uni_64 = [10, 10, 10, 8.05, 8.94, 5.56, 5.75]
var p2p_uni_256 = [10,10,10,10,10,10,10]
var p2p_uni_1024 = [10,10,10,10,10,10,10]

var p2p_bi_64 = [15.98, 12.10, 10.79, 7.89, 9.15, 5.62, 5.66]
var p2p_bi_256 = [20, 20, 20, 20, 20, 19.61, 18.55]
var p2p_bi_1024 = [20,20,20,20,20,20,20]

var p2v_uni_64 = [10, 6.05, 6.93, 5.14, 5.97, 5.77, 4.04]
var p2v_uni_256 = [10,10,10,10,10,10,10]
var p2v_uni_1024 = [10,10,10,10,10,10,10]

var p2v_bi_64 = [11.38, 7.97, 5.86, 5.27, 6.29, 6.03, 3.83]
var p2v_bi_256 = [20, 20, 15.72, 14.97, 15.06, 15.04, 11.39]
var p2v_bi_1024 = [20,20,20,20,20,20,20]

var v2v_uni_64 = [7.37, 4.84, 4.54, 4.03, 6.42, 10.50, 3.14]
var v2v_uni_256 = [19.54, 14.46, 11.44, 11.46, 16.56, 27.34, 9.30]
var v2v_uni_1024 = [35.33, 32.15, 23.80, 28.73, 27.98, 54.29, 24.30]

var v2v_bi_64 = [7.55, 6.24, 4.29, 3.13, 5.59, 5.91, 3.23]
var v2v_bi_256 = [16.56, 15.54, 10.42, 8.72, 12.67, 13.84, 8.83]
var v2v_bi_1024 = [35.25, 32.91, 23.39, 24.72, 26.39, 34.91, 24.30]

var lo1 = document.getElementById("loopback-uni");
var lo2 = document.getElementById("loopback-bi");

var lo3 = document.getElementById("p2p-1");
var lo4 = document.getElementById("p2p-2");

var lo5 = document.getElementById("p2v-1");
var lo6 = document.getElementById("p2v-2");

var lo7 = document.getElementById("v2v-1");
var lo8 = document.getElementById("v2v-2");

var myChart = new Chart(lo1, {
  type: 'line',
  data: {
    labels: chain_length,
    datasets: [
    	{ 
    	  data: bess_uni,
		  label: "BESS",
		  borderColor: "#111199",
    	},
		{
			data: fastclick_uni,
			label: "FastClick",
			borderColor: "#222222",	
		},
		{
			data: vpp_uni,
			label: "VPP",
			borderColor: "#991111",	
		},
		{
			data: ovs_uni,
			label: "OVS-DPDK",
			borderColor: "#129999",	
		},
		{
			data: snabb_uni,
			label: "Snabb",
			borderColor: "#729989",	
		},
		{
			data: netmap_uni,
			label: "Netmap",
			borderColor: "#527919",	
		},
		{
			data: t4p4s_uni,
			label: "t4p4s",
			borderColor: "#167917",	
		},
    ]
  },
  options: {
     legend: {
            display: true,
            labels: {
                fontSize: 12
            },
            position: 'right'
        },
     scales: {
        yAxes: [{
            ticks: {
                fontSize: 10
            },
            scaleLabel: {
              display: true,
              labelString: 'Throughput [Gbps]',
	      fontSize: 12
            }
        }],
        xAxes: [{
            ticks: {
                fontSize: 10
            },
            scaleLabel: {
              display: true,
              labelString: 'Service chain length',
	      fontSize: 12
            }
        }]
    }
  }

});


var myChart1 = new Chart(lo2, {
  type: 'line',
  data: {
    labels: chain_length,
    datasets: [
    	{ 
    	  data: bess_bi,
		  label: "BESS",
		  borderColor: "#111199",
    	},
		{
			data: fastclick_bi,
			label: "FastClick",
			borderColor: "#222222",	
		},
		{
			data: vpp_bi,
			label: "VPP",
			borderColor: "#991111",	
		},
		{
			data: ovs_bi,
			label: "OVS-DPDK",
			borderColor: "#129999",	
		},
		{
			data: snabb_bi,
			label: "Snabb",
			borderColor: "#729989",	
		},
		{
			data: netmap_bi,
			label: "Netmap",
			borderColor: "#527919",	
		},
		{
			data: t4p4s_bi,
			label: "t4p4s",
			borderColor: "#167917",	
		},
    ]
  },
  options: {
     legend: {
            display: true,
            labels: {
                fontSize: 12
            },
            position: 'right'
        },
     scales: {
        yAxes: [{
            ticks: {
                fontSize: 10
            },
            scaleLabel: {
              display: true,
              labelString: 'Throughput [Gbps]',
	      	  fontSize: 12
            }
        }],
        xAxes: [{
            ticks: {
                fontSize: 10
            },
            scaleLabel: {
              display: true,
              labelString: 'Service chain length',
	          fontSize: 12
            }
        }]
    }
  }
});


var myChart2 = new Chart(lo3, {
  type: 'bar',
  data: {
    labels: names,
    datasets: [
    	{ 
    		data: p2p_uni_64,
			label: "64B",
			borderColor: "#111199",
			backgroundColor: 'red'
    	},
		{
			data: p2p_uni_256,
			label: "256B",
			borderColor:"#234699",
			backgroundColor: 'blue'
		},
		{
			data: p2p_uni_1024,
			label: "1024B",
			borderColor:"#234699",
			backgroundColor: 'black'
		},
    ]
  },
  options: {
     legend: {
            display: true,
            labels: {
                fontSize: 12
            },
            position: 'right'
        },
     scales: {
        yAxes: [{
            ticks: {
                fontSize: 10,
				beginAtZero: true
            },
            scaleLabel: {
                display: true,
       		    labelString: 'Throughput [Gbps]',
	    		fontSize: 12
            }
        }],
        xAxes: [{
            ticks: {
                fontSize: 10
            },
            scaleLabel: {
                display: true,
                labelString: 'SUTs',
	     	    fontSize: 12
            }
        }]
    }
  }
});

var myChart3 = new Chart(lo4, {
  type: 'bar',
  data: {
    labels: names,
    datasets: [
    	{ 
    		data: p2p_bi_64,
			label: "64B",
			borderColor: "#111199",
			backgroundColor: 'red'
    	},
		{
			data: p2p_bi_256,
			label: "256B",
			borderColor:"#234699",
			backgroundColor: 'blue'
		},
		{
			data: p2p_bi_1024,
			label: "1024B",
			borderColor:"#234699",
			backgroundColor: 'black'
		},
    ]
  },
  options: {
     legend: {
            display: true,
            labels: {
                fontSize: 12
            },
            position: 'right'
        },
     scales: {
        yAxes: [{
            ticks: {
                fontSize: 10,
				beginAtZero: true
            },
            scaleLabel: {
                display: true,
       		    labelString: 'Throughput [Gbps]',
	    		fontSize: 12
            }
        }],
        xAxes: [{
            ticks: {
                fontSize: 10
            },
            scaleLabel: {
                display: true,
                labelString: 'SUTs',
	     	    fontSize: 12
            }
        }]
    }
  }
});

var myChart4 = new Chart(lo5, {
  type: 'bar',
  data: {
    labels: names,
    datasets: [
    	{ 
    		data: p2v_uni_64,
			label: "64B",
			borderColor: "#111199",
			backgroundColor: 'red'
    	},
		{
			data: p2v_uni_256,
			label: "256B",
			borderColor:"#234699",
			backgroundColor: 'blue'
		},
		{
			data: p2v_uni_1024,
			label: "1024B",
			borderColor:"#234699",
			backgroundColor: 'black'
		},
    ]
  },
  options: {
     legend: {
            display: true,
            labels: {
                fontSize: 12
            },
            position: 'right'
        },
     scales: {
        yAxes: [{
            ticks: {
                fontSize: 10,
				beginAtZero: true
            },
            scaleLabel: {
                display: true,
       		    labelString: 'Throughput [Gbps]',
	    		fontSize: 12
            }
        }],
        xAxes: [{
            ticks: {
                fontSize: 10
            },
            scaleLabel: {
                display: true,
                labelString: 'SUTs',
	     	    fontSize: 12
            }
        }]
    }
  }
});

var myChart5 = new Chart(lo6, {
  type: 'bar',
  data: {
    labels: names,
    datasets: [
    	{ 
    		data: p2v_bi_64,
			label: "64B",
			borderColor: "#111199",
			backgroundColor: 'red'
    	},
		{
			data: p2v_bi_256,
			label: "256B",
			borderColor:"#234699",
			backgroundColor: 'blue'
		},
		{
			data: p2v_bi_1024,
			label: "1024B",
			borderColor:"#234699",
			backgroundColor: 'black'
		},
    ]
  },
  options: {
     legend: {
            display: true,
            labels: {
                fontSize: 12
            },
            position: 'right'
        },
     scales: {
        yAxes: [{
            ticks: {
                fontSize: 10,
				beginAtZero: true
            },
            scaleLabel: {
                display: true,
       		    labelString: 'Throughput [Gbps]',
	    		fontSize: 12
            }
        }],
        xAxes: [{
            ticks: {
                fontSize: 10
            },
            scaleLabel: {
                display: true,
                labelString: 'SUTs',
	     	    fontSize: 12
            }
        }]
    }
  }
});


var myChart6 = new Chart(lo7, {
  type: 'bar',
  data: {
    labels: names,
    datasets: [
    	{ 
    		data: v2v_uni_64,
			label: "64B",
			borderColor: "#111199",
			backgroundColor: 'red'
    	},
		{
			data: v2v_uni_256,
			label: "256B",
			borderColor:"#234699",
			backgroundColor: 'blue'
		},
		{
			data: v2v_uni_1024,
			label: "1024B",
			borderColor:"#234699",
			backgroundColor: 'black'
		},
    ]
  },
  options: {
     legend: {
            display: true,
            labels: {
                fontSize: 12
            },
            position: 'right'
        },
     scales: {
        yAxes: [{
            ticks: {
                fontSize: 10,
				beginAtZero: true
            },
            scaleLabel: {
                display: true,
       		    labelString: 'Throughput [Gbps]',
	    		fontSize: 12
            }
        }],
        xAxes: [{
            ticks: {
                fontSize: 10
            },
            scaleLabel: {
                display: true,
                labelString: 'SUTs',
	     	    fontSize: 12
            }
        }]
    }
  }
});

var myChart7 = new Chart(lo8, {
  type: 'bar',
  data: {
    labels: names,
    datasets: [
    	{ 
    		data: v2v_bi_64,
			label: "64B",
			borderColor: "#111199",
			backgroundColor: 'red'
    	},
		{
			data: v2v_bi_256,
			label: "256B",
			borderColor:"#234699",
			backgroundColor: 'blue'
		},
		{
			data: v2v_bi_1024,
			label: "1024B",
			borderColor:"#234699",
			backgroundColor: 'black'
		},
    ]
  },
  options: {
     legend: {
            display: true,
            labels: {
                fontSize: 12
            },
            position: 'right'
        },
     scales: {
        yAxes: [{
            ticks: {
                fontSize: 10,
				beginAtZero: true
            },
            scaleLabel: {
                display: true,
       		    labelString: 'Throughput [Gbps]',
	    		fontSize: 12
            }
        }],
        xAxes: [{
            ticks: {
                fontSize: 10
            },
            scaleLabel: {
                display: true,
                labelString: 'SUTs',
	     	    fontSize: 12
            }
        }]
    }
  }
});