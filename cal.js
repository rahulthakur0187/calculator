let inputBox = document.querySelector('input');
let buttons = document.querySelectorAll('button');

// it is taken to get result
let string =""
/*
let arr = Array.from(buttons);
arr.forEach(buttons =>{
    buttons.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        
    })
})
*/


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
