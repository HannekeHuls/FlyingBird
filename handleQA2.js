async function getData(i){
    const dataStream = await fetch('data.json');
    const qAndA = await dataStream.json();

    let li = `<tr><td></td></tr>`;

    li += `<tr><td>
        ${qAndA[i].question}</td></tr>
            <tr><td id="demo1" onclick="giveAnswer()">${qAndA[1].answer1}</td></tr> 
            <tr><td id="demo2" onclick="giveAnswer()">${qAndA[1].answer2}</td></tr>
            <tr><td id="demo3" onclick="giveAnswer()">${qAndA[1].answer3}</td></tr>             
        </tr>`;         
    
    document.getElementById("answers").innerHTML = li; 
} 

function giveAnswer(){
    if (event.target.id === 'demo1') {
        let answer1 = document.getElementById("demo1").innerHTML;
        localStorage.setItem("Antwoord 2", answer1);
        console.log(localStorage);
    }
    if (event.target.id === 'demo2') {
        let answer2 = document.getElementById("demo2").innerHTML;
        localStorage.setItem("Antwoord 2", answer2);
        console.log(localStorage);
    }
    else {let answer3 = document.getElementById("demo3").innerHTML;
        localStorage.setItem("Antwoord 2", answer3);
        console.log(localStorage);
    }       
        
    window.location.href = "file:///Users/hannekehuls/Dropbox/birdsGame%20copy/index3.html";
} 