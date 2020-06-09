// Numrimi i vizitave brenda te njejtit sesion dhe brenda njejtit browser (lokalisht)
var visits = localStorage.getItem('on_load_counter');
var sessionVisits = sessionStorage.getItem('session_counter');

if (visits === null) {
  visits = 0;
}
if (sessionVisits === null) {
sessionVisits = 0;
}
sessionVisits++;
visits++;


localStorage.setItem("on_load_counter", visits);
sessionStorage.setItem("session_counter", sessionVisits);

// Numrimi i clicks gjate nje sesioni dhe average
/*
var clicks = localStorage.getItem('on_load_clicks');
var sessionClicks = sessionStorage.getItem('session_clicks');

if (clicks === null) {
  clicks = 0;
}
if (sessionClicks === null) {
sessionClicks = 0;
}

localStorage.setItem("on_load_clicks", clicks);
sessionStorage.setItem("session_clicks", sessionClicks);
*/

var numberOfClicks;
numberOfClicks = localStorage.getItem('on_load_clicks');
numberOfClicks = isNaN(numberOfClicks) ? 0 : numberOfClicks;

var numberOfClicksSession;
numberOfClicksSession = sessionStorage.getItem('session_clicks');
numberOfClicksSession = isNaN(numberOfClicksSession) ? 0 : numberOfClicksSession;

var pages;
pages = sessionStorage.getItem('number_pages');
pages = (pages === null) ? 0 : pages;


// Numri i sesioneve

var sessionNumber = localStorage.getItem('session_numbers');

if (sessionNumber === null) {
  sessionNumber = 0;
}

var nrsession;
const countElSession = document.getElementById('nrSessions');

function sessioncounter(){

if(sessionStorage.getItem('session_counter')==1){

		$.ajax({
      type: 'GET',
      url: 'https://api.countapi.xyz/update/analitycs/sessions/?amount=1',
      async: false,
      data:"",
      success: function(response){
        nrsession = response.value;
        countElSession.innerHTML = nrsession;
      },
      error: function() {
         alert("Your error message goes here");
      }
    });

    sessionNumber++;
}
else {

  $.ajax({
    type: 'GET',
    url: 'https://api.countapi.xyz/get/analitycs/sessions',
    async: false,
    data:"",
    success: function(response){
      nrsession = response.value;
      countElSession.innerHTML = nrsession;
    },
    error: function() {
       alert("Your error message goes here");
    }
  });

}

localStorage.setItem("session_numbers", sessionNumber);

document.getElementById('sessionNumber').innerHTML = sessionNumber;

}

sessioncounter();
// Numrimi i page views

const countEl = document.getElementById('count');

