import { useState } from "react"
import { RegisterEstils, FormEstils, InputEstils, TextoEstilo} from '../Styled';
import Header from "./Header"

const Registre = () => {
const[estaLogueado, setEstaLogueado]= useState(false)


const [valor, setValor] = useState({
nickname: JSON.parse(localStorage.getItem("nickname")),
email:JSON.parse(localStorage.getItem("email")),
password: JSON.parse(localStorage.getItem("password"))
 })

 
 
 const handleSubmit = (e) => {
    e.preventDefault()

    if(valor.nickname.includes("") && valor.email.includes("") && valor.password.includes("")){
        setEstaLogueado(true)         
    }

}
const setLocalStorage = value => {
    try{
        setValor(value)
        
        window.localStorage.setItem("nickname", JSON.stringify(valor.nickname))
        window.localStorage.setItem("email", JSON.stringify(valor.email))
        window.localStorage.setItem("password", JSON.stringify(valor.password))
        window.localStorage.setItem("estaLogueado", JSON.stringify(estaLogueado))

    }catch (error){
        console.error(error)
    }

}
    
const Change = (e) => {
    
    setLocalStorage({...valor, [e.target.name]: e.target.value})

}


    
return(
    <RegisterEstils>
        <Header/>
        
        {estaLogueado
            ?
            <TextoEstilo>Gracias {valor.nickname} ya estas registrado!</TextoEstilo>
            :
        <FormEstils onSubmit={handleSubmit}>
            <label>Nickname:</label>
            <InputEstils
            id="nickname"
            name="nickname"
            type="text"
            placeholder="Escribe tu nickname"
            value={valor.nickname}
            onChange={Change}
            required
            />
                
            <label>Email:</label>
            <InputEstils
            id="email"
            name="email"
            type="email"
            placeholder="Escribe tu email"
            value={valor.email}
            onChange={Change}
            required
            />
                
            <label>Password:</label>
            <InputEstils
            id="password"
            name="password"
            type="password"
            placeholder="Escribe tu contraseña"
            value={valor.password}
            onChange={Change}
            required
            />
            <input
            type="submit"
            />
            </FormEstils>
            }
            
 </RegisterEstils>
)
}

export default Registre;
    
    