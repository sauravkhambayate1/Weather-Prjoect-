
let fetchbtn = document.getElementById('btn')
// let popbtn = document.getElementById('pop-btn')
fetchbtn.addEventListener('click', myfunc)

function myfunc(){
  console.log("button was clicked")
  // Instiantiate 
let xhr = new XMLHttpRequest()

 xhr.open('GET', 'https://github.com/robertoduessmann/weather-api', true)

 xhr.onprogress = function(){
  console.log("function is ongoing")
 }

 xhr.onreadystatechange = function(){
  console.log("ready state is:" +xhr.readyState)
 }
 xhr.onload = function(){
  if(this.status===200)
  {
   let obj = JSON.parse(this.responseText)  
   console.log(obj)

  
    }
  else{
    console.log("some error")
  }
    
 }

 
 xhr.send();
}

// popbtn.addEventListener('click', myfunc1)
// function myfunc1(){
    
//   let xhr = new XMLHttpRequest()

//  xhr.open('GET', 'https://goweather.herokuapp.com/weather/nashik', true)

//  xhr.onprogress = function(){
//   console.log("function is ongoing")
//  }

//  xhr.onreadystatechange = function(){
//   console.log("ready state is:" +xhr.readyState)
//  }
//  xhr.onload = function(){
//   if(this.status===200)
//   {
//    let obj = JSON.parse(this.responseText)  
//    console.log(obj)

//    let str1 = ""
//    for(let key in obj){
//    str1 += `<li>${obj[key].name}</li>`
//    }
//      document.getElementById('list1').innerHTML= str1
//     }
//   else{
//     console.log("some error")
//   }
    
//  }

 
//  xhr.send();
// }
