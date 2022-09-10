const digitos = document.querySelectorAll('button');
const result = document.querySelector('.result');
var entradas = [];
var resultado = '';

function operations(val){
    var i=0;
    var aux = parseFloat(val[0]);
    console.log(aux);
    
    for(i; i<val.length; i++){
        
        switch(val[i]){
            case "+":
            aux+=parseFloat(val[i+1]);
            break;
            
            case "-":
            aux-=parseFloat(val[i+1]);
            break;
            
            case "*":
            aux*=parseFloat(val[i+1]);
            break;
            
            case "/":
            aux/=parseFloat(val[i+1]);
            break;  
        }
    }
    return aux;    
}

function numbers(val){
    resultado += val;
    result.innerHTML += val;
}

function opsConclude(val){
    resultado += val;
    result.innerHTML = val;
}

var val ='';

function calculadora(e){ 
    if(val.match(/\d/)){
        if(result.classList.contains('conclude')){
            result.classList.remove('conclude')
            result.innerHTML="";
            numbers(val);
        }else{
            numbers(val);
        }            
    }
    else if(val=="," && result.innerHTML.match(/,/)){
        
    }
    else if(val==","){
        numbers(val);
    }
    else if(val=="CE" || val=="Backspace"){
        resultado ='';
        entradas = [];
        result.innerHTML = "";
        result.classList.remove('conclude');
    }
    else if(val=="=" || val=="Enter"){
        if(resultado !=""){
            entradas.push(resultado);
        }
        var teste = entradas[entradas.length-1];
        
        if(teste.match(/\d/)){
            result.classList.add('conclude');
            resultado = operations(entradas).toString();
            result.innerHTML = resultado.replace('.',',');
            setTimeout(()=>{
                resultado = "";
                entradas = [];
            },0);
        }
        
    }
    else if (val == "+"||val=="-"|| val == "*"||val=="/"){
        if(result.classList.contains('conclude')){
            result.classList.remove('conclude')
            opsConclude(result.innerHTML);
        }
        result.innerHTML += " " + val + " ";
        resultado = resultado.replace(',','.');
        entradas.push(resultado,val)
        setTimeout(()=>{
            resultado="";
        },0)
    }else{

    }
}

digitos.forEach((dig)=>{
    dig.addEventListener('click', (e)=>{
        val = e.target.innerHTML;
        calculadora(e);
    });
});

document.addEventListener('keydown',(e)=>{
    val = e.key;
    calculadora(val);
})

