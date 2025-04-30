const ctx = document.getElementById('myChart');

 const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'],
      datasets: [{
        label: 'Sales per day',
        data: [12, 19, 3, 5, 2, 3,18],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const catagory = document.getElementById('myCatagory');
  const data = {
    labels: [
      'Laptop',
      'TV',
      'Aircooler',
      'Shoes',
      'Shirts'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  };
  const config = {
    type: 'polarArea',
    data: data,
    options: {}
  };
  const catagoryChart = new Chart(catagory,config);
  console.log(';hi');