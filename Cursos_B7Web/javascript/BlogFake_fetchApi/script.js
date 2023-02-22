// https://jsonplaceholder.typicode.com/posts
  const elPost = document.querySelector(".posts")

async function puxarDados(){
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const json = await response.json()

  if(json.length > 0){
      loadingPosts(json)
  }else{
      elPost.innerHTML = "Não ha nenhum post ou a importação dos dados falhou..."
    }
}
puxarDados()

function loadingPosts(json){
   elPost.innerHTML = "";
  
    for(i of json){
      const post = `<h2>${i.title}</h2> <div>${i.body}</div><hr>`;
      const div = document.createElement("div")
      div.innerHTML = post;
      elPost.append(div)
    }
}