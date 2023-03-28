//import showUsers from "./module/exibir-usuarios.js"

export default function cadastrarNovosUsuarios(){
    function cadastrarNomes(event){
        event.preventDefault()
        const name = document.querySelector("#nome")
        const email = document.querySelector("#email")
        const verifyValues = name.value !== "" && email.value !== ""
    
        if(verifyValues){
            const localStorageVerify = localStorage.users === undefined
            if(localStorageVerify)   
                localStorage.setItem('users', '[]')

            const setUser = {
                nome: name.value,
                email: email.value
            }
            
            const getUsersArray = JSON.parse(localStorage.users)
            getUsersArray.push(setUser)
            const newUser = JSON.stringify(getUsersArray)
            localStorage.setItem('users',newUser)

            name.value = ""
            email.value = ""
            window.location = './'
        }else{
            alert("Preencha os campos")
        }
    }


    const form = document.querySelector('button')
    form.addEventListener('click', cadastrarNomes)

}