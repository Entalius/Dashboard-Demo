document.addEventListener('DOMContentLoaded', function () {
    const msisdnOverviewLink = document.getElementById('msisdn-overview-link');
    const mainContainer = document.querySelector('.main');

    msisdnOverviewLink.addEventListener('click', function (event) {
        event.preventDefault();
        mainContainer.innerHTML = `
        <div class="card">
            <div class="card-body">
                <canvas id="msisdnChart"></canvas>
            </div>
        </div>`;

        const ctx = document.getElementById('msisdnChart').getContext('2d');
        const msisdnChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4'],
                datasets: [{
                    data: [10, 20, 30, 40],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#B3FF7F']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'bottom'
                }
            }
        });
    });
});


