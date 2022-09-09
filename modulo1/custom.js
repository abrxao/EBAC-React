const helloHeader = document.querySelector('header');
const helloClass = document.querySelector('.hello');
const helloPress = document.querySelector('.press');
const helloID = document.getElementById('hello');
const botao = document.querySelector('button');
const helloLoad = document.querySelector('.load');
const helloAside = document.querySelector('aside');
console.log(helloAside);

helloAside.innerHTML = '<h3>Hello World!</h3>'
helloID.innerHTML = '<p>Hello World!</p>';
helloClass.innerHTML = '<h2>Hello World!</h2>'
helloHeader.innerHTML = '<h1>Hello World!</h1>';

var i = 5;
helloLoad.innerHTML = 'Surpresa em ' + i;

setInterval(()=>{
    if(i>1){
        i--;
        helloLoad.innerHTML = 'Surpresa em ' + i;
    }else{
        helloLoad.innerHTML = '<h3>Hello World!</h3>';
        clearInterval()
    }
},1000);

botao.addEventListener('click', ()=>{
    botao.innerHTML = 'Hello world!';
});

document.addEventListener('keydown', (e)=>{
    if(e.key=='Enter'){
        helloPress.innerHTML = '<h4>Hello World!</h4>';
    }
});