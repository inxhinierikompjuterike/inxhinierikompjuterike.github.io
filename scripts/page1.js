var page1;

page1 = sessionStorage.getItem('number_page1');
page1 = (page1 === null) ? 0 : page1;

var pages;
pages = sessionStorage.getItem('number_pages');

var pagesTotal;

if (page1 == 0){
    page1++;
    sessionStorage.setItem("number_page1", page1);
    $.ajax({
        type: 'GET',
        url: 'https://api.countapi.xyz/update/analitycs/pages/?amount=1',
        async: false,
        data:"",
        success: function(response){
        pagesTotal = response.value;
        },
        error: function() {
           alert("Your error message goes here");
        }
      });
    pages++;
    sessionStorage.setItem("number_pages", pages);
}

$.ajax({
    type: 'GET',
    url: 'https://api.countapi.xyz/get/analitycs/pages',
    async: false,
    data:"",
    success: function(response){
    pagesTotal = response.value;
    },
    error: function() {
       alert("Your error message goes here");
    }
  });

  $('.pagesSession').html((Math.round((pagesTotal/nrsession) * 100)/ 100)); 