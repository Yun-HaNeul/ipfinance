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
                header.classList.add("active");
            }else {
                header.classList.remove("active");
            }
        }
        document.addEventListener('scroll', scrollHandler);
        
    }
    headerHandler();
    // nav
    function navHandler(){
        const burger = document.querySelector(".hamburgerWrap");
        const body = document.getElementsByTagName('body')[0];
        function burgerhandler(){
            let tg = this.parentNode;
            if(!tg.classList.contains("active")){
                tg.classList.add("active");
                body.style.overflow = 'hidden'
                
            }else {
                tg.classList.remove("active");
                body.style.overflow = 'visible'
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