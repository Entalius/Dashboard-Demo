window.addEventListener('DOMContentLoaded', function() {
    const msisdnOverviewLink = document.getElementById('msisdn-overview-link');
    const mainContainer = document.querySelector('.main');
    const chartContainer = document.getElementById('chart-container');
  
    msisdnOverviewLink.addEventListener('click', async function (event) {
        event.preventDefault();
      
        if (chartContainer.style.display === 'none') {
          chartContainer.style.display = 'block';
        } else {
          chartContainer.style.display = 'none';
        }
      
        mainContainer.innerHTML = `
        <div class="card mb-4">
        <div class="card-header">MSISDN overview</div>
        <div class="card-body">
          <div class="filter-container">
            <form id="filter-form">
              <div class="form-group">
                <label for="status-select">Status:</label>
                <select class="form-control" id="status-select" multiple>
                  <option value="" disabled>Select status</option>
                  <!-- Add the unique status options here -->
                </select>
              </div>
              <div class="form-group">
                <label for="category-select">Category:</label>
                <select class="form-control" id="category-select" multiple>
                  <option value="" disabled>Select category</option>
                  <!-- Add the unique category options here -->
                </select>
              </div>
              <button type="submit" class="btn btn-primary">Filter</button>
              <button class="btn btn-secondary" id="reset-filters">Reset Filters</button>
            </form>
          </div>
          <div class="chart-wrapper">
            <canvas id="msisdnChart"></canvas>
          </div>
        </div>
      </div>
        `;
      
        const response = await fetch('/number_data');
        const data = await response.json();
        const uniqueStatuses = [...new Set(data.map((item) => item.Status))];
        const uniqueCategories = [...new Set(data.map((item) => item.Category))];
        populateFilterOptions(uniqueStatuses, uniqueCategories);
        const chartData = processData(data);
      
        const ctx = document.getElementById('msisdnChart').getContext('2d');
        const msisdnChart = new Chart(ctx, {
          type: 'doughnut',
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              position: 'bottom',
            },
          },
        });
      
        const filterForm = document.getElementById('filter-form');
        filterForm.addEventListener('submit', async function (event) {
            event.preventDefault();
          
            const statusFilters = Array.from(document.getElementById('status-select').selectedOptions).map(option => option.value);
            const categoryFilters = Array.from(document.getElementById('category-select').selectedOptions).map(option => option.value);
          
            const filteredData = data.filter(item => {
              const statusMatch = !statusFilters.length || statusFilters.includes(item.Status);
              const categoryMatch = !categoryFilters.length || categoryFilters.includes(item.Category);
              return statusMatch && categoryMatch;
            });
          
            const chartData = processData(filteredData);
            msisdnChart.data = chartData;
            msisdnChart.update();
          });
      });
      const resetFiltersButton = document.getElementById('reset-filters');
resetFiltersButton.addEventListener('click', function () {
  const statusSelect = document.getElementById('status-select');
  const categorySelect = document.getElementById('category-select');

  for (const option of statusSelect.options) {
    option.selected = false;
  }
  for (const option of categorySelect.options) {
    option.selected = false;
  }

  const chartData = processData(data);
  msisdnChart.data = chartData;
  msisdnChart.update();
});

});

function populateFilterOptions(statuses, categories) {
    const statusSelect = document.getElementById('status-select');
    const categorySelect = document.getElementById('category-select');
  
    statuses.forEach(status => {
      const option = document.createElement('option');
      option.value = status;
      option.text = status;
      statusSelect.add(option);
    });
  
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.text = category;
      categorySelect.add(option);
    });
  }
  

function processData(data) {
    const categoryMap = {};

    data.forEach((item) => {
        if (categoryMap[item.Category]) {
            categoryMap[item.Category] += item['Total Amount'];
        } else {
            categoryMap[item.Category] = item['Total Amount'];
        }
    });

    const chartData = {
        labels: Object.keys(categoryMap),
        datasets: [
            {
                data: Object.values(categoryMap),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            }
        ]
    };

    return chartData;
}


const filterForm = document.getElementById('filter-form');
filterForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  const statusFilter = document.getElementById('status-select').value;
  const categoryFilter = document.getElementById('category-select').value;
  const filteredData = data.filter(item => {
    const statusMatch = !statusFilter || item.Status === statusFilter;
    const categoryMatch = !categoryFilter || item.Category === categoryFilter;
    return statusMatch && categoryMatch;
  });

  const chartData = processData(filteredData);
  msisdnChart.data = chartData;
  msisdnChart.update();
});


async function fetchData() {
    try {
      const response = await fetch('/number_data');
      const data = await response.json();
      // Process and update the chart with the fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  
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