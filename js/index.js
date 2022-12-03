const btn1 = document.getElementById('food');
const btn2 = document.getElementById('drink');



btn1.addEventListener("click",()=>{
    btn1.classList.add('active')
    btn2.classList.remove('active')

})

btn2.addEventListener("click",()=>{
    btn2.classList.add('active')
    btn1.classList.remove('active')
    
})


