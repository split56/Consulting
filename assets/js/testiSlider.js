const prevbtn = document.querySelector('.prev-btn')
const nextbtn = document.querySelector('.next-btn')
const slides= document.querySelectorAll('.feedback-box')

slides.forEach((slide,idx)=>{
    slide.style.left=`${idx*100}%`
})

let count = 0;
prevbtn.addEventListener('click',function(){
    count--;
    carousel()
})
nextbtn.addEventListener('click',function(){
    count++
    carousel()
})
function carousel(){
    if(count > slides.length-1){
        count=0;
    }
    if (count <0){
        count =slides.length-1
    }
    if(count > 0){
        prevbtn.style.display='block'
    }
    else {
        prevbtn.style.display='none'
    }
    if(count < slides.length-1){
        nextbtn.style.display='block'
    }
    else {
        nextbtn.style.display='none'
    }
    slides.forEach(function(slide){
        slide.style.transform=`translateX(-${count*100}%)`
    })
}