let hr = document.querySelector(".hr")
let mint = document.querySelector(".mint")
let second = document.querySelector(".second")
let boxContainer = document.getElementById("clock")

let amPm = "";
timeTaken=()=>{
   let addTime =  new Date()
   console.log(addTime)

   if(addTime.getHours() >= 13){
    amPm = "PM"
    boxContainer.style.setProperty('--period', `"${amPm}"`)
    hr.textContent = `0${(addTime.getHours() - 12)}`;
   }else{
    amPm = "AM";
    boxContainer.style.setProperty('--period', `"${amPm}"`)
    if(addTime.getHours()<10){
        hr.textContent = `0${addTime.getHours()}`;
    }else{
        hr.textContent =addTime.getHours()
    }
   }
   
   if(addTime.getMinutes() < 10){
    mint.textContent =`${0}${addTime.getMinutes()}`
   }else{
    mint.textContent = addTime.getMinutes()
   }
   if(addTime.getSeconds() < 10){
    second.textContent =`${0}${addTime.getSeconds()}`
   }else{
    second.textContent = addTime.getSeconds()
   }

  
}

setInterval(timeTaken, 1000)

