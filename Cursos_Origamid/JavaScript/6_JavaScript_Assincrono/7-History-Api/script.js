const links = Array.from(document.querySelectorAll("a"))

function handleClick(event){
  event.preventDefault()
  fetchPage(event.target.href)
}

async function fetchPage(url){
  document.querySelector(".content").innerHTML = "Carregando..."
  const pageResponse = await fetch(url)
  const pageJson = await pageResponse.text()
  replaceContent(pageJson)
  window.history.pushState(null,null,url)
}

function replaceContent(newText){
  const newHtml = document.createElement("div")
  newHtml.innerHTML = newText

  const oldContent = document.querySelector(".content")
  const newContent = newHtml.querySelector(".content")
  oldContent.innerHTML = newContent.innerHTML
  document.title = newHtml.querySelector("title").innerText
}

window.addEventListener("popstate", () => {
 fetchPage(window.location.href)
})

links.forEach((link) => {
  link.addEventListener("click", handleClick)
})






