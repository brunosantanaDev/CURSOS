/*
function azul(){
    removerCor();
    document.getElementById("titulo").classList.add("azul");
}

function vermelho(){
    removerCor();
    document.getElementById("titulo").classList.add("vermelho");
}

function verde(){
    removerCor();
    document.getElementById("titulo").classList.add("verde");
}


function removerCor(){
    document.getElementById("titulo").classList.remove("azul");
    document.getElementById("titulo").classList.remove("vermelho");
    document.getElementById("titulo").classList.remove("verde");

}
*/

/*
document.getElementById("botton").addEventListener("click", function(){
    this.style.display = "none";
    document.getElementById("telefone").style.display = "block";
});
*/

/*
function mostrarTelefone(){
    document.getElementById("telefone").style.display = "block";
}
*/


document.getElementById("menu-opener").addEventListener("click", function(){ 

    if(document.getElementById("menu-area").style.width == "200px"){

        document.getElementById("menu-area").style.width = "0px";

    }else{

        document.getElementById("menu-area").style.width = "200px";
    }
    
});

let nome = "Bruno Henrique";

let teste = typeof(nome);

console.log(teste);




















































