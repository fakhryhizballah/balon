const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
                label: 'dht22',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                // tension: 0.1
            },
            {
                label: 'BME',
                data: [12, 19, 6, 15, 2, 10],
                fill: false,
                borderColor: 'rgb(75, 192, 85)',
                // tension: 0.1
            },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
const cSuhu = document.getElementById('Suhu');
const Suhu = new Chart(cSuhu, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
                label: 'dht22',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                // tension: 0.1
            },
            {
                label: 'BME',
                data: [12, 19, 6, 15, 2, 10],
                fill: false,
                borderColor: 'rgb(75, 192, 85)',
                // tension: 0.1
            },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const cHumidity = document.getElementById('Humidity');
const Humidity = new Chart(cHumidity, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
                label: 'dht22',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                // tension: 0.1
            },
            {
                label: 'BME',
                data: [12, 19, 6, 15, 2, 10],
                fill: false,
                borderColor: 'rgb(75, 192, 85)',
                // tension: 0.1
            },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});