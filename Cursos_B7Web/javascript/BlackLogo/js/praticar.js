

window.onload = function(){

    document.querySelector(".botao").addEventListener("click", function(){
        
        if(confirm("tem certeza que deseja me excluir?")){
            alert("Sua mensagem foi excluida com sucesso.");
            return true;
        }else{
            alert("Ok sua exclusão foi cancelada com sucesso.");
            return false;
        }
    });   

    nome = () =>{

    }
};

//var lista = ['ovo','macarrão','farinha','feijão'];
//res = Object.entries(lista);
//console.log(res);

const sel = (el) => document.querySelector(el);
sel('.lightbox img').addEventListener("click", ()=>{
    document.querySelector('.modal').style.opacity = '0.3';
    document.querySelector('.modal').style.display = 'flex';
    document.querySelector('.img').style.border = '0';        
    setTimeout(()=>{
		document.querySelector('.modal').style.opacity = '1';
		document.querySelector('.img img').style.opacity = '1';
		document.querySelector('.img').style.border = '10px solid #fff';
    }, 1000);
});

sel('.md').addEventListener("click", ()=>{
    document.querySelector('.modal').style.opacity = '0.5';
    document.querySelector('.img img').style.opacity = '0';
    document.querySelector('.img').style.border = '0px solid #fff';
    setTimeout(()=>{
        document.querySelector('.modal').style.display = 'none';
    }, 1000);
});


























































