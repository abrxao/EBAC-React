/*<tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr>*/

const button = document.querySelector('.btn-primary');
const load = document.querySelector('.load');
const form = document.querySelector('form');
const table = document.querySelector('table');

form.addEventListener('submit', (e) => { 
    e.preventDefault();
    load.style.display = 'block';

    var responseTable = "";

    for(var i=0; i<8; i++) {
        if(i>=5 && i<7){
            if(e.target[i].checked){
                responseTable += `<th>${e.target[i].value}</th>`; 
            }

        }else if(i==3){
            responseTable += `<th>${e.target[i].options[e.target[i].selectedIndex].value}</th>`;
            
        }else{
            responseTable += `<th>${e.target[i].value}</th>`; 
        }
        
    }
    setTimeout(() => {
        load.style.display = 'none';
        table.innerHTML+=`<tr>${responseTable}</tr>`;
    },2000);
        
    
});
