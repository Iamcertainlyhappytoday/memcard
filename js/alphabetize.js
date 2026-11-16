let converbutton=document.getElementById('convbutton');
converbutton.addEventListener('click',converter);
let imagesort=[];

let tidy=document.getElementById('paratidy');
tidy.addEventListener('click', paratidy);
let tidyp;
let inneri = [];
let imagesortb = [];
function converter(){
    inneri=[];    
    let a=document.querySelector('#divorig').value;
    let b=a.replace(/[\d.\b,,":;!?=]/gm,' ').trim();   
    let imagesortb=b.split(' '); 
     for(let i=0;  i<imagesortb.length; i++){        
        if(imagesortb[i]=='&'){         
            inneri.push('&')   
              imagesortb.splice(i,1,'and');       
        }  
          else if(imagesortb[i]=='and'){
            inneri.push('and')          
        } 
         else if(imagesortb[i]=='And'){
            inneri.push('And')          
        }   
    }  
imagesort=imagesortb.sort((a, b) => a.localeCompare( b , 
            undefined, { sensitivity: 'base' }));   
document.querySelector('#newp').value='';   
   keepconverting()
}
function keepconverting(){
    imagesortc=imagesort;
    let ll= inneri.length;
    let point=imagesort.indexOf('and'); 
    
    let pointed = point;   
//more clever than I realised
    for(let i=0; i<ll; i++){
        imagesortc.splice(pointed, 1, inneri[i]);
        pointed++;
    };
    document.querySelector('#tidyp').innerHTML=Object.values(inneri);        
    for(i=0; i<imagesortc.length; i++){
        document.querySelector('#newp').value=Object.values(imagesortc);
    }
}
function paratidy(){
     document.querySelector('#newp').value='';  
      
nextp()
}
function nextp(){
    document.querySelector('#tidyp').textContent='haha' ;
}
let lister=document.querySelectorAll('li');
for(let i=0; i<lister.length; i++){
    lister[i].addEventListener('mouseover', bluer);
    lister[i].addEventListener('mouseout',normal);
}
function bluer(e){   
    console.log('hi lister');
   
        e.target.style='color:white;background-color:blue; '    
}
function normal(e){
    e.target.style="background-color:brown, color:blanchedalmond;"
}
function changeStyle(cls,clr,clr2) {
  let elems = document.getElementsByClassName(cls);
  if(!elems) return;
  for (let elem of elems) {
    elem.style.background= clr2;
      elem.style.color = clr;      
  }
}
function changeRed(cls,clr,clr2) {
  let elems = document.getElementsByClassName(cls);
  if(!elems) return;
  for (let elem of elems) {
    elem.style.background= clr2;
      elem.style.color = clr;      
  }
}   

