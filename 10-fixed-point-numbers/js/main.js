const txtNum1 = document.getElementById('num1');
const txtNum2 = document.getElementById('num2');
const btnAdd = document.getElementById('btn-add');
const btnSubstract = document.getElementById('btn-substract');
const btnMultiply = document.getElementById('btn-multiply');
const btnDevide = document.getElementById('btn-devide');
const lblResult = document.getElementById('result');

btnAdd.addEventListener('click', ()=> {
    const num1 = new Big(+txtNum1.value);    
    const num2 = new Big(+txtNum2.value);

    lblResult.innerText = num1.plus(num2).toFixed(2);
});

btnSubstract.addEventListener('click', ()=> {
    const num1 = new Big(+txtNum1.value);    
    const num2 = new Big(+txtNum2.value);

    lblResult.innerText = num1.minus(num2).toFixed(2);
});

btnMultiply.addEventListener('click', ()=> {
    const num1 = new Big(+txtNum1.value);    
    const num2 = new Big(+txtNum2.value);

    lblResult.innerText = num1.times(num2).toFixed(2);
});

btnDevide.addEventListener('click', ()=> {
    const num1 = new Big(+txtNum1.value);    
    const num2 = new Big(+txtNum2.value);

    lblResult.innerText = num1.div(num2).toFixed(2);
});

// plus(big) : Big
// minus(big) : Big
// times(big) : Big
// div(big) : Big
// plus(big).times(big).div(big) : Big
// toPrecision(total of numbers digits)
// toFixed(number of deciaml points)
