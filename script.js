let searchCont = document.querySelector('.search-cont');

document.querySelector('#search-btn').onclick = () =>{
    searchCont.classList.toggle('active')

    shooPing.classList.remove('active-2')
    user.classList.remove('active-3')
}



let shooPing = document.querySelector('.shooping');

document.querySelector('#cart-btn').onclick = () =>{
    shooPing.classList.toggle('active-2')
    searchCont.classList.remove('active')
    user.classList.remove('active-3')
}


let user = document.querySelector('.user');

document.querySelector('#login-btn').onclick = () =>{
    user.classList.toggle('active-3')
    searchCont.classList.remove('active')
    shooPing.classList.remove('active-2')
  
}

window.onscroll = () => {
    searchCont.classList.remove('active')
    shooPing.classList.remove('active-2')
    user.classList.remove('active-3')
}

let navBar = document.querySelector('.navlinks ');

document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('show-nav')
}

