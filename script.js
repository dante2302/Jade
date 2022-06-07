const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.nav-ul');
const searchBar = document.querySelector('.nav-searchbar');
const searchForm  = document.querySelector('form')
searchBar.addEventListener('focus',()=>{
    searchForm.classList.add('focused')
})
searchBar.addEventListener('focusout',()=>{
    searchForm.classList.remove('focused')
})
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    document.querySelector('body').classList.toggle('scrollStop')  
    navUl.classList.toggle('active');
})

document.querySelectorAll('.nav-ul>*').forEach((link)=>{
    link.addEventListener('click',()=>{
        hamburger.classList.remove('active');
        document.querySelector('body').classList.remove('scrollStop')  
        navUl.classList.remove('active');
    })
})
