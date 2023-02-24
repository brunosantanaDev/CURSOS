const links = Array.from(document.querySelectorAll("a"))

links.forEach((link) => {
  link.addEventListener("click", handleClick)
})

function handleClick(event){
  event.preventDefault()
  const url = event.target.href
  fetchPage(url)
}

async function fetchPage(url){
  document.querySelector(".content").innerHTML = "Carregando..."
  const pageResponse = await fetch(url)
  const pageText = await pageResponse.text()
  window.history.pushState(null,null,url)
  replaceContent(pageText)
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
console.log(this)
})