function updateVisitCount() {

  fetch('https://api.countapi.xyz/update/analitycs/visits/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}
updateVisitCount();

// Numrimi i vizitoreve unik
var uniq, ret, tot;

const countEl1 = document.getElementById('unique');

function updateUniqueCount() {
	if(localStorage.getItem('on_load_counter')==1){

    $.ajax({
      type: 'GET',
      url: 'https://api.countapi.xyz/update/analitycs/uniquevisitor/?amount=1',
      async: false,
      data:"",
      success: function(response){
        uniq = response.value;
        countEl1.innerHTML = uniq;
      },
      error: function() {
         alert("Your error message goes here");
      }
    });
  }
	else {
		$.ajax({
      type: 'GET',
      url: 'https://api.countapi.xyz/get/analitycs/uniquevisitor',
      async: false,
      data:"",
      success: function(response){
        uniq = response.value;
        countEl1.innerHTML = uniq;
      },
      error: function() {
         alert("Your error message goes here");
      }
    });}
	}


updateUniqueCount();



// Numrimi i vizitoreve return

const countElement = document.getElementById('return');

function updateReturnCount() {
	if(localStorage.getItem('on_load_counter')>1 && sessionStorage.getItem('session_counter')==1){
    $.ajax({
      type: 'GET',
      url: 'https://api.countapi.xyz/update/analitycs/returnvisitor/?amount=1',
      async: false,
      data:"",
      success: function(response){
        ret = response.value;
        countElement.innerHTML = ret;
      },
      error: function() {
         alert("Your error message goes here");
      }
    });
}
	else {
  $.ajax({
    type: 'GET',
    url: 'https://api.countapi.xyz/get/analitycs/returnvisitor',
    async: false,
    data:"",
    success: function(response){
      ret = response.value;
      countElement.innerHTML = ret;
    },
    error: function() {
       alert("Your error message goes here");
    }
  });}
  }

updateReturnCount();

tot=uniq+ret;
$('.tot').html(tot);

$('.avgNumberOfSession').html((Math.round((nrsession/tot) * 100)/ 100));

// Numrimi i vizitoreve ne baze te browsersit qe perdorin

var ba = ["Chrome","Firefox","Safari","Opera","MSIE","Trident","Edge"];
var b, ua = navigator.userAgent;
for(var i=0; i < ba.length; i++){
   if( ua.indexOf(ba[i]) > -1 ){
      b = ba[i];
      break;
   }
}
if(b == "MSIE" || b == "Trident" || b == "Edge"){
   b = "Internet Explorer";
}
browser.textContent= b;

const countEle1 = document.getElementById('chrome');
const countEle2 = document.getElementById('firefox');
const countEle3 = document.getElementById('safari');
const countEle4 = document.getElementById('opera');
const countEle5 = document.getElementById('internet explorer');
const countEle6 = document.getElementById('others');

function updateBrowserCount()
{
  if(sessionStorage.getItem('session_counter')==1)
  {
if(b == "Chrome"){

fetch('https://api.countapi.xyz/update/analytics/chrome/?amount=1')
.then(res => res.json())
.then(res => {
countEle1.innerHTML = res.value;
console.log(res.value);
})
fetch('https://api.countapi.xyz/get/analytics/firefox')
.then(res => res.json())
.then(res => {
countEle2.innerHTML = res.value;
})
fetch('https://api.countapi.xyz/get/analytics/safari')
.then(res => res.json())
.then(res => {
countEle3.innerHTML = res.value;
})
fetch('https://api.countapi.xyz/get/analytics/opera')
.then(res => res.json())
.then(res => {
countEle4.innerHTML = res.value;
})
fetch('https://api.countapi.xyz/get/analytics/internetexplorer')
.then(res => res.json())
.then(res => {
countEle5.innerHTML = res.value;
})
fetch('https://api.countapi.xyz/get/analytics/others')
.then(res => res.json())
.then(res => {
countEle6.innerHTML = res.value;
})}

else if (b == "Firefox"){
  fetch('https://api.countapi.xyz/update/analytics/firefox/?amount=1')
  .then(res => res.json())
  .then(res => {
  countEle2.innerHTML = res.value;
  })
  fetch('https://api.countapi.xyz/get/analytics/chrome')
  .then(res => res.json())
  .then(res => {
  countEle1.innerHTML = res.value;
  })
  fetch('https://api.countapi.xyz/get/analytics/safari')
  .then(res => res.json())
  .then(res => {
  countEle3.innerHTML = res.value;
  })
  fetch('https://api.countapi.xyz/get/analytics/opera')
  .then(res => res.json())
  .then(res => {
  countEle4.innerHTML = res.value;
  })
  fetch('https://api.countapi.xyz/get/analytics/internetexplorer')
  .then(res => res.json())
  .then(res => {
  countEle5.innerHTML = res.value;
  })
  fetch('https://api.countapi.xyz/get/analytics/others')
  .then(res => res.json())
  .then(res => {
  countEle6.innerHTML = res.value;
  })}

  else if (b == "Safari"){
    fetch('https://api.countapi.xyz/update/analytics/safari/?amount=1')
    .then(res => res.json())
    .then(res => {
    countEle3.innerHTML = res.value;
    })
    fetch('https://api.countapi.xyz/get/analytics/chrome')
    .then(res => res.json())
    .then(res => {
    countEle1.innerHTML = res.value;
    })
    fetch('https://api.countapi.xyz/get/analytics/firefox')
    .then(res => res.json())
    .then(res => {
    countEle2.innerHTML = res.value;
    })
    fetch('https://api.countapi.xyz/get/analytics/opera')
    .then(res => res.json())
    .then(res => {
    countEle4.innerHTML = res.value;
    })
    fetch('https://api.countapi.xyz/get/analytics/internetexplorer')
    .then(res => res.json())
    .then(res => {
    countEle5.innerHTML = res.value;
    })
    fetch('https://api.countapi.xyz/get/analytics/others')
    .then(res => res.json())
    .then(res => {
    countEle6.innerHTML = res.value;
    })}

    else if (b == "Opera"){
      fetch('https://api.countapi.xyz/update/analytics/opera/?amount=1')
      .then(res => res.json())
      .then(res => {
      countEle4.innerHTML = res.value;
      })
      fetch('https://api.countapi.xyz/get/analytics/chrome')
      .then(res => res.json())
      .then(res => {
      countEle1.innerHTML = res.value;
      })
      fetch('https://api.countapi.xyz/get/analytics/firefox')
      .then(res => res.json())
      .then(res => {
      countEle2.innerHTML = res.value;
      })
      fetch('https://api.countapi.xyz/get/analytics/safari')
      .then(res => res.json())
      .then(res => {
      countEle3.innerHTML = res.value;
      })
      fetch('https://api.countapi.xyz/get/analytics/internetexplorer')
      .then(res => res.json())
      .then(res => {
      countEle5.innerHTML = res.value;
      })
      fetch('https://api.countapi.xyz/get/analytics/others')
      .then(res => res.json())
      .then(res => {
      countEle6.innerHTML = res.value;
      })}

      else if (b == "Internet Explorer"){
        fetch('https://api.countapi.xyz/update/analytics/internetexplorer/?amount=1')
        .then(res => res.json())
        .then(res => {
        countEle5.innerHTML = res.value;
        })
        fetch('https://api.countapi.xyz/get/analytics/chrome')
        .then(res => res.json())
        .then(res => {
        countEle1.innerHTML = res.value;
        })
        fetch('https://api.countapi.xyz/get/analytics/firefox')
        .then(res => res.json())
        .then(res => {
        countEle2.innerHTML = res.value;
        })
        fetch('https://api.countapi.xyz/get/analytics/safari')
        .then(res => res.json())
        .then(res => {
        countEle3.innerHTML = res.value;
        })
        fetch('https://api.countapi.xyz/get/analytics/opera')
        .then(res => res.json())
        .then(res => {
        countEle4.innerHTML = res.value;
        })
        fetch('https://api.countapi.xyz/get/analytics/others')
        .then(res => res.json())
        .then(res => {
        countEle6.innerHTML = res.value;
        })}

        else {
          fetch('https://api.countapi.xyz/update/analytics/others/?amount=1')
          .then(res => res.json())
          .then(res => {
          countEle6.innerHTML = res.value;
          })
          fetch('https://api.countapi.xyz/get/analytics/chrome')
          .then(res => res.json())
          .then(res => {
          countEle1.innerHTML = res.value;
          })
          fetch('https://api.countapi.xyz/get/analytics/firefox')
          .then(res => res.json())
          .then(res => {
          countEle2.innerHTML = res.value;
          })
          fetch('https://api.countapi.xyz/get/analytics/safari')
          .then(res => res.json())
          .then(res => {
          countEle3.innerHTML = res.value;
          })
          fetch('https://api.countapi.xyz/get/analytics/opera')
          .then(res => res.json())
          .then(res => {
          countEle4.innerHTML = res.value;
          })
          fetch('https://api.countapi.xyz/get/analytics/internetexplorer')
          .then(res => res.json())
          .then(res => {
          countEle5.innerHTML = res.value;
          })}
}
else{
  fetch('https://api.countapi.xyz/get/analytics/others')
  .then(res => res.json())
  .then(res => {
  countEle6.innerHTML = res.value;
  })
  fetch('https://api.countapi.xyz/get/analytics/chrome')
  .then(res => res.json())
  .then(res => {
  countEle1.innerHTML = res.value;
  })
  fetch('https://api.countapi.xyz/get/analytics/firefox')
  .then(res => res.json())
  .then(res => {
  countEle2.innerHTML = res.value;
  })
  fetch('https://api.countapi.xyz/get/analytics/safari')
  .then(res => res.json())
  .then(res => {
  countEle3.innerHTML = res.value;
  })
  fetch('https://api.countapi.xyz/get/analytics/opera')
  .then(res => res.json())
  .then(res => {
  countEle4.innerHTML = res.value;
  })
  fetch('https://api.countapi.xyz/get/analytics/internetexplorer')
  .then(res => res.json())
  .then(res => {
  countEle5.innerHTML = res.value;
  })}
}
updateBrowserCount();

//Session Duration
var timer;
var timerStart;
var timeSpentOnSession = getTimeSpentOnSession();

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = leftPad(h + "h:",4);
    var mDisplay = leftPad(m + "m:",4);
    var sDisplay = leftPad(s + "s",3);
    return hDisplay + mDisplay + sDisplay;
}

function leftPad(value, length) {
    value = String(value);
    length = length - value.length;
    return ('0'.repeat(length) + value)
}

function getTimeSpentOnSession(){
    timeSpentOnSession = parseInt(sessionStorage.getItem('timeSpentOnSession'));
    timeSpentOnSession = isNaN(timeSpentOnSession) ? 0 : timeSpentOnSession;
    return timeSpentOnSession;
}

function startCountingSession(){
    timerStart = Date.now();
    timer = setInterval(function(){
        timeSpentOnSession = getTimeSpentOnSession()+(Date.now()-timerStart);
        sessionStorage.setItem('timeSpentOnSession',timeSpentOnSession);
        timerStart = parseInt(Date.now());
        // Convert to seconds
        sessionDuration.textContent= secondsToHms(Math.round(timeSpentOnSession/1000))
    },1000);

}
startCountingSession();

//Time Spent in Site Duration
var timer1;
var timerStart1;
var timeSpentOnSite= getTimeSpentOnSite();

function getTimeSpentOnSite(){
    timeSpentOnSite = parseInt(localStorage.getItem('timeSpentOnSite'));
    timeSpentOnSite = isNaN(timeSpentOnSite) ? 0 : timeSpentOnSite;
    return timeSpentOnSite;
}

function startCountingLocal(){
    timerStart1 = Date.now();
    timer1 = setInterval(function(){
        timeSpentOnSite = getTimeSpentOnSite()+(Date.now()-timerStart1);
        localStorage.setItem('timeSpentOnSite',timeSpentOnSite);
        timerStart1 = parseInt(Date.now());
        // Convert to seconds
        timeOnSite.textContent=secondsToHms(Math.round(timeSpentOnSite/1000))
        avgSessionDuration1.textContent=secondsToHms(Math.round(Math.round(timeSpentOnSite/1000)/localStorage.getItem('session_numbers')))
        avgSessionDuration2.textContent=avgSessionDuration1.textContent;
        avgSessionDuration3.textContent=avgSessionDuration1.textContent;
    },1000);

}
startCountingLocal();

// Device Recognition

const countEleMobile = document.getElementById('mobile');
const countEleTablet = document.getElementById('tablet');
const countEleComputer = document.getElementById('computer');

function isMobileTablet(){
    var check = false;
    (function(a){
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
            check = true;
    })(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}

function isMobile() {
  var check = false;
  (function(a){
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
      check = true;
  })(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}


function checkDevice() {

if(isMobile()){
  device.textContent = "Mobile";
}

else if (isMobileTablet()){
  device.textContent = "Tablet";
}

else {
  device.textContent = "Computer/Laptop";
}

}

checkDevice();

function countDevice() {

  if(sessionStorage.getItem('session_counter')==1)

{
if(isMobile())
{

  fetch('https://api.countapi.xyz/update/analytics/mobile/?amount=1')
  .then(res => res.json())
  .then(res => {
  countEleMobile.innerHTML = res.value;
  })
  fetch('https://api.countapi.xyz/get/analytics/computer')
  .then(res => res.json())
  .then(res => {
  countEleComputer.innerHTML = res.value;
  })
  fetch('https://api.countapi.xyz/get/analytics/tablet')
  .then(res => res.json())
  .then(res => {
  countEleTablet.innerHTML = res.value;
})
}
else if (isMobileTablet())
{
  fetch('https://api.countapi.xyz/update/analytics/tablet/?amount=1')
  .then(res => res.json())
  .then(res => {
  countEleTablet.innerHTML = res.value;
  })
  fetch('https://api.countapi.xyz/get/analytics/mobile')
  .then(res => res.json())
  .then(res => {
  countEleMobile.innerHTML = res.value;
  })
  fetch('https://api.countapi.xyz/get/analytics/computer')
  .then(res => res.json())
  .then(res => {
  countEleComputer.innerHTML = res.value;
})
}
else {

  fetch('https://api.countapi.xyz/update/analytics/computer/?amount=1')
  .then(res => res.json())
  .then(res => {
  countEleComputer.innerHTML = res.value;
  })
  fetch('https://api.countapi.xyz/get/analytics/mobile')
  .then(res => res.json())
  .then(res => {
  countEleMobile.innerHTML = res.value;
  })
  fetch('https://api.countapi.xyz/get/analytics/tablet')
  .then(res => res.json())
  .then(res => {
  countEleTablet.innerHTML = res.value;
})
}
}
else {
  fetch('https://api.countapi.xyz/get/analytics/computer')
  .then(res => res.json())
  .then(res => {
  countEleComputer.innerHTML = res.value;
  })
  fetch('https://api.countapi.xyz/get/analytics/mobile')
  .then(res => res.json())
  .then(res => {
  countEleMobile.innerHTML = res.value;
  })
  fetch('https://api.countapi.xyz/get/analytics/tablet')
  .then(res => res.json())
  .then(res => {
  countEleTablet.innerHTML = res.value;
})

}
}
countDevice();
