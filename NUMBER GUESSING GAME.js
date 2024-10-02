let random=Math.floor(Math.random()*100);
document.querySelector("#buttonarea").addEventListener ('click',()=>{
    let userguess = Number(document.querySelector("#userguess").value);
    let showresult=document.querySelector("#historyarea > h2")
    if(userguess && userguess>=1){
        console.log(userguess);
        if(userguess>random){
        showresult.innerHTML="too big"
        }else if(userguess<random){
         showresult.innerHTML="too small"            
        }else{
            alert("YOU WIN")
            showresult.innerHTML="YOU WIN!"            

        }

    }

});