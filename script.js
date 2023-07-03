$(document).ready(function() {
    fetch('/sim_data')
        .then(response => response.json())
        .then(data => createChart('simDataChart', 'Sim Data', data));

    fetch('/number_data')
        .then(response => response.json())
        .then(data => createChart('numberDataChart', 'Number Data', data));

    fetch('/filtered_scheduler_data')
        .then(response => response.json())
        .then(data => createSchedulerDataTable(data));
});

function createChart(chartId, title, data) {
    const ctx = document.getElementById(chartId).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(item => item.Status),
            datasets: [{
                label: title,
                data: data.map(item => item["Total Amount"]),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
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
}

function createSchedulerDataTable(data) {
    let tableHTML = `<table class="table table-striped">
        <thead>
            <tr>
                <th>Name of the Task</th>
                <th>What is Done</th>
                <th>Scheduler Started</th>
                <th>Scheduler Completed</th>
                <th>Time in MS</th>
                <th>Scheduler ran for</th>
                <th>Message</th>
                <th>Error</th>
                <th>Run Every</th>
                <th>Runs</th>
            </tr>
        </thead>
        <tbody>`;

    for (let item of data) {
        tableHTML += `<tr>
            <td>${item["Name of the Task"]}</td>
            <td>${item["What is Done"]}</td>
            <td>${item["Scheduler Started"]}</td>
            <td>${item["Scheduler Completed"]}</td>
            <td>${item["Time in MS"]}</td>
            <td>${item["Scheduler ran for"]}</td>
            <td>${item["Message"]}</td>
            <td>${item["Error"]}</td>
            <td>${item["Run Every"]}</td>
            <td>${item["Runs"]}</td>
        </tr>`;
    }

    tableHTML += '</tbody></table>';

    $('#schedulerData').html(tableHTML);
}
