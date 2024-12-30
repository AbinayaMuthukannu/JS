function cal() {
    let select = (document.getElementById("charCount").value).toLowerCase(); 
    const result = document.getElementById("character");
    result.innerHTML = "";

    if (select.trim() === '') {
        alert("Input box is empty.");
        return;
    }

    const char = select.trim().split(" ").join("");
    const charcount = {}; 
    for (let key of char) {
        // charcount[key] = (charcount[key] || 0) + 1;
        if (!charcount[key]) {
            charcount[key] = 0;
        }

        charcount[key]++;
    }

    const heading = document.createElement("h2");
    heading.style.textAlign = "center"; 
    heading.style.color = "rgb(235, 9, 9)";
    heading.innerHTML = `This text contains <strong style ="color:green">${char.length}</strong> characters`;
    result.appendChild(heading);

    
    for (let keyword in charcount) {
        const p = document.createElement("p");
        p.innerHTML = `This Text Includes <strong style ="color:green">${charcount[keyword]}</strong> <strong style ="color:green">${keyword}</strong> Character`;
        p.style.textAlign = "center"
        p.style.color = "#8B0000"; 


        result.appendChild(p);
    }
    
}
