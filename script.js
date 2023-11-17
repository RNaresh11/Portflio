var infos = document.getElementsByClassName('info')
var contents = document.getElementsByClassName('contents')

function opentab(tabname){
    for(info of infos){
        info.classList.remove('active-link')
    }

    for(content of contents){
        content.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')
}

var sidemenu = document.getElementById('sidemenu')

function openmenu(){
    sidemenu.style.right='0'
}
function closemenu(){
    sidemenu.style.right='-200px'
}


ScrollReveal({
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});