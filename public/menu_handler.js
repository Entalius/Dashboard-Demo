document.addEventListener('DOMContentLoaded', function () {
    const msisdnOverviewLink = document.getElementById('msisdn-overview-link');
    const mainContainer = document.querySelector('.main');

    msisdnOverviewLink.addEventListener('click', function (event) {
        event.preventDefault();
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
