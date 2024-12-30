function cal() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("num1-error").innerHTML = "";
    document.getElementById("num2-error").innerHTML = "";
    let valid = true;
    if (num1 === "") {
      alert("Enter A and B value");
        valid = false;
        alert("Enter A and B value");
    }
    if (num2 === "") {
       
        valid = false;
    }
    else if (valid) {

        num1 = parseInt(num1);
        num2 = parseInt(num2);
        if (num1 > num2) {
            document.getElementById("result").innerHTML = "num1 should be smaller than num2";
            return;
        }

        let allNumbers = [];
        let evenNumbers = [];
        let oddNumber = [];
        let allTotal = 0;
        let evenTotal = 0;
        let oddTotal = 0;
        for (let i = num1; i <= num2; i++) {
            allNumbers.push(i);
            allTotal += i;
            if (i % 2 == 0) {
                evenNumbers.push(i);
                evenTotal += i;
            }
            else {
                oddNumber.push(i);
                oddTotal += i;
            }
        }
        document.getElementById("result").innerHTML = `
    <span style = "text-align: center"; >
    <p>Value from<span style ="color: red"; > ${num1}</span> and <span style ="color: red"; >${num2}</span> are <br><span style ="color: blue"; > ${allNumbers}</span></p>
    <p><span style = "color:green"; >Sum Of Value = <span style ="color: blue"; >${allTotal}</span></p>
    <p>Odd Values from <span style ="color: red"; >${num1}</span> and <span style ="color: red"; >${num2}</span> are <br><span style ="color: blue"; > ${oddNumber}</p>
    <p><span style = "color:green"; >Sum Of Odd Numbers = <span style ="color: blue"; >${oddTotal}</p>
    <p> Even Values from<span style ="color: red"; > ${num1}</span> and <span style ="color: red"; > ${num2}</span> are <br><span style ="color: blue"; > ${evenNumbers}</p>
    <p><span style = "color:green"; >Sum Of Even Numbers =<span style ="color: blue"; > ${evenTotal}</p>
    </span>
`;
    }
   
}