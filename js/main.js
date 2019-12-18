'sue strict';
{
    const circle = document.getElementById('circle');
    circle.addEventListener('click',() => {
            //*****Step 01 *********
        // const results = ['a','b','c','d'];
        // const n = Math.floor(Math.random() * results.length );
        // circle.textContent = results[n];  
        
           //*****Step 02 *********

        const n = Math.random();
        if(n<0.02){
            circle.textContent = '大吉';
        }else if(n<0.03){
            circle.textContent = '中吉';
        }else if( n < 0.1){
            circle.textContent = '小吉';
        }else if ( n < 0.3){
            circle.textContent = '吉';
        }else if ( n< 0.4){
            circle.textContent = '末吉';
        }else if ( n<0.9){
            circle.textContent = '凶';
        }
        else{
            circle.textContent = '大凶';
        }
            //*****Step 03 *********

        // const n = Math.floor(Math.random()*3)
        // circle.textContent = 'n';
        // switch(n) {
        //     case 0 :
        //     circle.textContent = 'A';
        //     break;
        //     case 1 :
        //         circle.textContent = 'B';
        //     break;
        //     case 2 :
        //         circle.textContent = 'C';
                

      //  }
    })






}