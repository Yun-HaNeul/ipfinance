document.addEventListener("DOMContentLoaded",function(){
    const input = document.querySelectorAll(".input");
    const loginBtn = document.querySelector(".login-btn")
    input.forEach(function(item){

        item.addEventListener("click",function(){
            let tg = this.parentElement;
            if(!tg.classList.contains("active")){
                tg.classList.add("active");
            }
        })
        item.addEventListener("focus",function(){
            let tg = this.parentElement;
            if(!tg.classList.contains("active")){
                tg.classList.add("active");
            }
        })
    })

    
})//end