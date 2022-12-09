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




function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
  }
