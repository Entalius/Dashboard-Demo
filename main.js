function openNav() {
    document.getElementById("sideNav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("sideNav").style.width = "0";
  }
  
  document.getElementById('menuButton').addEventListener('click', function(event){
    event.stopPropagation();
    openNav();
  });
  
  document.getElementById('sideNav').addEventListener('click', function(event){
    event.stopPropagation();
  });
  
  document.addEventListener('click', closeNav);
  
  var navLinks = document.querySelectorAll('#sideNav a:not(.closebtn)');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      var target = this.dataset.target;
      var containers = document.querySelectorAll('.container');
      containers.forEach(function(container) {
        if (container.id === target) {
          container.classList.remove('d-none');
        } else {
          container.classList.add('d-none');
        }
      });
      closeNav();
    });
  });
  
  // Active Users Chart
  var ctx1 = document.getElementById('activeUsersChart').getContext('2d');
  var activeUsersChart = new Chart(ctx1, {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'Active Users',
              data: [50, 60, 70, 80, 90, 100, 110],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  
  // Monthly Revenue Chart
  var ctx2 = document.getElementById('monthlyRevenueChart').getContext('2d');
  var monthlyRevenueChart = new Chart(ctx2, {
      type: 'line',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'Monthly Revenue',
              data: [1000, 2000, 3000, 4000, 5000, 6000, 7000],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  
  // Unpaid Bills Chart
  var ctx3 = document.getElementById('unpaidBillsChart').getContext('2d');
  var unpaidBillsChart = new Chart(ctx3, {
      type: 'pie',
      data: {
          labels: ['Paid', 'Unpaid'],
          datasets: [{
              label: 'Unpaid Bills',
              data: [300, 50],
              backgroundColor: [
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(75, 192, 192, 1)',
                  'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: true
      }
  });
  
  // MSISDN Usage Chart
  var ctx4 = document.getElementById('msisdnUsageChart').getContext('2d');
  var msisdnUsageChart = new Chart(ctx4, {
      type: 'line',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'MSISDN Usage',
              data: [100, 200, 300, 400, 500, 600, 700],
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  
  // MSISDN Activation Chart
  var ctx5 = document.getElementById('msisdnActivationChart').getContext('2d');
  var msisdnActivationChart = new Chart(ctx5, {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'MSISDN Activation',
              data: [10, 20, 30, 40, 50, 60, 70],
              backgroundColor: 'rgba(255, 159, 64, 0.2)',
              borderColor: 'rgba(255, 159, 64, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  
  // MSISDN Deactivation Chart
  var ctx6 = document.getElementById('msisdnDeactivationChart').getContext('2d');
  var msisdnDeactivationChart = new Chart(ctx6, {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'MSISDN Deactivation',
              data: [5, 10, 15, 20, 25, 30, 35],
              backgroundColor: 'rgba(255, 206, 86, 0.2)',
              borderColor: 'rgba(255, 206, 86, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  
 // Remove the existing charts
document.getElementById('simCardActivationChart').remove();
document.getElementById('simCardUsageChart').remove();
document.getElementById('simCardDeactivationChart').remove();

// Create a new canvas element for the pie chart
var canvas = document.createElement('canvas');
canvas.id = 'simDataChart';
document.getElementById('simCard').appendChild(canvas);

window.onload = function() {
    // Remove the existing charts
    document.getElementById('simCardActivationChart').parentNode.remove();
    document.getElementById('simCardUsageChart').parentNode.remove();
    document.getElementById('simCardDeactivationChart').parentNode.remove();

    // Create a new canvas element for the pie chart
    var canvas = document.createElement('canvas');
    canvas.id = 'simDataChart';
    var simCardContainer = document.getElementById('simCardContainer');
    var cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card-body';
    cardBodyDiv.appendChild(canvas);
    cardDiv.appendChild(cardBodyDiv);
    simCardContainer.appendChild(cardDiv);

    window.onload = function() {
        // Remove the existing charts
        document.getElementById('simCardActivationChart').parentNode.remove();
        document.getElementById('simCardUsageChart').parentNode.remove();
        document.getElementById('simCardDeactivationChart').parentNode.remove();
    
        // Create a new canvas element for the pie chart
        var canvas = document.createElement('canvas');
        canvas.id = 'simDataChart';
    
        // Create card and card-body divs
        var cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        var cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';
    
        // Append canvas to card-body, and card-body to card
        cardBodyDiv.appendChild(canvas);
        cardDiv.appendChild(cardBodyDiv);
    
        // Get the simCardContainer and append the new card to it
        var simCardContainer = document.getElementById('simCardContainer');
        simCardContainer.appendChild(cardDiv);
    
        window.onload = function() {
            // Remove the existing charts
            document.getElementById('simCardActivationChart').parentNode.remove();
            document.getElementById('simCardUsageChart').parentNode.remove();
            document.getElementById('simCardDeactivationChart').parentNode.remove();
        
            // Create a new canvas element for the pie chart
            var canvas = document.createElement('canvas');
            canvas.id = 'simDataChart';
        
            // Create card and card-body divs
            var cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            var cardBodyDiv = document.createElement('div');
            cardBodyDiv.className = 'card-body';
        
            // Append canvas to card-body, and card-body to card
            cardBodyDiv.appendChild(canvas);
            cardDiv.appendChild(cardBodyDiv);
        
            // Get the simCardContainer and append the new card to it
            var simCardContainer = document.getElementById('simCardContainer');
            simCardContainer.appendChild(cardDiv);
        
            // Fetch the SIM data from the server
            axios.get('/sim_data')
                .then(function (response) {
                    // The data is in the response.data property
                    var simData = response.data;
        
                    // Prepare the data for the pie chart
                    var labels = simData.map(function (item) {
                        return item.Status + ' ' + item.Category;
                    });
                    var data = simData.map(function (item) {
                        return item['Total Amount'];
                    });
        
                    // Create the pie chart
                    var ctx = document.getElementById('simDataChart').getContext('2d');
                    var simDataChart = new Chart(ctx, {
                        type: 'pie',
                        data: {
                            labels: labels,
                            datasets: [{
                                data: data,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: true
                        }
                    });
                })
                .catch(function (error) {
                    console.error('Error fetching SIM data:', error);
                });
        }
        
  
  // Scheduler Tasks Chart
  var ctx10 = document.getElementById('schedulerTasksChart').getContext('2d');
  var schedulerTasksChart = new Chart(ctx10, {
      type: 'pie',
      data: {
          labels: ['Completed', 'Pending'],
          datasets: [{
              label: 'Scheduler Tasks',
              data: [80, 20],
              backgroundColor: [
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 206, 86, 1)',
                  'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: true
      }
  });
  
  // Scheduler Errors Chart
  var ctx11 = document.getElementById('schedulerErrorsChart').getContext('2d');
  var schedulerErrorsChart = new Chart(ctx11, {
      type: 'line',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'Scheduler Errors',
              data: [5, 10, 15, 20, 25, 30, 35],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  
  // Scheduler Downtime Chart
  var ctx12 = document.getElementById('schedulerDowntimeChart').getContext('2d');
  var schedulerDowntimeChart = new Chart(ctx12, {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'Scheduler Downtime',
              data: [2, 4, 6, 8, 10, 12, 14],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });