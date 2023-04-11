document.addEventListener('DOMContentLoaded', function () {
    const lineChartElement = document.getElementById('lineChart');
    const yearFilter = document.getElementById('yearFilter');
  
    const dataByYear = {
      '2021': [5, 8, 6, 12, 10, 15, 20, 22, 25, 28, 30, 35],
      '2022': [10, 15, 12, 20, 18, 24, 30, 35, 40, 38, 45, 50],
      '2023': [15, 20, 18, 25, 22, 28, 35, 40, 45, 42, 50, 55]
    };
  
    const lineChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Data Usage (GB)',
        data: dataByYear['2022'],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
        tension: 0.4
      }]
    };
  
    const lineChartOptions = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      animation: {
        duration: 2000
      }
    };
  
    const lineChart = new Chart(lineChartElement, {
      type: 'line',
      data: lineChartData,
      options: lineChartOptions
    });
  
    yearFilter.addEventListener('change', function () {
      const selectedYear = yearFilter.value;
      lineChartData.datasets[0].data = dataByYear[selectedYear];
      lineChart.update();
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    // Existing line chart code
  
    // Bar Chart
    const barChartElement = document.getElementById('barChart');
    const barChartFilter = document.getElementById('barChartFilter');
  
    const barChartData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Voice',
          data: [100, 150, 200, 180],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        },
        {
          label: 'Data',
          data: [120, 180, 210, 170],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: 'SMS',
          data: [90, 130, 160, 140],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1
        }
      ]
    };
  
    const barChartOptions = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      animation: {
        duration: 2000
      }
    };
  
    const barChart = new Chart(barChartElement, {
      type: 'bar',
      data: barChartData,
      options: barChartOptions
    });
  
    barChartFilter.addEventListener('change', function () {
      const selectedCategory = barChartFilter.value;
      barChart.data.datasets.forEach(dataset => {
        dataset.hidden = dataset.label.toLowerCase() !== selectedCategory;
      });
      barChart.update();
    });
  
    // Pie Chart
    const pieChartElement = document.getElementById('pieChart');
    const pieChartFilter = document.getElementById('pieChartFilter');
  
    const pieChartData = {
      labels: ['Voice', 'Data', 'SMS'],
      datasets: [
        {
          data: [300, 500, 200],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }
      ]
    };
  
    const pieChartOptions = {
      animation: {
        duration: 2000
      }
    };
  
    const pieChart = new Chart(pieChartElement, {
      type: 'pie',
      data: pieChartData,
      options: pieChartOptions
    });
  
    pieChartFilter.addEventListener('change', function () {
      // Update pie chart data based on the selected month
      // Replace the values with your actual data
      pieChart.data.datasets[0].data = [Math.random() * 600, Math.random() * 600, Math.random() * 600];
      pieChart.update();
    });
  });
  