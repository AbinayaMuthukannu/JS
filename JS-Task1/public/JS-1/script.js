function cal(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;

    document.getElementById("error1").innerHTML="";
    document.getElementById("error2").innerHTML="";
    var valid=true


    if(num1=== ""){
        document.getElementById("error1").innerHTML="*required";
      valid= false
    }
    if(num2=== ""){
        document.getElementById("error2").innerHTML="*required";
       valid=false
    }
    if(valid) {
        const Addition=Number(num1)+Number(num2);
        const Subtraction=(num1)-(num2);
        const Multiplication=(num1)*(num2);
        const Division=(num1/num2).toFixed(3);
        const Remainder=(num1)%(num2);
        const Exponentiation=(num1 ** num2).toPrecision(3);
        const sine=Math.sin(num1).toFixed(3);
        const cosine=Math.cos(num2).toFixed(3);
        const tangent=Math.tan(num1).toFixed(3);
        const logical=Math.log(num2).toFixed(3);

    
    const results=`
        <p><span style="color:green">Addition of<b> ${num1}</b> and<b> ${num2}</b> is</span> <span style="color:blue">${Addition}</span> </p>
        <p><span style="color:green">Subtraction of<b> ${num1}</b> and <b>${num2}</b> is</span> <span  style="color:blue"> ${Subtraction}</span> </p>
        <p><span style="color:green">Multiplication of<b> ${num1}</b> and<b> ${num2}</b> is</span> <span  style="color:blue"> ${Multiplication}</span> </p>
        <p><span style="color:green">Division of<b> ${num1}</b> and<b> ${num2}</b> is</span> <span  style="color:blue"> ${Division}</span> </p>
        <p><span style="color:green">Remainder of<b> ${num1}</b> and<b> ${num2}</b> is</span> <span  style="color:blue"> ${Remainder}</span> </p>
        <p><span style="color:green">Exponentiation of <b>${num1}</b> and<b> ${num2}</b> is</span> <span  style="color:blue"> ${Exponentiation}</span> </p>
        <p><span style="color:green">Sin <b> (${num1})</b> is</span> <span  style="color:blue"> ${sine} </span></p>
        <p><span style="color:green">Cos <b> (${num2})</b>is</span> <span  style="color:blue"> ${cosine}</span> </p>
        <p><span style="color:green">tan <b> (${num1})</b> is</span> <span  style="color:blue"> ${tangent} </span></p>
        <p><span style="color:green">log <b> (${num2})</b>  is</span> <span  style="color:blue"> ${logical}</span> </p>
        `;
        

        



    document.getElementById("result").innerHTML=results;
    }
   
}
    
    
    






   


