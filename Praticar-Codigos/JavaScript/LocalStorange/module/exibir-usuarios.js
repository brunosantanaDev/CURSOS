export default function showUsers(){
    const listagem = document.querySelector(".listagem")
    const localArray = JSON.parse(localStorage.users)

    localArray.forEach(({nome, email}) => {
        const elementTr = document.createElement('tr')            
        elementTr.innerHTML = `<td>${nome}</td><td>${email}</td>`
        listagem.append(elementTr)
    });
}