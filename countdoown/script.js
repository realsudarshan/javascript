const endDate="10 Dec 2023 10:00 PM";
document.getElementById("end-date").innerText = endDate;
const inputs =document.querySelector("input")
    const end=new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000;
    inputs[0].value=Math.floor(diff/60/60/24);
    console.log(inputs[0].value);
