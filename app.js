



   var ctx1 = document.getElementById('chart1').getContext('2d');
   var chart1 = new Chart(ctx1, {
     type: 'bar',
     data: {
       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
       datasets: [{
         label: 'Revenue',
         data: [15000, 12000, 18000, 9000, 20000, 14000],
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
scales: {
yAxes: [{
ticks: {
beginAtZero: true
}
}]
}
}
});
var ctx2 = document.getElementById('chart2').getContext('2d');
var chart2 = new Chart(ctx2, {
type: 'pie',
data: {
labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'],
datasets: [{
 label: 'Top Products',
 data: [12, 19, 3, 5, 2],
 backgroundColor: [
   'rgba(255, 99, 132, 0.2)',
   'rgba(54, 162, 235, 0.2)',
   'rgba(255, 206, 86, 0.2)',
   'rgba(75, 192, 192, 0.2)',
   'rgba(153, 102, 255, 0.2)'
 ],
 borderColor: [
   'rgba(255, 99, 132, 1)',
   'rgba(54, 162, 235, 1)',
   'rgba(255, 206, 86, 1)',
   'rgba(75, 192, 192, 1)',
   'rgba(153, 102, 255, 1)'
 ],
 borderWidth: 1
}]
},
options: {
scales: {
 yAxes: [{
   ticks: {
     beginAtZero: true
   }
 }]
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
   'rgba(255, 99, 132, 0.2)',
   'rgba(54, 162, 235, 0.2)',
   'rgba(255, 206, 86, 0.2)',
   'rgba(75, 192, 192, 0.2)',
   'rgba(153, 102, 255, 0.2)',
   'rgba(255, 159, 64, 0.2)',
   'rgba(255, 99, 132, 0.2)'
 ],
 borderColor: [
   'rgba(255, 99, 132, 1)',
   'rgba(54, 162, 235, 1)',
   'rgba(255, 206, 86, 1)',
   'rgba(75, 192, 192, 1)',
   'rgba(153, 102, 255, 1)',
   'rgba(255, 159, 64, 1)',
   'rgba(255, 99, 132, 1)'
 ],
 borderWidth: 1
}]

},
options: {
scales: {
yAxes: [{
ticks: {
 beginAtZero: true
}
}]
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
scales: {
yAxes: [{
ticks: {
 beginAtZero: true
}
}]
}
}
});
