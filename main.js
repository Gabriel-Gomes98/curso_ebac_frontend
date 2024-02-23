function menuShow() {
    
    let menuMobile = document.querySelector('.mobile_nav-list');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.mobile_nav-icon').src = "./img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.mobile_nav-icon').src = "./img/close_white_36dp.svg";
    }
}

document.getElementById('menubutton').addEventListener('click', menuShow);