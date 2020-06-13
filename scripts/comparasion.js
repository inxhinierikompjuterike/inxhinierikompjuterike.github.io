var chrome, firefox, safari, others, unique, ret, totalviews, computer, tablet, mobile ;
chrome = "";
firefox = "";
safari = "";
others = "";
computer = "";
mobile = "";
tablet = "";
unique = "";
ret = "";
totalviews = "";

$("#drpDownList1").change(function(){
  var pag1 = $('#drpDownList1 :selected').text();
  if (pag1 == "Website 2" || pag1 == "Website 3" || pag1 == "Choose the page")
    {
      $('#chrome1').html("");
      $('#firefox1').html("");
      $('#safari1').html("");
      $('#others1').html("");
      $('#computer1').html("");
      $('#mobile1').html("");
      $('#tablet1').html("");
      $('#unique1').html("");
      $('#return1').html("");
      $('#totalviews1').html("");
    }
  else if (pag1 == "www.inxhinierikompjuterike.github.io")
    $.fn.FetchMetrics1(1);
  else if (pag1 == "www.d2k.biz")
      $.fn.FetchMetrics2(1);
  else if (pag1 == "www.vesh-m-vesh.com")
      $.fn.FetchMetrics3(1);
});

$("#drpDownList2").change(function(){
  var pag1 = $('#drpDownList2 :selected').text();
  if (pag1 == "Website 2" || pag1 == "Website 3" || pag1 == "Choose the page")
    {
      $('#chrome2').html("");
      $('#firefox2').html("");
      $('#safari2').html("");
      $('#others2').html("");
      $('#computer2').html("");
      $('#mobile2').html("");
      $('#tablet2').html("");
      $('#unique2').html("");
      $('#return2').html("");
      $('#totalviews2').html("");
    }
  else if (pag1 == "www.inxhinierikompjuterike.github.io")
    $.fn.FetchMetrics1(2);
  else if (pag1 == "www.d2k.biz")
    $.fn.FetchMetrics2(2);
  else if (pag1 == "www.vesh-m-vesh.com")
    $.fn.FetchMetrics3(2);
});

$("#drpDownList3").change(function(){
  var pag1 = $('#drpDownList3 :selected').text();
  if (pag1 == "Website 2" || pag1 == "Website 3" || pag1 == "Choose the page")
    {
      $('#chrome3').html("");
      $('#firefox3').html("");
      $('#safari3').html("");
      $('#others3').html("");
      $('#computer3').html("");
      $('#mobile3').html("");
      $('#tablet3').html("");
      $('#unique3').html("");
      $('#return3').html("");
      $('#totalviews3').html("");
    }
  else if (pag1 == "www.inxhinierikompjuterike.github.io")
    $.fn.FetchMetrics1(3);
  else if (pag1 == "www.d2k.biz")
    $.fn.FetchMetrics2(3);
  else if (pag1 == "www.vesh-m-vesh.com")
    $.fn.FetchMetrics3(3);
});

$.fn.FetchMetrics1 = function(col) {

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics/chrome',
     async: false,
     data:"",
     success: function(response){
       chrome = response.value;
       $('#chrome'+col).html(chrome);
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
       $('#firefox'+col).html(firefox);
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
       $('#safari'+col).html(safari);
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
       $('#others'+col).html(others);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics/computer',
     async: false,
     data:"",
     success: function(response){
       computer = response.value;
       $('#computer'+col).html(computer);
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
       $('#tablet'+col).html(tablet);
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
       $('#mobile'+col).html(mobile);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analitycs/uniquevisitor',
     async: false,
     data:"",
     success: function(response){
       unique = response.value;
       $('#unique'+col).html(unique);
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
       $('#return'+col).html(ret);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analitycs/visits',
     async: false,
     data:"",
     success: function(response){
       totalviews = response.value;
       $('#totalviews'+col).html(totalviews);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  return this;
};

$.fn.FetchMetrics2 = function(col) {

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics1/chrome',
     async: false,
     data:"",
     success: function(response){
       chrome = response.value;
       $('#chrome'+col).html(chrome);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics1/firefox',
     async: false,
     data:"",
     success: function(response){
       firefox = response.value;
       $('#firefox'+col).html(firefox);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

   $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics1/safari',
     async: false,
     data:"",
     success: function(response){
       safari = response.value;
       $('#safari'+col).html(safari);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics1/others',
     async: false,
     data:"",
     success: function(response){
       others = response.value;
       $('#others'+col).html(others);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics1/computer',
     async: false,
     data:"",
     success: function(response){
       computer = response.value;
       $('#computer'+col).html(computer);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics1/tablet',
     async: false,
     data:"",
     success: function(response){
       tablet = response.value;
       $('#tablet'+col).html(tablet);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics1/mobile',
     async: false,
     data:"",
     success: function(response){
       mobile = response.value;
       $('#mobile'+col).html(mobile);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics1/uniquevisitor',
     async: false,
     data:"",
     success: function(response){
       unique = response.value;
       $('#unique'+col).html(unique);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics1/returnvisitor',
     async: false,
     data:"",
     success: function(response){
       ret = response.value;
       $('#return'+col).html(ret);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics1/visits',
     async: false,
     data:"",
     success: function(response){
       totalviews = response.value;
       $('#totalviews'+col).html(totalviews);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  return this;
};

$.fn.FetchMetrics3 = function(col) {

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics2/chrome',
     async: false,
     data:"",
     success: function(response){
       chrome = response.value;
       $('#chrome'+col).html(chrome);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics2/firefox',
     async: false,
     data:"",
     success: function(response){
       firefox = response.value;
       $('#firefox'+col).html(firefox);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

   $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics2/safari',
     async: false,
     data:"",
     success: function(response){
       safari = response.value;
       $('#safari'+col).html(safari);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics2/others',
     async: false,
     data:"",
     success: function(response){
       others = response.value;
       $('#others'+col).html(others);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics2/computer',
     async: false,
     data:"",
     success: function(response){
       computer = response.value;
       $('#computer'+col).html(computer);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics2/tablet',
     async: false,
     data:"",
     success: function(response){
       tablet = response.value;
       $('#tablet'+col).html(tablet);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics2/mobile',
     async: false,
     data:"",
     success: function(response){
       mobile = response.value;
       $('#mobile'+col).html(mobile);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics2/uniquevisitor',
     async: false,
     data:"",
     success: function(response){
       unique = response.value;
       $('#unique'+col).html(unique);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics2/returnvisitor',
     async: false,
     data:"",
     success: function(response){
       ret = response.value;
       $('#return'+col).html(ret);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  $.ajax({
     type: 'GET',
     url: 'https://api.countapi.xyz/get/analytics2/visits',
     async: false,
     data:"",
     success: function(response){
       totalviews = response.value;
       $('#totalviews'+col).html(totalviews);
     },
     error: function() {
        alert("Your error message goes here");
     }
  });

  return this;
};
