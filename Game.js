const RulesBtn=document.querySelector('#rules-btn');
const CloseBtn=document.querySelector('#close-btn');
const Rules=document.querySelector('#rules');

RulesBtn.addEventListener('click',()=>{
    Rules.classList.add('show');
})
CloseBtn.addEventListener('click',()=>{
    Rules.classList.remove('show');
})