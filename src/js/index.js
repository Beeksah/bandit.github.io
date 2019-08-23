var ctgfirst = document.getElementsByClassName('first')[0];
var ctgcontent = document.getElementsByClassName('categories-content')[0];
ctgfirst.addEventListener('click', function(){
    if(ctgfirst.classList.contains('opened')){
        ctgfirst.classList.remove('opened');
        ctgcontent.classList.add('hidden');
    }
    else{
        ctgfirst.classList.add('opened');
        ctgcontent.classList.remove('hidden');
    }
})

function openNav(){
    document.getElementById('sidebar').style.width = "100%";
    document.getElementsByClassName('sidebar-content')[0].classList.remove('hidden');
    document.getElementsByClassName('sidebar-opacity')[0].classList.remove('hidden');
    document.getElementsByClassName('content')[0].style.opacity="0.2";
    document.getElementsByClassName('content')[0].style.transition="0.5s ease";
    document.getElementsByClassName('small-menu-top')[0].style.opacity="0.2";
    document.getElementsByClassName('small-menu-top')[0].style.transition="0.5s ease";
}
function closeNav(){
    document.getElementById('sidebar').style.width = "0%";
    document.getElementsByClassName('sidebar-content')[0].classList.add('hidden');
    document.getElementsByClassName('sidebar-opacity')[0].classList.add('hidden');
    document.getElementsByClassName('content')[0].style.opacity="1";
    document.getElementsByClassName('content')[0].style.transition="0.5s ease";
    document.getElementsByClassName('small-menu-top')[0].style.opacity="1";
    document.getElementsByClassName('small-menu-top')[0].style.transition="0.5s ease";
}
