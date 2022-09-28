document.addEventListener("DOMContentLoaded",function(){
    //haader
    function headerHandler(){
        const header = document.querySelector("#header");
        const tab = document.querySelectorAll(".burger ");
        let tg1 = document.querySelector(".mainvisual");
        let tg1Height = tg1.clientHeight;
        
        function scrollHandler(){
            let currentsct = document.documentElement.scrollTop;
            if(currentsct > tg1Height){
                header.style.color = '#222222';
                tab.forEach(function(item){
                    item.style.backgroundColor = "#222";
                })
            }else {
                header.style.color = '#fff';
                tab.forEach(function(item){
                    item.style.backgroundColor = "#fff";
                })
            }
        }
        document.addEventListener('scroll', scrollHandler)
        
    }
    headerHandler();
    // nav
    function navHandler(){
        const burger = document.querySelector(".hamburgerWrap");
        function burgerhandler(){
            let tg = this.parentNode;
            if(!tg.classList.contains("active")){
                tg.classList.add("active");
            }else {
                tg.classList.remove("active");
            }
        }
        burger.addEventListener("click",burgerhandler);
    }
    navHandler();

    //top
    function topBtnHandler(){
        const topBtn = document.querySelector(".top");

        topBtn.addEventListener("click",function(e){
            e.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
        })
    }
    topBtnHandler();
})//end