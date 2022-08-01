const slideBtn = document.querySelector('.home-render-btn')
const slogan = document.querySelector('.home-slogan')
const mess=document.querySelector('.home-mess')
const desc=document.querySelector('.home-desc')
const btn=document.querySelector('.home-btn-block')
const containerBox=document.querySelector('.home-content-box')
slideBtn.addEventListener('click',function(){
    containerBox.classList.add('fade')
    slideIn(slogan,1000)
    setTimeout(function(){
        slideIn(mess,1000)
    },150)
    setTimeout(function(){
        slideIn(desc,1000)
    },300)
    setTimeout(function(){
        slideIn(btn,1000)
        containerBox.classList.remove('fade')
    },450)
    

})


function slideIn(part,timeout){
    part.classList.add('slide-in')
    setTimeout(function(){
        part.classList.remove('slide-in')
    },timeout)
}