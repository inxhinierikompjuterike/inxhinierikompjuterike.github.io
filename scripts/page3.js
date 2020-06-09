var page3;

page3 = sessionStorage.getItem('number_page3');
page3 = (page3 === null) ? 0 : page3;

var pages;
pages = sessionStorage.getItem('number_pages');


if (page3 == 0){
    page3++;
    sessionStorage.setItem("number_page3", page3);
    
    $.ajax({
        type: 'GET',
        url: 'https://api.countapi.xyz/update/analitycs/pages/?amount=1',
        async: false,
        data:"",
        success: function(response){
        },
        error: function() {
           alert("Your error message goes here");
        }
      });

    pages++;
    sessionStorage.setItem("number_pages", pages);
}