var x = 10;

function myMethod1(){
    console.log("myMethod1 is from module1");
}

function printX(){
    alert(x);
}

const btnElm = document.getElementById('btnOk');
btnElm.addEventListener('click', ()=> printX());
