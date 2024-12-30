function display(val){
    let number = document.getElementById("inputArea");
    number.value += val;
} 
function solve(){
    const display=document.getElementById('inputArea')
    let x=display.value
    let y=eval(x)
    display.value=y
}
function del(){
    let number = document.getElementById("inputArea");
   number.value= number.value.slice(0,-1);

}

function sin(){
    let number = document.getElementById("inputArea");
    number.value=Math.sin(number.value)
}
function cos(){
    let number = document.getElementById("inputArea");
    number.value=Math.cos(number.value);
}
function tan(){
    let number = document.getElementById("inputArea");
    number.value=Math.tan(number.value);
}
function log(){
    let number = document.getElementById("inputArea");
    number.value=Math.log(number.value);
}
function exp(){
    let number = document.getElementById("inputArea");
    number.value=Math.exp(number.value);
}
function xfun(){
    let number = document.getElementById("inputArea");
    number.value=Math.pow(number.value,2);
}
function clearScreen(){
    let number = document.getElementById("inputArea");
    number.value="";
}
function pi(){
    let number = document.getElementById("inputArea");
    number.value=Math.sqrt(number.value);
}
function fact(){
    let number = document.getElementById("inputArea");
    let num = parseInt(number.value);
    number.value = factorial(num);
}
function factorial(n){
  if(n===0 ||n===1){
    return 1;
  }
  else{
    return n*factorial(n-1);
  }
}
function screen(){
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();
    document.getElementById("hours").innerHTML=hr;
    document.getElementById("mins").innerHTML=min;
    document.getElementById("seconds").innerHTML=second;
    if(hr<12){
        ampm.innerHTML="AM";

    }
    else{
        ampm.innerHTML="PM";
    }
}
setInterval(screen);











