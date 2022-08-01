const navbar=document.querySelector('.nav')
// const barOpen=document.querySelector('.nav-list')
const backToTop=document.querySelector('.back-to-top')
window.addEventListener('scroll',function(){
    const scrollHeight=window.pageYOffset;
    const navHeight=navbar.getBoundingClientRect().height
    if(scrollHeight>navHeight){
        navbar.classList.add('fixed')
    }
    else{
        navbar.classList.remove('fixed')
    }
    if(scrollHeight>500){
        backToTop.classList.add('show')
    }
    else{
        backToTop.classList.remove('show')
    }
})