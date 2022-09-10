/*<tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr>*/

const button = document.querySelector('.btn-primary');
const load = document.querySelector('.load');
const form = document.querySelector('form');
const table = document.querySelector('table');



form.addEventListener('submit', (e) => { 
    e.preventDefault();
    load.style.display = 'block';

    var responseTable = "";

    for(var i=0; i<7; i++) {
        if(e.target[i].checked){
            responseTable += `<th>${e.target[i].value}</th>`; 
            console.log('condition1')
        }
        else if(i==3){
            responseTable += `<th>${e.target[i].options[e.target[i].selectedIndex].value}</th>`;
            console.log('condition2')
            
        }else if(i!=4 && i!=5){
            responseTable += `<th>${e.target[i].value}</th>`;
            console.log('condition3')
        }
        
    }
    setTimeout(() => {
        load.style.display = 'none';
        table.innerHTML+=`<tr>${responseTable}</tr>`;
    },2000);
        
    
});
