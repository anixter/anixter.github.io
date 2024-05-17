const releaseTotalsByYear = document.getElementById('releaseTotalsByYear');

    new Chart(releaseTotalsByYear, {
      type: 'bar',
      data: {
        labels: ['2020','2021','2022', '2023', '2024'],
        datasets: [{
          label: 'Pages',
          data: [5390250,52083961,33148922,35310168,7923313],
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

    const totalDollarsSentERP = document.getElementById('totalDollarsSentERP');

    new Chart(totalDollarsSentERP, {
      type: 'bar',
      data: {
        labels: ['Ford Blue Oval', 'Magnolia', 'Tesla Cranbury', 'Tesla Orlando', 'Tesla Reno', 'Tesla Aslip'],
        datasets: [{
          label: 'Pages',
          data: [5245898,2471755,1259647,1085411,927190,828057],
          backgroundColor: [
            '#EAC435',
            '#345995',
            '#03CEA4',
            '#FB4D3D',
            '#CA1551',
            '#FF5A5F'
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

    const sentVsOrdered = document.getElementById('sentVsOrdered');

    new Chart(sentVsOrdered, {
      type: 'pie',
      data: {
        labels: ['Sent', 'Ordered'],
        datasets: [{
          label: '',
          data: [11817961,11376957],
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

    const top5CustomersSent = document.getElementById('top5CustomersSent');

    new Chart(top5CustomersSent, {
      type: 'doughnut',
      data: {
        labels: ['Ford Blue Oval', 'Magnolia', 'Tesla Orlando', 'Tesla Cranbury', 'Tesla Reno'],
        datasets: [{
          label: '',
          data: [5245898,2471755,1085411,1259647,927190],
          backgroundColor: [
            '#EAC435',
            '#345995',
            '#03CEA4',
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
    display: true
   }
  }
 }
    });

        const top5Releases = document.getElementById('top5Releases');

    new Chart(top5Releases, {
      type: 'doughnut',
      data: {
        labels: ['SUB Cranbury', 'SUB Reno', 'SUB Aslip', 'SUB Orlando', 'SUB Houston'],
        datasets: [{
          label: '',
          data: [207,145,139,133,111],
          backgroundColor: [
            '#4059AD',
            '#6B9AC4',
            '#97D8C4',
            '#D7EEE6',
            '#F4B942'
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

    const top5NewProjects = document.getElementById('top5NewProjects');

    new Chart(top5NewProjects, {
      type: 'pie',
      data: {
        labels: ['Ford BOSK', 'Giga Factory Texas', 'Skouries Project', 'West Rock Longview'],
        datasets: [{
          label: '',
          data: [0,0,0,0,750],
          backgroundColor: [
            '#4059AD',
            '#6B9AC4',
            '#D7EEE6',
            '#F4B942'
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

        const totalSentYearbyYear = document.getElementById('totalSentYearbyYear');

    new Chart(totalSentYearbyYear, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May','June','July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [

          
        {
          label: '2023',
          data: [1630944, 1393492, 2035756,2156530,6262659,7956014,1489707,1907633,1404598,2878640,5463775,1325826],
          fill: true,
          borderColor: '#003f5c'
        },

         {
          label: '2024',
          data: [1763131, 1901947, 1751026,5471810],
          fill: true,
          borderColor: '#FB4D3D'
        }

        

        ]
      },
      
    });


     const biggestMonths = document.getElementById('biggestMonths');

    new Chart(biggestMonths, {
      type: 'doughnut',
      data: {
        labels: ['June', 'May', 'November', 'October', 'April'],
        datasets: [{
          label: '',
          data: [7956014,6262659,5463775,2878640,2156530],
          backgroundColor: [
            '#4059AD',
            '#6B9AC4',
            '#97D8C4',
            '#D7EEE6',
            '#F4B942'
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

    const lowestMonths = document.getElementById('lowestMonths');

    new Chart(lowestMonths, {
      type: 'pie',
      data: {
        labels: ['December', 'February', 'September', 'July', 'January'],
        datasets: [{
          label: '',
          data: [1325826,1393492,1404598,1489707,1630944],
          backgroundColor: [
            '#EAC435',
            '#345995',
            '#03CEA4',
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
    display: true
   }
  }
 }
    });


     