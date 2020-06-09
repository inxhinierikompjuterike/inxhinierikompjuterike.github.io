

    var chrome, firefox, opera, internetexplorer, safari, others;

    $.ajax({
       type: 'GET',
       url: 'https://api.countapi.xyz/get/analytics/chrome',
       async: false,
       data:"",
       success: function(response){
         chrome = response.value;
       },
       error: function() {
          alert("Your error message goes here");
       }
    });

    $.ajax({
       type: 'GET',
       url: 'https://api.countapi.xyz/get/analytics/firefox',
       async: false,
       data:"",
       success: function(response){
         firefox = response.value;
       },
       error: function() {
          alert("Your error message goes here");
       }
    });

    $.ajax({
       type: 'GET',
       url: 'https://api.countapi.xyz/get/analytics/opera',
       async: false,
       data:"",
       success: function(response){
         opera = response.value;
       },
       error: function() {
          alert("Your error message goes here");
       }
    });

    $.ajax({
       type: 'GET',
       url: 'https://api.countapi.xyz/get/analytics/opera',
       async: false,
       data:"",
       success: function(response){
         opera = response.value;
       },
       error: function() {
          alert("Your error message goes here");
       }
    });

    $.ajax({
       type: 'GET',
       url: 'https://api.countapi.xyz/get/analytics/safari',
       async: false,
       data:"",
       success: function(response){
         safari = response.value;
       },
       error: function() {
          alert("Your error message goes here");
       }
    });

    $.ajax({
       type: 'GET',
       url: 'https://api.countapi.xyz/get/analytics/internetexplorer',
       async: false,
       data:"",
       success: function(response){
         internetexplorer = response.value;
       },
       error: function() {
          alert("Your error message goes here");
       }
    });

    $.ajax({
       type: 'GET',
       url: 'https://api.countapi.xyz/get/analytics/others',
       async: false,
       data:"",
       success: function(response){
         others = response.value;
       },
       error: function() {
          alert("Your error message goes here");
       }
    });


      let myChart = document.getElementById('myChart').getContext('2d');

      // Global Options
      Chart.defaults.global.defaultFontFamily = 'Lato';
      Chart.defaults.global.defaultFontSize = 18;
      Chart.defaults.global.defaultFontColor = '#777';

      let massPopChart = new Chart(myChart, {
        type:'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:{
          labels:['Chrome', 'Firefox', 'Opera', 'Safari', 'Internet Explorer', 'Others'],
          datasets:[{
            label:'Browsers',
            data:[
/*
              chrome,
              firefox,
              opera,
              safari,
              internetexplorer,
              others
              */
              chrome,firefox,opera,safari,internetexplorer,others
            ],
            //backgroundColor:'green',
            backgroundColor:[
              'rgba(17, 132, 159, 0.9)',
              'rgba(15, 160, 95, 0.9)',
              'rgba(255, 88, 88, 0.9)',
              'rgba(55, 67, 84, 0.9)',
              'rgba(20, 162, 206, 0.8)',
              'rgba(14, 210, 197, 0.8)'
            ],
            borderWidth:2,
            borderColor:'#fff',
            hoverBorderWidth:3,
            hoverBorderColor:'#343836'
          }]
        },
        options:{
          title:{
            display:true,
            text:'Browsers Usage',
            fontSize:25
          },
          legend:{
            display:true,
            position:'right',
            labels:{
              fontColor:'#343836'
            }
          },
          layout:{
            padding:{
              left:30,
              right:0,
              bottom:0,
              top:0
            }
          },
          tooltips:{
            enabled:true
          }
        }
      });


//Chart Unique vs Return

var uniq, ret;

$.ajax({
 type: 'GET',
 url: 'https://api.countapi.xyz/get/analitycs/uniquevisitor',
 async: false,
 data:"",
 success: function(response){
   uniq = response.value;
 },
 error: function() {
    alert("Your error message goes here");
 }
});

