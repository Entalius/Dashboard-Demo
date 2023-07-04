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
    // chart configuration
});

// Monthly Revenue Chart
var ctx2 = document.getElementById('monthlyRevenueChart').getContext('2d');
var monthlyRevenueChart = new Chart(ctx2, {
    // chart configuration
});

// Unpaid Bills Chart
var ctx3 = document.getElementById('unpaidBillsChart').getContext('2d');
var unpaidBillsChart = new Chart(ctx3, {
    // chart configuration
});

// MSISDN Usage Chart
var ctx4 = document.getElementById('msisdnUsageChart').getContext('2d');
var msisdnUsageChart = new Chart(ctx4, {
    // chart configuration
});

// MSISDN Activation Chart
var ctx5 = document.getElementById('msisdnActivationChart').getContext('2d');
var msisdnActivationChart = new Chart(ctx5, {
    // chart configuration
});

// MSISDN Deactivation Chart
var ctx6 = document.getElementById('msisdnDeactivationChart').getContext('2d');
var msisdnDeactivationChart = new Chart(ctx6, {
    // chart configuration
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
                // chart configuration
            });
        })
        .catch(function (error) {
            console.error('Error fetching SIM data:', error);
        });
};

// Scheduler Tasks Chart
var ctx10 = document.getElementById('schedulerTasksChart').getContext('2d');
var schedulerTasksChart = new Chart(ctx10, {
    // chart configuration
});

// Scheduler Errors Chart
var ctx11 = document.getElementById('schedulerErrorsChart').getContext('2d');
var schedulerErrorsChart = new Chart(ctx11, {
    // chart configuration
});

// Scheduler Downtime Chart
var ctx12 = document.getElementById('schedulerDowntimeChart').getContext('2d');
var schedulerDowntimeChart = new Chart(ctx12, {
    // chart configuration
});
