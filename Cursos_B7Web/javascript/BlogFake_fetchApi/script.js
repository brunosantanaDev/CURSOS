// https://jsonplaceholder.typicode.com/posts

async function loadingPosts(){
  const elPost = document.querySelector(".posts")
  elPost.innerHTML = "Carregando..."

  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const json = await response.json()

  if(json.length > 0){
    elPost.innerHTML = "";
  
    for(i of json){
      const post = `<h2>${i.title}</h2> <div>${i.body}</div>`;
      const div = document.createElement("div")
      div.innerHTML = post;
      elPost.append(div)
    }
  }

}

loadingPosts()