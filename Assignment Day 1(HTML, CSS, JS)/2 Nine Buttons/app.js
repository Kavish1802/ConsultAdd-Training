function rotate() {  
    var viarableNum=btn1.innerHTML; 
    btn1.innerHTML=btn4.innerHTML; 
    btn4.innerHTML=btn7.innerHTML; 
    btn7.innerHTML=btn8.innerHTML; 
    btn8.innerHTML=btn9.innerHTML; 
    btn9.innerHTML=btn6.innerHTML; 
    btn6.innerHTML=btn3.innerHTML; 
    btn3.innerHTML=btn2.innerHTML; 
    btn2.innerHTML=viarableNum;  
};