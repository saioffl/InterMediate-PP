function autoType(){
    var typed = new Typed(".auto-type", {
        strings : ["FreeLancer","Designer", "Gamer" ,"DsAist"],
        typeSpeed : 150,
        backSpeed : 150,
        loop : true 
    });
}

autoType();




const sideBar = document.querySelector('.side-navbar');
const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.closeBtn');

function showSidebar() {
    sideBar.style.transform = 'translateX(0)';
    menuBtn.style.display = 'none';
}

function hideSidebar() {
    sideBar.style.transform = 'translateX(100%)';
    menuBtn.style.display = 'block'; 
}



