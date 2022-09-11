/*<tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr>*/

const button = document.querySelector('.btn-primary');
const load = document.querySelector('.load');
const form = document.querySelector('form');
var table = document.querySelector('table');
table = table.querySelector('tbody');

function erro(val){
    val.style.border = '1px solid red';
    alert(`Verifique o campo de ${val.getAttribute('id')}`);
    load.style.display = 'none'; 
}

const refreshButton = document.querySelector('#refresh');
const cocaPlacar = document.querySelector('.coca');
const pepsiPlacar = document.querySelector('.pepsi');

const placar = ()=>{
    var tableRows = table.querySelectorAll('tr');
    var coca = 0;
    var pepsi = 0;
    tableRows.forEach((row)=>{
        var column = row.querySelectorAll('td');
        if(column[4].innerHTML=="Pepsi"){
            pepsi++;
            pepsiPlacar.querySelector('p').innerHTML = pepsi;
        }else{
            coca++;
            cocaPlacar.querySelector('p').innerHTML = coca;
        };
    });
};

form.addEventListener('submit', (e) => { 
    e.preventDefault();
    load.style.display = 'block';
    var responseTable = "";

    for(var i=0; i<7; i++){
        
        if(e.target[i].checked){
            responseTable += `<td>${e.target[i].value}</td>`;
        }
        else if(i==1){
            if(e.target[i].value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
                responseTable += `<td>${e.target[i].value}</td>`;
                e.target[i].style.border = 'none';
            }else{
                return erro(e.target[i]);
            }
        }
        else if(i==3){
            if(e.target[i].options[e.target[i].selectedIndex].value=='UF'){            
                return erro(e.target[i]);
                
            }else{
                responseTable += `<td>${e.target[i].options[e.target[i].selectedIndex].value}</td>`;
                e.target[i].style.border = 'none';
            }
            
        }else if(i!=4 && i!=5){
            responseTable += `<td>${e.target[i].value}</td>`;
        }
    }

    setTimeout(() => {
        load.style.display = 'none';
        table.innerHTML+=`<tr>${responseTable}</tr>`;
        placar();
        console.log(table);
    },15);
    
});

