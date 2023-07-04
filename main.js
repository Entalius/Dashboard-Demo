let chart;

window.onload = function() {
    const categorySelect = document.getElementById('category');
    const statusSelect = document.getElementById('status');

    categorySelect.addEventListener('change', updateChart);
    statusSelect.addEventListener('change', updateChart);

    updateChart();
};

function updateChart() {
    const categorySelect = document.getElementById('category');
    const statusSelect = document.getElementById('status');

    const selectedCategories = Array.from(categorySelect.selectedOptions).map(option => option.value);
    const selectedStatuses = Array.from(statusSelect.selectedOptions).map(option => option.value);

    fetch('/sim_data')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(item => selectedCategories.includes(item.Category) && selectedStatuses.includes(item.Status));

            const labels = filteredData.map(item => item.Status + ' - ' + item.Category);
            const values = filteredData.map(item => item['Total Amount']);

            const ctx = document.getElementById('simDataChart').getContext('2d');

            if (chart) {
                chart.destroy();
            }

            chart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'SIM Card Data',
                        data: values,
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
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error:', error));
}
