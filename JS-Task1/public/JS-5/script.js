function cal(){
    let d1 =  document.getElementById("date1").value;
   let d2 =  document.getElementById("day1").value;
   document.getElementById("error1").innerHTML = "";
   document.getElementById("error2").innerHTML = "";
   let valid = true;
   if(d1=== ""){
    document.getElementById("error1").innerHTML = "*required";
    valid = false;
   }
   if(d2 ===""){
    document.getElementById("error2").innerHTML = "*required";
    valid = false;
   }
   else if(valid){
    let data = new Date(d1);
    let date = data.toDateString();
    let day = Number(d2);

    result1 = data.setDate(data.getDate() + day);
    result1 = data.toDateString();

    result2 = data.setDate(data.getDate()-(2*day));
    result2 = data.toDateString();
     

     document.getElementById("result1").innerHTML = `<p>Adding<span style = "color:blue"><b> ${day}</b></span> days to<span style = "color:blue"> <b> ${date}</b></span> is<span style = "color: orangered"> <b> ${result1}</b></span></p>`
     document.getElementById("result2").innerHTML = `<p>Subtracting<span style = "color:blue"> <b> ${day}</b></span> days to<span style = "color:blue"> <b> ${date}</b></span> is <span style = "color: orangered"><b> ${result2}</b></span></p>`;

    

   }
   


}