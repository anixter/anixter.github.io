const mostUsedPages = document.getElementById('mostUsedPages');

    new Chart(mostUsedPages, {
      type: 'bar',
      data: {
        labels: ['Material Release', 'Material Release Details', 'Bill of Materials', 'My Projects', 'Bill of Materials Details'],
        datasets: [{
          label: 'Number of Views',
          data: [5999,3045,1777,1743,1103],
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
    display: false
   }
  }
 }
    });

    const mostUsedFeatures = document.getElementById('mostUsedFeatures');

    new Chart(mostUsedFeatures, {
      type: 'bar',
      data: {
        labels: ['Mat Release - Lines Per Page', 'Nav Menu - BoM', 'Mat Release - Pagination Bar', 'Create New Release', 'Nav Menu - Mat Release', 'BoM - View BoM'],
        datasets: [{
          label: 'Number of Clicks',
          data: [1232,998,765,712,682,637],
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
    display: false
   }
  }
 }
    });

    const pageViewsByProductArea = document.getElementById('pageViewsByProductArea');

    new Chart(pageViewsByProductArea, {
      type: 'pie',
      data: {
        labels: ['Material Release', 'Bill of Materials', 'Project Config', 'Part Tracker', 'Reports Portal'],
        datasets: [{
          label: 'Page Views by Product Area',
          data: [9044,2880,440,369, 213],
          backgroundColor: [
            '#087E8B',
            '#FF5A5F',
            '#3C3C3C',
            '#86BBD8',
            '#C1839F'
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



       const featureClicksByProductArea = document.getElementById('featureClicksByProductArea');

    new Chart(featureClicksByProductArea, {
      type: 'pie',
      data: {
         labels: ['Material Release', 'Bill of Materials', 'Project Config', 'Part Tracker', 'Reports Portal'],
        datasets: [{
          label: 'Feature Clicks by Product Area',
          data: [6325,1507,194,557, 385],
          backgroundColor: [
            '#2F4858',
            '#33658A',
            '#86BBD8',
            '#F6AE2D',
            '#F26419'
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

           const pagesAndFeatures = document.getElementById('pagesAndFeatures');

    new Chart(pagesAndFeatures, {
      type: 'pie',
      data: {
         labels: ['Pages', 'Features'],
        datasets: [{
          label: '',
          data: [27,233],
          backgroundColor: [
            '#80ED99',
            '#33658A'
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

     const featuresPerProductArea = document.getElementById('featuresPerProductArea');

    new Chart(featuresPerProductArea, {
      type: 'pie',
      data: {
         labels: ['Material Release', 'Reports Portal', 'Bill of Materials', 'Part Tracker', 'Project Config'],
        datasets: [{
          label: '',
          data: [32,27,17,13,13],
          backgroundColor: [
            '#06AED5',
            '#086788',
            '#F0C808',
            '#FFF1D0',
            '#DD1C1A'
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