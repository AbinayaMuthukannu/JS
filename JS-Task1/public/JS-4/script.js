function cal() {
   let datecal1 = document.getElementById("Date1").value;
   let datecal2 = document.getElementById("Date2").value;
   document.getElementById("error1").innerHTML = "";
   document.getElementById("error2").innerHTML = "";
   let valid = true;
   if (datecal1 === "") {
      document.getElementById("error1").innerHTML = "*required";
      valid = false;
   }
   if (datecal2 === "") {
      document.getElementById("error2").innerHTML = "*required";
      valid = false;
   }
   if (!valid) {
      return;
   }
   let d1 = new Date(datecal1);
   let d2 = new Date(datecal2);

   if (d1 >= d2) {
      alert("Date 1 is smaller than Date 2");
      return;
   }
   let milliseconds = d2 - d1;
   console.log(milliseconds);

   let sec = milliseconds / 1000;
   console.log(sec);

   let minute = sec / 60;
   console.log(minute);

   let hour = minute / 60;
   console.log(hour);

   let day = hour / 24;
   console.log(day);

   let week = Math.floor(day / 7);
   console.log(week);

   let year = Math.floor(day / 365);
   console.log(year);

  let month= Math.floor(day/30);
  console.log(month);
   //Show the results:

   document.getElementById("calculate").innerHTML = `
          <span style= "text-align:center;">
          <p><span style = "color:blue;">The Total Number Of <span style = "color:red;"><b>Days</b></span><span style = "color:blue;"> between those two dates<span  style = "color:red;"><b> ${day}</b></span></p>
           <p><span style = "color:blue;">The Total Number Of <span style = "color:red;"><b>Hours</b></span> <span style = "color:blue;">between those two dates<span  style = "color:red;"> <b> ${hour}</b></span></p>
           <p><span style = "color:blue;">The Total Number Of <span style = "color:red;"><b>Minutes</b></span><span style = "color:blue;"> between those two dates <span  style = "color:red;"> <b>${minute}</b></span></p>
           <p><span style = "color:blue;">The Total Number Of <span style = "color:red;"><b>Seconds</b></span><span style = "color:blue;"> between those two dates<span  style = "color:red;"> <b> ${sec}</b></span></p>
           <p><span style = "color:blue;">The Total Number Of <span style = "color:red;"><b>Milliseconds</b></span><span style = "color:blue;"> between those two dates <span  style = "color:red;"><b> ${milliseconds}</b></span></p>
           <p><span style = "color:blue;">The Total Number Of <span style = "color:red;"><b>Weeks</b></span><span style = "color:blue;"> between those two dates<span  style = "color:red;"> <b> ${week}</b></span></p>
           <p><span style = "color:blue;">The Total Number Of <span style = "color:red;"><b>Year</b></span><span style = "color:blue;"> between those two dates<span  style = "color:red;"> <b> ${year}</b></span></p>
           <p><span style = "color:blue;">The Total Number Of </span><span style = "color:red;"><b>Days</b>,<b> Month</b>,<b> Year</b></span><span style = "color:blue;"> between those two dates</span><span  style = "color:red;"> <b> ${day}</b> </span><span style="color:blue;">Days</span><span  style = "color:red;"> <b> ${month}</b></span><span style="color:blue;"> Month</span> <span style = "color:red;"> <b> ${year}</b></span><span style="color:blue;"> Year</span></p>
           </span>`;
          

}






