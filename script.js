'use strict';
const dicephotos=['dice-1.png','dice-2.png','dice-3.png','dice-4.png','dice-5.png','dice-6.png'];
 let current=document.getElementById('current--0');
 let playeroneactive=document.querySelector('.player--0');
  let playertwoactive=document.querySelector('.player--1');
  let activeplayer=0;
  let currentscore=0;
  
  const scores=[0,0];
  let score_0=document.getElementById('score--0');
  let score_1=document.getElementById('score--1');
 
let dice=document.querySelector('.dice');
 let roll=document.querySelector('.btn--roll');
let playerone=document.getElementById('score--0');
let playertwo=document.getElementById('score--1');
playerone.textContent=0;
playertwo.textContent=0;
 let score_after_one=document.getElementById(`score--${activeplayer}`);
 let score_after_hold=document.getElementById(`score--${activeplayer}`);
 let current1=0;
dice.classList.add('hidden');
  
   roll.addEventListener('click',function(){
    dice.classList.remove('hidden');
   const Number = Math.trunc(Math.random() * 6) + 1;
 dice.src=`${dicephotos[Number-1]}`;
  if(Number!==1)
   {
    currentscore+=Number;
document.getElementById(`current--${activeplayer}`).textContent=currentscore;
  scores[`${activeplayer}`]+=currentscore;
 // document.getElementById(`current--${activeplayer}`).textContent=currentscore;
}
   else{
score_after_one=document.getElementById(`score--${activeplayer}`);
score_after_one.textContent=scores[`${activeplayer}`];
document.getElementById(`current--${activeplayer}`).textContent=0;
    currentscore=0;
   activeplayer= activeplayer=== 0 ? 1 : 0;
   document.getElementById(`current--${activeplayer}`).textContent=0;
playeroneactive.classList.toggle('player--active');
playertwoactive.classList.toggle('player--active');
   }

   });

   //hold
   const hold=document.querySelector('.btn--hold');
   console.log(hold);
    hold.addEventListener('click',function(){
 score_after_hold=document.getElementById(`score--${activeplayer}`);
 score_after_hold.textContent=scores[`${activeplayer}`];
  document.getElementById(`current--${activeplayer}`).textContent=0;
     playeroneactive.classList.toggle('player--active');
playertwoactive.classList.toggle('player--active');
  currentscore=0;
activeplayer=activeplayer===0?1:0;

    })

  let reset=document.querySelector('.btn--new');
  reset.addEventListener('click',function(){
    currentscore=0;
    current1=0;
    current=0;
    activeplayer=0;
    score_0=0;
    score_1=0;
    document.getElementById(`current--${activeplayer}`).textContent=0;
    score_after_hold.textContent=0;
    score_after_one.textContent=0;
    scores[0]=0;
    scores[1]=0;
dice.classList.add('hidden');

  })
