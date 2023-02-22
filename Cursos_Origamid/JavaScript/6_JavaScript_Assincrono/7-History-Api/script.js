

function handleClick(event){
  event.preventDefault()
  fetchPage(event.target.href)
}

async function fetchPage(url){
  const pageResponse = await fetch(url)
  const pageJson = await pageResponse.text()
  
}


window.history.pushState(null, null, "sobre.html")

window.addEventListener("popstate", () => {
  console.log("teste")
})