$.ajax({
 type: 'GET',
 url: 'https://api.countapi.xyz/get/analitycs/returnvisitor',
 async: false,
 data:"",
 success: function(response){
   ret = response.value;
 },
 error: function() {
    alert("Your error message goes here");
 }
});

      let myChart1 = document.getElementById('myChart1').getContext('2d');

        let massPopChart1 = new Chart(myChart1, {
          type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
          data:{
            labels:['Unique Visitors', 'Return Visitors'],
            datasets:[{
              label:'Visitors',
              data:[
                uniq,
                ret
              ],
              //backgroundColor:'green',
              backgroundColor:[
                'rgba(255, 88, 88, 0.9)',
                'rgba(17, 132, 159, 0.9)'
              ],
              borderWidth:4,
              borderColor:'#fff',
              hoverBorderWidth:3,
              hoverBorderColor:'#343836'
            }]
          },
          options:{
            title:{
              display:true,
              text:'Unique vs Return Visitors',
              fontSize:25
            },
            legend:{
              display:true,
              position:'right',
              labels:{
                fontColor:'#343836'
              }
            },
            layout:{
              padding:{
                left:30,
                right:0,
                bottom:0,
                top:0
              }
            },
            tooltips:{
              enabled:true
            }
          }
        })

//Chart Device

var computer, mobile, tablet;

$.ajax({
 type: 'GET',
 url: 'https://api.countapi.xyz/get/analytics/computer',
 async: false,
 data:"",
 success: function(response){
   computer = response.value;
 },
 error: function() {
    alert("Your error message goes here");
 }
});

$.ajax({
 type: 'GET',
 url: 'https://api.countapi.xyz/get/analytics/tablet',
 async: false,
 data:"",
 success: function(response){
   tablet = response.value;
 },
 error: function() {
    alert("Your error message goes here");
 }
});

$.ajax({
 type: 'GET',
 url: 'https://api.countapi.xyz/get/analytics/mobile',
 async: false,
 data:"",
 success: function(response){
   mobile = response.value;
 },
 error: function() {
    alert("Your error message goes here");
 }
});


      let myChart2 = document.getElementById('myChart2').getContext('2d');

        let massPopChart2 = new Chart(myChart2, {
          type:'polarArea', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
          data:{
            labels:['Computer', 'Mobile', 'Tablet'],
            datasets:[{
              label:'Devices',
              data:[
                computer,
                mobile,
                tablet
              ],
              //backgroundColor:'green',
              backgroundColor:[
                'rgba(255, 88, 88, 0.9)',
                'rgba(17, 132, 159, 0.9)',
                'rgba(55, 67, 84, 0.9)'
              ],
              borderWidth:4,
              borderColor:'#fff',
              hoverBorderWidth:3,
              hoverBorderColor:'#343836'
            }]
          },
          options:{
            title:{
              display:true,
              text:'Device Usage',
              fontSize:25
            },
            legend:{
              display:true,
              position:'right',
              labels:{
                fontColor:'#343836'
              }
            },
            layout:{
              padding:{
                left:30,
                right:0,
                bottom:0,
                top:0
              }
            },
            tooltips:{
              enabled:true
            }
          }
        })

/*         
  // Chart Example 
  
  let myChart3 = document.getElementById('myChart3').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart3 = new Chart(myChart3, {
type:'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
  labels:['Unique', 'Return'],
  datasets:[{
    label:'Visitors',
    data:[
      uniq,ret
    ],
    //backgroundColor:'green',
    backgroundColor:[
      'rgba(17, 132, 159, 0.9)',
      'rgba(15, 160, 95, 0.9)'
    ],
    borderWidth:2,
    borderColor:'#fff',
    hoverBorderWidth:3,
    hoverBorderColor:'#343836'
  }]
},
options:{
  title:{
    display:true,
    text:'Unique vs Return Visitors',
    fontSize:25
  },
  legend:{
    display:true,
    position:'right',
    labels:{
      fontColor:'#343836'
    }
  },
  layout:{
    padding:{
      left:30,
      right:0,
      bottom:0,
      top:0
    }
  },
  tooltips:{
    enabled:true
  }
}
});
*/
