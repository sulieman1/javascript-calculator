var val1 = '';
var val2 = '';
var result = 0;
var op = '';

var one = document.querySelector('p.button.one');
var two = document.querySelector('p.button.two');
var three = document.querySelector('p.button.three');
var four = document.querySelector('p.button.four');
var five = document.querySelector('p.button.five');
var six = document.querySelector('p.button.six');
var seven = document.querySelector('p.button.seven');
var eight = document.querySelector('p.button.eight');
var nine = document.querySelector('p.button.nine');

var add = document.querySelector('p.button.add');
var subtract = document.querySelector('p.button.subtract');
var multiply = document.querySelector('p.button.multiply');
var divide = document.querySelector('p.button.divide');



var result = document.querySelector('p.button.result');
var h1 = document.querySelector('h1');
var clear = document.querySelector('p.button.clear');

function num(event){
    val1+= event.target.innerText;
    console.log(val1);
    h1.innerText = val1;
}

function addForMe(){
    val2 = val1;
    val1 = '';
    op = '+';
    h1.innerText = op;
}

function subtractForMe(){
    val2 = val1;
    val1 = '';
    op = '-';
    h1.innerText = op;
}

function multiplyForMe(){
    val2 = val1;
    val1 = '';
    op = '*';
    h1.innerText = op;
}

function divideForMe(){
    val2 = val1;
    val1 = '';
    op = '/';
    h1.innerText = op;
}

function results(){
    if(op == '+'){
    result = Number(val1) + Number(val2); 
    console.log(result);
    h1.innerText = result;
    val1 = '';
    val2 = '';
    } else if(op == '-'){
        result = Number(val2) - Number(val1); 
        console.log(result);
        h1.innerText = result;
        val1 = '';
        val2 = '';
    } else if(op == '*'){
        result = Number(val2) * Number(val1); 
        console.log(result);
        h1.innerText = result;
        val1 = '';
        val2 = '';
    } else if(op == '/'){
        result = Number(val2) / Number(val1); 
        console.log(result);
        h1.innerText = result;
        val1 = '';
        val2 = '';
    }
}

function clearIt(){
    val1 = '';
    val2 = '';
    h1.innerText = '';
    console.log('cleared');
}

one.addEventListener('click',num);
two.addEventListener('click',num);
three.addEventListener('click',num);
four.addEventListener('click',num);
five.addEventListener('click',num);
six.addEventListener('click',num);
seven.addEventListener('click',num);
eight.addEventListener('click',num);
nine.addEventListener('click',num);

add.addEventListener('click',addForMe);
subtract.addEventListener('click',subtractForMe);
multiply.addEventListener('click',multiplyForMe);
divide.addEventListener('click',divideForMe);

clear.addEventListener('click',clearIt);
result.addEventListener('click', results);
