var page2;

page2 = sessionStorage.getItem('number_page2');
page2 = (page2 === null) ? 0 : page2;

var pages;
pages = sessionStorage.getItem('number_pages');


if (page2 == 0){
    page2++;
    sessionStorage.setItem("number_page2", page2);

    
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