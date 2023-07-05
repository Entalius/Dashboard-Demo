let selectedCategories = [];
let selectedStatuses = [];

window.onload = function() {
    const categoryDropdown = document.getElementById('category');
    const statusDropdown = document.getElementById('status');
    const resetButton = document.getElementById('reset');
    const categoryBtn = document.getElementById('categoryBtn');
    const statusBtn = document.getElementById('statusBtn');

    categoryBtn.addEventListener('click', function(e) {
        e.preventDefault();
        categoryDropdown.classList.toggle('show');
    });

    statusBtn.addEventListener('click', function(e) {
        e.preventDefault();
        statusDropdown.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(e) {
        if (!e.target.matches('.dropbtn')) {
            const dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    });

    categoryDropdown.addEventListener('click', function(e) {
        e.preventDefault();
        const value = e.target.getAttribute('data-value');
        if (value && !selectedCategories.includes(value)) {
            selectedCategories.push(value);
            categoryBtn.textContent = selectedCategories.join(', ');
            updateTable();
        }
    });

    statusDropdown.addEventListener('click', function(e) {
        e.preventDefault();
        const value = e.target.getAttribute('data-value');
        if (value && !selectedStatuses.includes(value)) {
            selectedStatuses.push(value);
            statusBtn.textContent = selectedStatuses.join(', ');
            updateTable();
        }
    });

    resetButton.addEventListener('click', resetFilters);

    updateTable();
};

function updateTable() {
    fetch('/sim_data')
        .then(response => response.json())
        .then(data => {
            let filteredData = data;

            if (selectedCategories.length > 0) {
                filteredData = filteredData.filter(item => selectedCategories.includes(item.Category));
            }

            if (selectedStatuses.length > 0) {
                filteredData = filteredData.filter(item => selectedStatuses.includes(item.Status));
            }

            const tableBody = document.getElementById('simDataTable').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = '';

            filteredData.forEach(item => {
                const row = tableBody.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                const cell3 = row.insertCell(2);

                cell1.textContent = item.Status;
                cell2.textContent = item.Category;
                cell3.textContent = item['Total Amount'];
            });
        })
        .catch(error => console.error('Error:', error));
}

function resetFilters() {
    selectedCategories = [];
    selectedStatuses = [];
    document.getElementById('categoryBtn').textContent = 'Select Category';
    document.getElementById('statusBtn').textContent = 'Select Status';
    updateTable();
}