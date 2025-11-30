function autoType(){
    var typed = new Typed(".auto-type", {
        strings : ["FreeLancer","Designer", "Gamer" ,"DsAist"],
        typeSpeed : 150,
        backSpeed : 150,
        loop : true 
    });
}

autoType();




function showSidebar() {
    document.querySelector('.side-navbar').style.transform = 'translateX(0)';
}

function hideSidebar() {
    document.querySelector('.side-navbar').style.transform = 'translateX(100%)';
}