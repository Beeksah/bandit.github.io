var bodies = document.getElementsByTagName('body');
var body = bodies[0]
var nav = document.getElementById('menu');
window.onscroll = function(){
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}

var winheight, docheight, trackLength, throttlescroll; 
function amountscrolled(){
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if(nav.clientHeight>windowHeight){
        nav.classList.remove('fixed-top');
        
        if(scrollTop+windowHeight>=nav.clientHeight){
            console.log('True: ' + scrollTop + ', ' + windowHeight + ', ' + nav.clientHeight);
            nav.classList.add('fixed');
        }
        else{
            console.log('False: ' + scrollTop + ', ' + windowHeight + ', ' + nav.clientHeight);
            nav.classList.remove('fixed');
        }
    }
    else{
        nav.classList.add('fixed-top');
    }
}
window.addEventListener("scroll", function(){
    clearTimeout(throttlescroll)
        throttlescroll = setTimeout(function(){ 
        amountscrolled()
    }, 50)
}, false)