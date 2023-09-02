
document.getElementById('showSidebar').addEventListener('click', function () {
    var sidebar = document.querySelector('.sidebar-container');
    sidebar.classList.toggle('active');
});
var map = L.map('map').setView([20.5937, 78.9629], 5); // Coordinates for India and initial zoom level

// Add a tile layer (you can replace this with your preferred map provider)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Sample data (replace with your actual data)
const stateData = {
    labels: ['State 1', 'State 2', 'State 3', 'State 4', 'State 5'],
    datasets: [{
        label: 'Water Resources (in million cubic meters)',
        data: [500, 800, 600, 700, 900], // Replace with actual data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
    }]
};

// Function to create the bar chart
function createBarChart() {
    var ctx = document.getElementById('barChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: stateData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Call the function to create the chart when the page loads
window.onload = createBarChart;


