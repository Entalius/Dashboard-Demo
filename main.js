$(document).ready(function () {
    var ctxSimData = document.getElementById('simDataChart').getContext('2d');
    var simDataChart = new Chart(ctxSimData, {
        type: 'line', // or 'bar', 'pie', etc.
        data: {}
    });

    var ctxNumberData = document.getElementById('numberDataChart').getContext('2d');
    var numberDataChart = new Chart(ctxNumberData, {
        type: 'line', // or 'bar', 'pie', etc.
        data: {}
    });

    $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab

        switch (target) {
            case '#simData':
                $.get('/sim_data', function (data, status) {
                    simDataChart.data = processData(data);
                    simDataChart.update();
                });
                break;
            case '#numberData':
                $.get('/number_data', function (data, status) {
                    numberDataChart.data = processData(data);
                    numberDataChart.update();
                });
                break;
        }
    });

    function processData(data) {
        return {
            labels: data.map(item => item.name),
            datasets: [{
                data: data.map(item => item.value),
                backgroundColor: data.map(() => getRandomColor()),
                borderColor: data.map(() => getRandomColor()),
                borderWidth: 1
            }]
        };
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
