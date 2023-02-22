
function handleClick(event){
  event.preventDefault()
  fetchPage(event.target.href)
}

async function fetchPage(url){
  const pageResponse = await fetch(url)
  const pageJson = await pageResponse.text()
   replaceContent(pageJson)
}

function replaceContent(newText){
  const newHtml = document.createElement("div")
  newHtml.innerHTML = newText

  const odlContent = documen.querySelector(".content")
  const newContent = newHtml.querySelector(".content")
  odlContent.innerHTML = newContent.innerHTML
}

const links = Array.from(document.querySelectorAll("a"))
links.forEach((link) => {
  link.addEventListener("click", handleClick)
})
