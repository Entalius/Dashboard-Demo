
  
  var ctx1 = document.getElementById('chart1').getContext('2d');
  var chart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Revenue',
        data: [15000, 12000, 18000, 9000, 20000, 14000],
        backgroundColor: [
          'rgba(244, 67, 54, 0.7)',
          'rgba(33, 150, 243, 0.7)',
          'rgba(255, 235, 59, 0.7)',
          'rgba(0, 150, 136, 0.7)',
          'rgba(103, 58, 183, 0.7)',
          'rgba(255, 152, 0, 0.7)'
        ],
        borderColor: [
          'rgba(244, 67, 54, 1)',
          'rgba(33, 150, 243, 1)',
          'rgba(255, 235, 59, 1)',
          'rgba(0, 150, 136, 1)',
          'rgba(103, 58, 183, 1)',
          'rgba(255, 152, 0, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            display: false
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  });
  
  
  var ctx2 = document.getElementById('chart2').getContext('2d');
  var chart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'],
      datasets: [{
        label: 'Top Products',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(244, 67, 54, 0.7)',
          'rgba(33, 150, 243, 0.7)',
          'rgba(255, 235, 59, 0.7)',
          'rgba(0, 150, 136, 0.7)',
          'rgba(103, 58, 183, 0.7)'
        ],
        borderColor: [
          'rgba(244, 67, 54, 1)',
          'rgba(33, 150, 243, 1)',
          'rgba(255, 235, 59, 1)',
          'rgba(0, 150, 136, 1)',
          'rgba(103, 58, 183, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 12,
          fontStyle: 'bold',
          fontColor: '#666'
        }
      }
    }
  });
  
  var ctx3 = document.getElementById('chart3').getContext('2d');
  var chart3 = new Chart(ctx3, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
      label: 'Users',
      data: [25, 40, 30, 35, 50, 45, 60],
      backgroundColor: [
      'rgba(255, 255, 255, 0.7)'
      ],
      borderColor: [
      'rgba(3, 169, 244, 1)'
      ],
      borderWidth: 2
      }]
      },
      options: {
      scales: {
      yAxes: [{
      ticks: {
      beginAtZero: true,
      fontColor: '#666'
      },
      gridLines: {
      color: '#ccc'
      }
      }],
      xAxes: [{
      ticks: {
      fontColor: '#666'
      },
      gridLines: {
      color: '#ccc'
      }
      }]
      },
      legend: {
      display: false
      }
      }
      });
      
      var ctx4 = document.getElementById('chart4').getContext('2d');
      var chart4 = new Chart(ctx4, {
      type: 'bar',
      data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
      label: 'Sales',
      data: [100, 150, 80, 120, 200, 170],
      backgroundColor: [
      'rgba(3, 169, 244, 0.7)',
      'rgba(233, 30, 99, 0.7)',
      'rgba(63, 81, 181, 0.7)',
      'rgba(139, 195, 74, 0.7)',
      'rgba(255, 87, 34, 0.7)',
      'rgba(103, 58, 183, 0.7)'
      ],
      borderColor: [
      'rgba(3, 169, 244, 1)',
      'rgba(233, 30, 99, 1)',
      'rgba(63, 81, 181, 1)',
      'rgba(139, 195, 74, 1)',
      'rgba(255, 87, 34, 1)',
      'rgba(103, 58, 183, 1)'
      ],
      borderWidth: 1
      }]
      },
      options: {
      scales: {
      yAxes: [{
      ticks: {
      beginAtZero: true,
      fontColor: '#666'
      },
      gridLines: {
      color: '#ccc'
      }
      }],
      xAxes: [{
      ticks: {
      fontColor: '#666'
      },
      gridLines: {
      color: '#ccc'
      }
      }]
      },
      legend: {
      display: false
      }
      }
      });
