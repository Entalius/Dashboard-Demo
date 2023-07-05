let selectedCategories = [];
let selectedStatuses = [];
let selectedMsisdnCategories = [];
let selectedMsisdnStatuses = [];
let selectedSchedulers = []; // Added for Scheduler

window.onload = function() {
    const categoryDropdown = document.getElementById('category');
    const statusDropdown = document.getElementById('status');
    const resetButton = document.getElementById('reset');
    const categoryBtn = document.getElementById('categoryBtn');
    const statusBtn = document.getElementById('statusBtn');

    const msisdnCategoryDropdown = document.getElementById('msisdnCategory');
    const msisdnStatusDropdown = document.getElementById('msisdnStatus');
    const msisdnResetButton = document.getElementById('msisdnReset');
    const msisdnCategoryBtn = document.getElementById('msisdnCategoryBtn');
    const msisdnStatusBtn = document.getElementById('msisdnStatusBtn');

    const schedulerDropdown = document.getElementById('schedulerDropdown'); // Added for Scheduler
    const schedulerResetButton = document.getElementById('schedulerReset'); // Added for Scheduler
    const schedulerBtn = document.getElementById('schedulerBtn'); // Added for Scheduler

    categoryBtn.addEventListener('click', function(e) {
        e.preventDefault();
        categoryDropdown.classList.toggle('show');
    });

    statusBtn.addEventListener('click', function(e) {
        e.preventDefault();
        statusDropdown.classList.toggle('show');
    });

    msisdnCategoryBtn.addEventListener('click', function(e) {
        e.preventDefault();
        msisdnCategoryDropdown.classList.toggle('show');
    });

    msisdnStatusBtn.addEventListener('click', function(e) {
        e.preventDefault();
        msisdnStatusDropdown.classList.toggle('show');
    });

    schedulerBtn.addEventListener('click', function(e) { // Added for Scheduler
        e.preventDefault();
        schedulerDropdown.classList.toggle('show');
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

    msisdnCategoryDropdown.addEventListener('click', function(e) {
        e.preventDefault();
        const value = e.target.getAttribute('data-value');
        if (value && !selectedMsisdnCategories.includes(value)) {
            selectedMsisdnCategories.push(value);
            msisdnCategoryBtn.textContent = selectedMsisdnCategories.join(', ');
            updateMsisdnTable();
        }
    });

    msisdnStatusDropdown.addEventListener('click', function(e) {
        e.preventDefault();
        const value = e.target.getAttribute('data-value');
        if (value && !selectedMsisdnStatuses.includes(value)) {
            selectedMsisdnStatuses.push(value);
            msisdnStatusBtn.textContent = selectedMsisdnStatuses.join(', ');
            updateMsisdnTable();
        }
    });

    schedulerDropdown.addEventListener('click', function(e) { // Added for Scheduler
        e.preventDefault();
        const value = e.target.getAttribute('data-value');
        if (value && !selectedSchedulers.includes(value)) {
            selectedSchedulers.push(value);
            schedulerBtn.textContent = selectedSchedulers.join(', ');
            updateSchedulerTable();
        }
    });

    resetButton.addEventListener('click', resetFilters);
    msisdnResetButton.addEventListener('click', resetMsisdnFilters);
    schedulerResetButton.addEventListener('click', resetSchedulerFilters); // Added for Scheduler

    updateTable();
};

function updateTable() {
    // same as before
}

function updateMsisdnTable() {
    // same as before
}

function updateSchedulerTable() { // Added for Scheduler
    fetch('/scheduler_data')
        .then(response => response.json())
        .then(data => {
            let filteredData = data;

            if (selectedSchedulers.length > 0) {
                filteredData = filteredData.filter(item => selectedSchedulers.includes(item.Scheduler));
            }

            const tableBody = document.getElementById('schedulerDataTable').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = '';

            filteredData.forEach(item => {
                const row = tableBody.insertRow();
                // Fill your row cells based on your data structure
            });
        })
        .catch(error => console.error('Error:', error));
}

function resetFilters() {
    // same as before
}

function resetMsisdnFilters() {
    // same as before
}

function resetSchedulerFilters() { // Added for Scheduler
    selectedSchedulers = [];
    document.getElementById('schedulerBtn').textContent = 'Select Scheduler';
    updateSchedulerTable();
}

document.querySelector('.hamburger-menu').addEventListener('click', function(){
    document.getElementById('mySidenav').style.width = '250px';
});

document.querySelector('.closebtn').addEventListener('click', function(){
    document.getElementById('mySidenav').style.width = '0';
});

document.getElementById('sim').addEventListener('click', function(){
    document.getElementById('simContent').style.display = 'block';
    document.getElementById('msisdnContent').style.display = 'none';
    document.getElementById('schedulerContent').style.display = 'none'; // Added for Scheduler
});

document.getElementById('msisdn').addEventListener('click', function(){
    document.getElementById('msisdnContent').style.display = 'block';
    document.getElementById('simContent').style.display = 'none';
    document.getElementById('schedulerContent').style.display = 'none'; // Added for Scheduler
    fetchNumberData(); // Fetch the data when the MSISDN menu item is clicked
});

document.getElementById('scheduler').addEventListener('click', function(){ // Added for Scheduler
    document.getElementById('schedulerContent').style.display = 'block';
    document.getElementById('simContent').style.display = 'none';
    document.getElementById('msisdnContent').style.display = 'none';
    fetchSchedulerData(); 
});

document.addEventListener('click', function(event) {
    var isClickInside = document.getElementById('mySidenav').contains(event.target) || document.querySelector('.hamburger-menu').contains(event.target);

    if (!isClickInside) {
        document.getElementById('mySidenav').style.width = '0';
    }
});

function fetchNumberData() {
    // same as before
}

function fetchSchedulerData() { // Added for Scheduler
    fetch('/scheduler_data')
        .then(response => response.json())
        .then(data => {
            const schedulerDropdown = document.getElementById('schedulerDropdown');
            const schedulers = [...new Set(data.map(item => item.Scheduler))];

            schedulerDropdown.innerHTML = '';

            schedulers.forEach(scheduler => {
                const a = document.createElement('a');
                a.setAttribute('href', '#');
                a.setAttribute('data-value', scheduler);
                a.textContent = scheduler;
                schedulerDropdown.appendChild(a);
            });

            updateSchedulerTable();
        })
        .catch(error => console.error('Error:', error));
}
