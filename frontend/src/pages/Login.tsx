import { useState, type FormEvent } from "react"
import { axiosInstance } from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function Login () {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate =  useNavigate()

    const handleLogin = async (e:FormEvent) => {
        e.preventDefault();
        console.log('clicou')
        try {
            const response = await axiosInstance.post("/login", {
                email: email,
                senha: senha
            })
            console.log(response.data)
            
            if (response.data && response.data.acessToken) {
                console.log(`this is a data returns ${response.data} && ${response.data.acessToken}`)
                localStorage.setItem('cm:token', response.data.acessToken)
                navigate('/news')
            }
            console.log('fim')

        }catch (error) {
            console.log('ocorreu um erro', error)
        }
        
    }

    return (
        <section>
            <form onSubmit={handleLogin}>
                <label>Digite seu email:</label>
                <input type="email" placeholder="Email"className="border-2 border-b-black" onChange={({target}) => setEmail(target.value)}/>

                <label>Informe a senha:</label>
                <input type="password" placeholder="Senha" className="border-2 border-b-black" onChange={({target}) => setSenha(target.value)} />

                <input type="submit" />

            </form>
        </section>
    )
}