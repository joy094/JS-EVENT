d= document.querySelector('#p1')
    function f1(){
    d.classList.add('six');
    
    e.classList.add('seven')
    }
     function f2(){
    d.classList.remove('six')}
    
    //বাটন কালার
    
   document.querySelector('#btn1').style.backgroundColor="red" ;
   document.querySelector('#btn2').style.backgroundColor="red"
   
   var e=document.querySelector('#btn1');
   
   
   
   //addEventListner with function
   
   document.querySelector('#btn30').addEventListener('click', function() {
   
     alert('hello');
   
   });
   
   var event=document.querySelector('#p50');
   event.addEventListener('mouseover',function() {event.classList.add('six')
     
   })
   
   event.addEventListener = ('mouseout', function() {
     event.classList.remove('six')
   
   })
   