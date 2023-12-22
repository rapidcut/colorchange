const body = document.querySelector('body');

const btns = document.querySelectorAll('.button');


btns.forEach(btn => {
  
    
    btn.addEventListener('click',function name(e) {
        if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id ;
            body.style.color = 'white';
            console.log(this.e)
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id ;
            body.style.color = 'white';
        }


        
    })



});




