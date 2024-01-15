let inputBox = document.querySelector('input');
let buttons = document.querySelectorAll('button');

let string =""



buttons.forEach(parameter => {
    parameter.addEventListener('click', (para) =>{
       if(para.target.innerHTML == "="){
       string =String(eval(string))
    inputBox.value = string
       }else if(para.target.innerHTML == "AC"){
        string =" "
        inputBox.value = string;
       }else if(para.target.innerHTML == "DEL"){
        string = string.substring(0,string.length-1)
        inputBox.value = string;
       }
       else{
        string += para.target.innerText
        inputBox.value = string
       }
    })
})
