/* Here you have to add a keydown event listener on window so that you can get 
information of which key is pressed and build logic around it.
Then you have to build logic such that, Each key press changes the color of its
corrosponsing letter ('letters are inside span tags, having class .letter').
Change it to the color provided below. 

Important ID(s): container's (div) id = 'container'
Important Class(s): class for span tags containing letters = 'letter' */
const COLOR = 'rgb(128, 128, 255)'

/* code from here */
const list=document.getElementsByClassName("letter");
window.addEventListener('keydown', function(e){
if(e.key=='d'){
list[0].style.color= COLOR;}
else if(e.key=='e'){
list[1].style.color= COLOR; 
  list[5].style.color= COLOR;}
else if(e.key=='v'){
list[2].style.color= COLOR;}
else if(e.key=='s'){
list[3].style.color= COLOR; 
  list[6].style.color=COLOR;}
else if(e.key=='n'){
list[4].style.color= COLOR;}
else if(e.key=='t'){
list[7].style.color= COLOR;
}
})

/* to here */
