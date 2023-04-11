document.addEventListener("DOMContentLoaded", function () {
    const lineChartElement = document.getElementById("lineChart");
    const barChartElement = document.getElementById("barChart");
    const pieChartElement = document.getElementById("pieChart");
  
    const lineChart = new Chart(lineChartElement, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Sales",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    });
  
    const barChart = new Chart(barChartElement, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Revenue",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  
    const pieChart = new Chart(pieChartElement, {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "Dataset 1",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
          },
        ],
      },
    });
  
    const menuButton1 = document.querySelector("#headingOne button");
    const menuButton2 = document.querySelector("#headingTwo button");
    const menuButton3 = document.querySelector("#headingThree button");
  
    menuButton1.addEventListener("click", () => {
      lineChartElement.style.display = "block";
      barChartElement.style.display = "none";
      pieChartElement.style.display = "none";
    });
  
    menuButton2.addEventListener("click", () => {
      lineChartElement.style.display = "none";
      barChartElement.style.display = "block";
      pieChartElement.style.display = "none";
    });
  
    menuButton3.addEventListener("click", () => {
        lineChartElement.style.display = "none";
        barChartElement.style.display = "none";
        pieChartElement.style.display = "block";
      });
    
      // Initialize with the line chart visible and others hidden
      lineChartElement.style.display = "block";
      barChartElement.style.display = "none";
      pieChartElement.style.display = "none";
    });
    