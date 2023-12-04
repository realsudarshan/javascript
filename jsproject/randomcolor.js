const randomcolor=function(){
return(`#${Math.random().toString(16).slice(2,8).padEnd(6,'0')}`);
}
let intervalId;
const startchangingcolor=function(){
    intervalId=setInterval(changebgcolor, 1000);
    function changebgcolor(){
    document.body.style.backgroundColor = randomcolor();
    };
};
const stopchangingcolor=function(){
    clearInterval(intervalId);
};
document.querySelector('#Start').addEventListener('click', startchangingcolor);
document.querySelector('#Stop').addEventListener('click', stopchangingcolor);


