const devicesUsed = document.getElementById('devicesUsed');

    new Chart(devicesUsed, {
      type: 'pie',
      data: {
        labels: ['Desktop', 'Mobile'],
        datasets: [{
          label: '',
          data: [41,1],
          backgroundColor: [
            '#087E8B',
            '#FF5A5F'
          ],
          borderWidth: 1

        },

        
        ]
      },
      options: {
  plugins:{
   legend: {
    display: true
   }
  }
 }
    });

    const totalTimeOnSite = document.getElementById('totalTimeOnSite');

    new Chart(totalTimeOnSite, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May','June','July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [

          
        {
          label: '2024',
          data: [16, 12, 17,24,23,0,0,0,0,0,0,0],
          fill: true,
          borderColor: '#003f5c'
        }

        

        ]
      },
      
    });

    const browserUsage = document.getElementById('browserUsage');

    new Chart(browserUsage, {
      type: 'doughnut',
      data: {
        labels: ['Chrome', 'Edge', 'Firefox'],
        datasets: [{
          label: '',
          data: [27,13,2],
          backgroundColor: [
            '#4059AD',
            '#db6b30',
            '#97D8C4'
          ],
          borderWidth: 1

        },

        
        ]
      },
      options: {
  plugins:{
   legend: {
    display: true
   }
  }
 }
    });

    const totalTimeOnAppPerMonth = document.getElementById('totalTimeOnAppPerMonth');

    new Chart(totalTimeOnAppPerMonth, {
      type: 'bar',
      data: {
        labels: ['January','Feburary','March', 'April', 'May'],
        datasets: [{
          label: 'Pages',
          data: [16,12,17,32,31],
          backgroundColor: [
            '#4059AD',
            '#6B9AC4',
            '#97D8C4',
            '#FB4D3D',
            '#CA1551'
          ],
          borderWidth: 1

        },

        
        ]
      },
      options: {
  plugins:{
   legend: {
    display: false
   }
  }
 }
    });

    const mostActiveDays = document.getElementById('mostActiveDays');

    new Chart(mostActiveDays, {
      type: 'bar',
      data: {
        labels: ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
          label: 'Pages',
          data: [8,9,16,23,20,12,0],
          backgroundColor: [
            '#4059AD',
            '#6B9AC4',
            '#345995',
            '#03CEA4',
            '#FB4D3D',
            '#CA1551',
            '#FB4D3D'
          ],
          borderWidth: 1

        },

        
        ]
      },
      options: {
  plugins:{
   legend: {
    display: false
   }
  }
 }
    });