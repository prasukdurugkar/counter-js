let count = 0

const decrease = document.querySelector('.decrease');

const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')

const value = document.getElementById('value')


 decrease.addEventListener('click', ()=>{
     count--
     value.textContent = count
    console.log(count)
    
})
 reset.addEventListener('click', ()=>{
     count = 0;
     value.textContent = count
    console.log(count)
})
 
 increase.addEventListener('click', ()=>{
     count++;
     value.textContent = count
    console.log(count)
    
})
 
if(count > 0){
    value.style.color = 'red';
}