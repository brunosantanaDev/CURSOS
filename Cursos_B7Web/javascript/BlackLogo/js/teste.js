
window.onload = function(){
    document.querySelector(".menu-mobile").addEventListener("click", function(){

        if(document.querySelector(".menu ul").style.display == "block"){

            document.querySelector(".menu ul").style.display = "none";
            document.querySelector(".menu-mobile").src = "menu-mobile.png";
            document.querySelector(".menu ul").style.width = "0px";

        }else{
            document.querySelector(".menu ul").style.width = "100%";
            document.querySelector(".menu ul").style.display = "block";
            document.querySelector(".menu-mobile").src = "x-mobile.png";

        }

        

    });
}


















































