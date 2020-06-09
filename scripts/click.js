var clicks;

$('#counter').click(function() {
  numberOfClicksSession++;
  numberOfClicks++;
  localStorage.setItem('on_load_clicks',numberOfClicks);
  sessionStorage.setItem('session_clicks',numberOfClicksSession);
  $.ajax({
    type: 'GET',
    url: 'https://api.countapi.xyz/update/analitycs/clicks/?amount=1',
    async: false,
    data:"",
    success: function(response){
      clicks = response.value;
    },
    error: function() {
       alert("Your error message goes here");
    }
  });
  $.ajax({
    type: 'GET',
    url: 'https://api.countapi.xyz/get/analitycs/clicks',
    async: false,
    data:"",
    success: function(response){
      clicks = response.value;
    },
    error: function() {
       alert("Your error message goes here");
    }
  });
  
  $('.count').html(numberOfClicksSession);
  $('.avg').html(Math.round((numberOfClicks/sessionNumber) * 10)/ 10);
  $('.avgClicks').html(Math.round((clicks/nrsession) * 10)/ 10);
  
});

$.ajax({
  type: 'GET',
  url: 'https://api.countapi.xyz/get/analitycs/clicks',
  async: false,
  data:"",
  success: function(response){
    clicks = response.value;
  },
  error: function() {
     alert("Your error message goes here");
  }
});

$('.count').html(numberOfClicksSession);
$('.avg').html(Math.round((numberOfClicks/sessionNumber) * 10)/ 10);
$('.avgClicks').html(Math.round((clicks/nrsession) * 10)/ 10);

